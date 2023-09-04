"use client";

import useAuth from "@/context/useAuth";
import ProfileCard from "@/components/profileCard";
import Login from "@/components/Login";

const Home = () => { 
    const {authStatus} = useAuth();
    return (
        <div>
            {authStatus ? <ProfileCard /> : <Login />}
        </div>
    )
}
export default Home;