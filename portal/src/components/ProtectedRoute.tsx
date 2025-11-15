"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { AdminPageSkeleton } from "@/components/AdminPageSkeleton";

interface ProtectedRouteProps {
  children: React.ReactNode;
  admin?: boolean;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  admin = false,
}) => {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth/login");
      } else if (admin && user.role_access !== "admin") {
        router.push("/401");
      }
    }
  }, [loading, user, admin, router]);

  if (loading) {
    if (admin) {
      return <AdminPageSkeleton />;
    }
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
