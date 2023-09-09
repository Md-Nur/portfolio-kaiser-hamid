"use client";

import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Loader from "@/components/basic/Loader";

const LogoutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();

  useEffect(() => {
    appwriteService.logout().then(() => {
      setAuthStatus(false);
      router.replace("/admin/login");
    });
  }, []);

  return <Loader/>;
};
export default LogoutPage;
