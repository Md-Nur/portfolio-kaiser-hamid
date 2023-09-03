"use client";
import appwriteService from "../services/appwriteService";
import { useRouter } from 'next/navigation'
import { FormEvent, useState } from "react";
import Link from "next/link";
import useAuth  from "../context/useAuth";

const Login = () => {

   const router = useRouter();
   const {setAuthState} = useAuth();
   const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [error, setError] = useState("");
    const login = async (e) => {
      e.preventDefault();
      try {
        const session = await appwriteService.login(formData);
        if (session) {
          setAuthState(session);
          router.push("/profile");
        }
      } catch (error) {
        setError(error.message);
      }
    };




  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>
      </main>
    </div>
  );
};

export default Login;
