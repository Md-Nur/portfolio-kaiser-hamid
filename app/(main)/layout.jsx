"use client";
import appwriteService from "@/appwrite/config";
import Loader from "@/components/basic/Loader";
import MainContainer from "@/components/basic/MainContainer";
import { AuthProvider } from "@/context/authContext";
import Footer from "@/components/basic/Footer";
import Navbar from "@/components/basic/Navbar";
import React, { useEffect, useState } from "react";

const RootLayout = ({ children }) => {
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
      <Navbar>
        {loader ? (
          <MainContainer>
            <Loader />
          </MainContainer>
        ) : (
          children
        )}
      </Navbar>
      <Footer />
    </AuthProvider>
  );
};

export default RootLayout;
