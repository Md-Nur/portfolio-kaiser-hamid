import appwriteService from "@/appwrite/config";
import { useEffect, useState } from "react";
import Button from "./basic/Button";
import conf from "@/conf/config";
import AboutMeForm from "@/components/forms/AboutMeForm";

const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState("Loading...");
  let collectionId = conf.collections.aboutMe;
  let documentId = conf.aboutMeDocumentId;

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    appwriteService
      .readData(collectionId, documentId)
      .then((response) => {
        setAboutMeData(response["about_me"]);
      })
      .catch((error) => {
        setError(error.message);
      });
    appwriteService
      .isLoggedIn()
      .then(setLoggedIn)
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const [visibilty, setVisibilty] = useState(false);
  const updateInfo = () => {
    setVisibilty(true);
  };

  return (
    <section
      id="about-me"
      className="py-5 my-10 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold py-3 my-3">About Me</h2>
      <p className="text-justify">{aboutMeData}</p>
      {visibilty && <AboutMeForm />}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      {loggedIn && (
        <Button>
          <button onClick={updateInfo}>Update </button>
        </Button>
      )}
    </section>
  );
};

export default AboutMe;
