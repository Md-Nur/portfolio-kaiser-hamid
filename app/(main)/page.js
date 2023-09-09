"use client";
import LatestNews from "@/components/LatestNews";
import Hero from "@/components/Hero";
import MainContainer from "@/components/basic/MainContainer";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <MainContainer>
        <AboutMe />
        <LatestNews />
      </MainContainer>
    </>
  );
}
