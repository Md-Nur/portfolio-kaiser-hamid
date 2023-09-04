"use client";

import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import appwriteService from "@/appwrite/config";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then(() => {
      setAuthStatus(false);
      router.replace("/login");
    });
  }, []);

  return <></>;
};
export default LogoutPage;
