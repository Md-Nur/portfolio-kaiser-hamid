"use client";
import LatestNews from "@/components/LatestNews";
import Hero from "@/components/Hero";
import appwriteService from "@/appwrite/config";
import { useEffect, useState } from "react";



export default function Home() {
  const [aboutMeData, setAboutMeData] = useState("Loading...");
  let databaseId = "64f798cc47419119ff83";
  let collectionId = "64f798f22a16191eda71";
  let documentId = "64f79a9a675c6fddd8f2";
  useEffect(() => {
    appwriteService
      .readData(databaseId, collectionId, documentId)
      .then((response) => {
        setAboutMeData(response['about_me']);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Hero />
      <main className="m-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">
        <section id="about-me" className="py-5 my-10">
          <h2 className="text-4xl font-bold text-center py-3 my-3">About Me</h2>
          <p className="text-justify">{aboutMeData}</p>
        </section>

        <LatestNews />
      </main>
    </>
  );
}
