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
  const [professionalData, setProfessionalData] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const collectionId = conf.collections.professionalXp;

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setProfessionalData(res.documents.reverse());
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

  if (!professionalData) {
    return <Loader />;
  } else if (professionalData.length === 0) {
    return (
      <div className="py-10 flex flex-col items-center gap-3">
        {loggedIn && <Edit />}
        <h1 className="text-3xl font-bold my-5">Professional Experience</h1>
        <div className="text-center text-red-500 text-xl font-bold">
          No data found
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 flex flex-col items-center gap-3">
      {loggedIn && <Edit />}

      <h1 className="text-3xl font-bold my-5">Professional Experience</h1>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error.message}
        </div>
      )}
      <div className="flex flex-col gap-3">
        {professionalData.map((data, index) => (
          <Card>
            <div
              key={index}
              className="flex flex-wrap my-5 justify-between gap-3"
            >
              <h2 className="text-xl sm:text-2xl font-bold">{data.title}</h2>
              <span className="text-sm px-5 sm:text-lg  ">{data.date}</span>
              <span className="text-sm px-5 sm:text-lg">
                {data.description}
              </span>
              <span className="text-sm px-5 sm:text-lg  ">{data.company}</span>
            </div>
            {loggedIn && (
              <div className="flex justify-end gap-3 items-center">
                <RemoveData docId={data.$id} clId={collectionId} />
                <Edit data={data} />
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
