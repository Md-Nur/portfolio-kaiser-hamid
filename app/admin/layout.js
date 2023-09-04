"use client";
import appwriteService from "@/appwrite/config";
import Login from "@/components/Login";
import ProfileCard from "@/components/profileCard";
import { AuthProvider } from "@/context/authContext";
import { useEffect, useState } from "react";

const ProtectedLayout = ({ children }) => {
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService
      .isLoggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <AuthProvider value={{ authStatus, setAuthStatus }}>
      
      {!loader && (<main className="p-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">{children}</main>)}
    </AuthProvider>
  );
};
export default ProtectedLayout;
