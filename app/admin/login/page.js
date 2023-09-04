"use client";
import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import Login from "@/components/Login";

const LoginPage = () => {
  const Router = useRouter();
  const { authStatus } = useAuth();

  if (authStatus) {
    return Router.replace("/profile");
  }

  return <Login />;
};

export default LoginPage;
