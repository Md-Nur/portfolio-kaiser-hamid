"use client";
import { GiTrophy } from "react-icons/gi";
import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";

const page = () => {
  const [achievementData, setAchievementData] = useState(null);
  const collectionId = "64fdd79d8317edfbf6c2";
  let awardData = [];
  let certificationData = [];
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setAchievementData(res.documents.reverse());
      })
      .catch((err) => {
        setError(err);
      });
    appwriteService
      .isLoggedIn()
      .then(setLoggedIn)
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (achievementData) {
    awardData = achievementData.filter((item) => item.type === "award");
    certificationData = achievementData.filter(
      (item) => item.type === "certification"
    );
  }

  const addAchievments = () => {
    setVisibilty(true);
    window.location.reload();
  };
  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };

  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        {loggedIn && (
          <button className="w-44" onClick={addAchievments}>
            <Button>Add new award or certification</Button>
          </button>
        )}
        <h2 className="text-3xl mt-20 font-bold">Achievements & Awards</h2>
        {error && (
          <div className="flex flex-col items-center justify-center w-full">
            <h3 className="text-2xl mt-20 font-bold text-red-500">
              Error Occured
            </h3>
            <p className="text-xl mt-5 font-bold text-red-500">
              {error.message}
            </p>
          </div>
        )}
        {loggedIn && visibilty && <Edit updateId={updateId} />}
        {loggedIn && rmAlert && (
          <RemoveData docId={rmDocId} clId={collectionId} />
        )}

        <div className="flex flex-col justify-center w-full mt-5">
          {awardData.map((award, index) => (
            <div
              key={index}
              className="flex flex-wrap items-baseline gap-1 m-2"
            >
              <GiTrophy />
              <h3 className="text-xl font-bold md:text-lg lg:text-xl">
                [{award.date}]
              </h3>
              <p className="text-sm px-5 md:text-base lg:text-lg">
                {award.descption}
              </p>
              {award.youtubeLink ? (
                <a
                  href={award.youtubeLink}
                  target="_blank"
                  className="text-sm text-center md:text-base lg:text-lg hover:underline"
                >
                  [Youtube Link]
                </a>
              ) : null}
              {award.posterLink ? (
                <a
                  href={award.posterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-center md:text-base lg:text-lg   hover:underline"
                >
                  [Poster Link]
                </a>
              ) : null}
              {loggedIn && (
                <div className="space-x-5">
                  <button onClick={() => removeData(award.$id)}>
                    <Button>Remove</Button>
                  </button>
                  <button onClick={() => updateData(award.$id)}>
                    <Button>Update</Button>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        <h2 className="text-3xl mt-20 font-bold">Certifications</h2>
        <div className="flex flex-col w-full mt-5">
          {certificationData.map((certification, index) => (
            <div
              key={index}
              className="flex flex-wrap items-baseline gap-1 m-2"
            >
              <GiTrophy />
              <h3 className="text-xl font-bold md:text-lg lg:text-xl">
                [{certification.date}]
              </h3>
              <p className="text-sm px-5 md:text-base lg:text-lg">
                {certification.descption}
              </p>
              {certification.youtubeLink ? (
                <a
                  href={certification.youtubeLink}
                  target="_blank"
                  className="text-sm text-center md:text-base lg:text-lg   hover:underline"
                >
                  [Youtube Link]
                </a>
              ) : null}
              {certification.posterLink ? (
                <a
                  href={certification.posterLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-center md:text-base lg:text-lg hover:underline"
                >
                  [Poster Link]
                </a>
              ) : null}
              {loggedIn && (
                <div className="space-x-5">
                  <button onClick={() => removeData(certification.$id)}>
                    <Button>Remove</Button>
                  </button>
                  <button onClick={() => updateData(certification.$id)}>
                    <Button>Update</Button>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
