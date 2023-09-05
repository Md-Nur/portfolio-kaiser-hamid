"use client";
import ProfileCard from "@/components/profileCard";
import appwriteService from "@/appwrite/config";
import { useState } from "react";

let databaseId = "64f798cc47419119ff83";
let collectionId = "64f798f22a16191eda71";
let documentId = "64f79a9a675c6fddd8f2";

const ProfilePage = () => {
  const [data, setData] = useState({
    about_me: "",
  });
  const upadateAboutMe = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.updateData(
        databaseId,
        collectionId,
        documentId,
        data
      ).then((res) => {
        window.location.reload();
      }).then(() => {
        alert("About Me Updated");
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <ProfileCard />
      {/* Create a card for updating the about me section */}
      <div className="bg-color3 dark:bg-color2 my-16 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
        <h2 className="text-2xl font-bold text-center leading-tight w-full">
          About Me Section
        </h2>
        <form onSubmit={upadateAboutMe} className="w-full">
          <div className="space-y-5">
            <div>
              <div className="mt-2">
                <textarea
                  className="flex h-44 w-full rounded-md px-3 py-2 text-sm"
                  type="text"
                  value={data.about_me}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, about_me: e.target.value }))
                  }
                  placeholder="About Me. Update your about me section here. then click update. It will be replaced with the current text."
                  id="about_me"
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <input
                  className="inline-flex w-full md:w-1/2 items-center justify-center rounded-md text-color4 bg-color2 dark:text-color1 dark:bg-color3 p-3 mt-3"
                  type="submit"
                  value="Update"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
