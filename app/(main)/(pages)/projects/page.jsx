"use client";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";
import conf from "@/conf/config";

const page = () => {
  const [projectData, setProjectData] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = conf.collections.project;

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setProjectData(res.documents.reverse());
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

  if (!projectData) {
    return <Loader />;
  } else if (projectData.length === 0) {
    return (
      <div className="py-10 flex flex-col items-center gap-3">
        {loggedIn && <Edit />}
        <h1 className="text-3xl font-bold my-5">Projects</h1>
        <div className="text-center text-red-500 text-xl font-bold">
          No data found
        </div>
      </div>
    );
  }

  return (
    <>
      {loggedIn && <Edit />}
      <h2 className="text-4xl font-bold text-center py-3 my-3">Projects</h2>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error.message}
        </div>
      )}

      <div className="text-justify items-center justify-center pl-1 flex flex-col gap-10 mt-10">
        {projectData.map((data) => (
          <Card>
            <div className="flex justify-between items-center flex-wrap">
              <div className="text-3xl font-bold">{data.title}</div>
              <div className=" ">
                <em>({data.duration})</em>
              </div>
              {data.technologies ? (
                <div className="text-lg">
                  <strong>technologies:</strong> {data.technologies}
                </div>
              ) : null}
              {data.referencePreview1 ? (
                <div className="text-lg py-3">
                  <div className="">
                    <a
                      href={data.referenceUrl1}
                      target="_blank"
                      className="px-2  "
                    >
                      [{data.referencePreview1}]
                    </a>
                  </div>
                </div>
              ) : null}
              {data.referencePreview2 ? (
                <div className="text-lg py-3">
                  <div className="">
                    <a
                      href={data.referenceUrl2}
                      target="_blank"
                      className="px-2  "
                    >
                      [{data.referencePreview2}]
                    </a>
                  </div>
                </div>
              ) : null}
              <div className="py-3">{data.description}</div>
              {data.youtubeFrame ? (
                <iframe
                  src={data.youtubeFrame}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="mx-auto my-5 w-[96vw] h-[54vw] md:w-[80vw] md:h-[45vw] lg:w-[60vw] lg:h-[33.75vw] xl:w-[50vw] xl:h-[28.125vw] 2xl:w-[40vw] 2xl:h-[22.5vw]"
                ></iframe>
              ) : null}
              {data.imageUrls ? (
                <div className="flex flex-wrap gap-5 justify-around">
                  {data.imageUrls.map((url) => (
                    <img src={url} alt="Picture of project" />
                  ))}
                </div>
              ) : null}
            </div>
            {loggedIn && (
              <div className="flex justify-end gap-3">
                <div className="flex justify-end gap-3 items-center">
                  <RemoveData docId={data.$id} clId={collectionId} />
                  <Edit data={data} />
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default page;
