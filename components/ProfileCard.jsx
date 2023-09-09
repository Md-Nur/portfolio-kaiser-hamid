"use client";
import appwriteService from "@/appwrite/config";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Avatar from "./Avatar";
import Loader from "./basic/Loader";
import Card from "./basic/Card";
import Button from "./basic/Button";

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      const userData = await appwriteService.getCurrentUser();
      if (userData) {
        setUser(userData);
        setLoader(false);
      }
    })();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    user && (
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <div className="flex gap-y-6 flex-wrap">
            <div className="flex w-full gap-x-4 items-center">
              <div className="shrink-0 w-20">
                <Avatar width={100} height={100} shadowSize="shadow-md" />
              </div>
              <div className="relative">
                <p className="font-bold text-xl w-full mb-1">{user.name}</p>
                <div className="text-[12px] p-0.5 inline-block rounded-md bg-gradient-to-tr from-primary to-secondary"></div>
              </div>
            </div>
            <div className="relative w-full">
              <p className="text-sm">Display Name</p>
              <p className="font-semibold">{user.name}</p>
            </div>
            <div className="relative w-full">
              <p className="text-sm">Email Id</p>
              <p className="font-semibold">{user.email}</p>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Button>
              <Link href={"/logout"}>Logout</Link>
            </Button>
          </div>
        </div>
      </Card>
    )
  );
};
export default ProfileCard;
