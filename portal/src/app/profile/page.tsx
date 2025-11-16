"use client";
import { useUser } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";

const Profile = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <ProtectedRoute>
      <div>
        This is your profile:
        <p>{JSON.stringify(user)}</p>
      </div>
      <div>
        Your membership type:
        <p>{user?.membership_type}</p>
      </div>
      <Button onClick={() => router.push("/memberships")}>
        Manage my membership
      </Button>
    </ProtectedRoute>
  );
};

export default Profile;
