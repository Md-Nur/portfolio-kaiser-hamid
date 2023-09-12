"use client";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";

const page = () => {
  const [professionalData, setProfessionalData] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = "650079ce608213b800a2";

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

  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };

  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };

  if (!professionalData) {
    return <Loader />;
  }

  return (
    <div className="py-10 flex flex-col items-center gap-3">
      {loggedIn && (
        <button className="w-44" onClick={() => setVisibilty(true)}>
          <Button>Add new Professional Experience</Button>
        </button>
      )}

      <h1 className="text-3xl font-bold my-5">Professional Experience</h1>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error.message}
        </div>
      )}
      {loggedIn && visibilty && <Edit updateId={updateId} />}
      {loggedIn && rmAlert && (
        <RemoveData docId={rmDocId} clId={collectionId} />
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
              <div className="flex justify-end gap-3">
                <button
                  className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                  onClick={() => removeData(data.$id)}
                >
                  Remove
                </button>
                <button
                  className="text-blue-500 font-bold px-5 border  rounded hover:border-blue-700 "
                  onClick={() => updateData(data.$id)}
                >
                  Update
                </button>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default page;
