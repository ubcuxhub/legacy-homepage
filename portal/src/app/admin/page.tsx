"use client";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useUser } from "@/context/UserContext";

const AuthDashboard = () => {
  const { user, loading } = useUser();

  return (
    <ProtectedRoute admin>
      <div>page</div>
    </ProtectedRoute>
  );
};

export default AuthDashboard;
