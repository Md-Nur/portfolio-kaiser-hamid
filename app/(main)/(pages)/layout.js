"use client";
import appwriteService from "@/appwrite/config";
import Loader from "@/components/basic/Loader";
import MainContainer from "@/components/basic/MainContainer";
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
      {loader ? <Loader /> : <MainContainer>{children}</MainContainer>}
    </AuthProvider>
  );
};

export default ProtectedLayout;
