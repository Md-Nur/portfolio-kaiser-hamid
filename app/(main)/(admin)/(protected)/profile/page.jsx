"use client";
import ProfileCard from "@/components/ProfileCard";

import LatestNews from "@/components/forms/LatestNews";
import AboutMe from "@/components/forms/AboutMe";

const ProfilePage = () => {
  

  return (
    <div className="space-y-24">
      <ProfileCard />
      <AboutMe />
      <LatestNews />
    </div>
  );
};

export default ProfilePage;
