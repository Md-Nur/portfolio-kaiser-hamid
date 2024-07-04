"use client";
import Link from "next/link";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";
import conf from "@/conf/config";

const page = () => {
  const [researchData, setResearchData] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);

  const [updateId, setUpdateId] = useState(null);
  const collectionId = conf.collections.researchXp;

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setResearchData(res.documents.reverse());
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

  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };

  if (!researchData) {
    return <Loader />;
  } else if (researchData.length === 0) {
    return (
      <>
        {loggedIn && (
          <button className="w-44" onClick={() => setVisibilty(true)}>
            <Button>Add new Research Experience</Button>
          </button>
        )}
        <h2 className="text-4xl font-bold text-center py-3 my-3">
          Research Experience
        </h2>
        <div className="text-center text-red-500 text-xl font-bold">
          No data available
        </div>
        {loggedIn && visibilty && <Edit updateId={updateId} />}
      </>
    );
  }

  return (
    <>
      {loggedIn && (
        <button className="w-44" onClick={() => setVisibilty(true)}>
          <Button>Add new Research Experience</Button>
        </button>
      )}
      <h2 className="text-4xl font-bold text-center py-3 my-3">
        Research Experience
      </h2>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error.message}
        </div>
      )}
      {loggedIn && visibilty && <Edit updateId={updateId} />}
      <div className="text-justify pl-1 flex flex-col gap-10 mt-10">
        {researchData.map((data) => (
          <Card>
            <div className="flex justify-between items-baseline flex-wrap">
              <span className="text-2xl font-bold">{data.title}</span>
              <span className=" ">
                <em>({data.duration})</em>
              </span>
              {data.supervisor ? (
                <span className="text-lg">
                  <strong>Supervisor:</strong> {data.supervisor}
                </span>
              ) : null}
              <span className="py-3">{data.description}</span>
              {data.thesisUrl ? (
                <span className="text-lg">
                  You can read my thesis{" "}
                  <Link className=" " href={data.thesisUrl} target="_blank">
                    Here
                  </Link>
                </span>
              ) : null}
              {data.publicationsUrl ? (
                <span className="">
                  You can read my published articles from{" "}
                  <Link
                    className="text-red-500 font-bold"
                    href={data.publicationsUrl}
                    target="_blank"
                  >
                    publication
                  </Link>{" "}
                  section!!!
                </span>
              ) : null}
              {data.imageUrls ? (
                <span className="flex flex-col w-[100vw] justify-self-center my-3">
                  {data.imageTitle ? (
                    <span className="text-lg font-bold mx-auto text-center my-3">
                      {data.imageTitle}
                    </span>
                  ) : null}
                  <div className="flex flex-wrap gap-5 justify-around">
                    {data.imageUrls.map((url) => (
                      <img
                        src={url}
                        alt="Picture of work"
                        className="dark:bg-white"
                      />
                    ))}
                  </div>
                </span>
              ) : null}
              {data.main_objectives.length !== 0 ? (
                <span className="text-lg py-3">
                  <strong>Main Objectives & Findings:</strong>
                  <ul className="list-disc list-inside text-base px-3">
                    {data.main_objectives.map((obj) => (
                      <li className="pb-1">{obj}</li>
                    ))}
                  </ul>
                </span>
              ) : null}
              {data.reports.length !== 0 ? (
                <span className="text-lg py-3">
                  <strong>Reports of our results:</strong>
                  <ul className="list-disc list-inside text-base px-3">
                    {data.reports.map((obj) => (
                      <li className="pb-1">{obj}</li>
                    ))}
                  </ul>
                </span>
              ) : null}
              {data.external_collaborators_names.length > 0 ? (
                <span className="text-lg py-3">
                  <strong>External collaborators :</strong>
                  <div className="list-disc list-inside text-base px-3">
                    {data.external_collaborators_names.map((obj, index) => (
                      <div className="pb-1 my-3">
                        <p className="pb-1">{obj}</p>
                        <p className="pb-1">
                          {data.external_collaborators_company[index]}
                        </p>
                        <p className="pb-1">
                          {data.external_collaborators_education[index]}
                        </p>
                      </div>
                    ))}
                  </div>
                </span>
              ) : null}
              {loggedIn && (
                <div className="flex justify-end gap-3 w-full">
                  <RemoveData docId={data.$id} clId={collectionId} />
                  <button
                    className="text-blue-500 font-bold border rounded hover:border-blue-500 px-5"
                    onClick={() => updateData(data.$id)}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default page;
