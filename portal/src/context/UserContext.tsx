"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
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

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  const initialLoadDone = useRef(false);
  const lastAuthUserId = useRef<string | null>(null);

  const loadUser = async () => {
    try {
      if (!initialLoadDone.current) setLoading(true);

      const {
        data: { user: authUser },
        error: authError,
      } = await supabase.auth.getUser();

      if (authError || !authUser) {
        setUser(null);
        return;
      }

      const { data: member, error: memberError } = await supabase
        .from("user_info")
        .select("*")
        .eq("auth_user_id", authUser.id)
        .single();

      if (memberError) {
        console.error("Error fetching member:", memberError.message);
        setUser(null);
      } else {
        setUser(member);
      }
    } finally {
      initialLoadDone.current = true;
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      const newId = session?.user?.id ?? null;

      if (event === "TOKEN_REFRESHED") return;

      if (newId !== lastAuthUserId.current) {
        lastAuthUserId.current = newId;

        if (!newId) {
          setUser(null);
        } else {
          loadUser();
        }
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
