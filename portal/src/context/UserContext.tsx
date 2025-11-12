"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Member } from "@/lib/membershipUtils";

const supabase = createClient();

interface UserContextType {
  user: Member | null;
  loading: boolean;
  refreshUser: () => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  loading: true,
  refreshUser: async () => {},
});

export const useUser = () => useContext(UserContext);

// how to use:
// const { user, loading } = useUser();
// if (loading) return <p>Loading...</p>;

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      setLoading(true);

      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();
      if (authError || !authUser) {
        setUser(null);
        return;
      }

      const { data: member, error: memberError } = await supabase
        .from("userInfo")
        .select("*")
        .eq("auth_user_id", authUser.id)
        .single();

      if (memberError) {
        console.error("Error fetching member record:", memberError.message);
        setUser(null);
      } else {
        setUser(member);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        setUser(null);
      } else {
        loadUser();
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, loading, refreshUser: loadUser }}>
      {children}
    </UserContext.Provider>
  );
}
