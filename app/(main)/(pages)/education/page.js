"use client";
import appwriteService from "@/appwrite/config";
import Card from "@/components/basic/Card";
import { useState, useEffect } from "react";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";
import Loader from "@/components/basic/Loader";

const page = () => {
  const [educationData, setEducationData] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = "64ff77fcbf9033b96220";

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setEducationData(res.documents.reverse());
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

  if (!educationData) {
    return <Loader/>
  }

  return (
    <section className="py-5 my-5 flex flex-col items-center">
      {loggedIn && (
        <button className="w-44" onClick={() => setVisibilty(true)}>
          <Button>Add new Education</Button>
        </button>
      )}
      <h2 className="text-4xl font-bold text-center my-3">Education</h2>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error.message}
        </div>
      )}
      {loggedIn && visibilty && <Edit updateId={updateId} />}
      {loggedIn && rmAlert && (
        <RemoveData docId={rmDocId} clId={collectionId} />
      )}
      <div className="flex flex-wrap gap-5">
        {educationData.map((data, index) => (
          <Card key={index}>
            <h3 className="text-2xl font-bold text-center py-3 my-3">
              {data.title}
            </h3>
            <p className="text-center text-xl">{data.institution}</p>
            <p className="text-center text-xl">{data.duration}</p>
            <p className="text-justify">{data.description}</p>
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
    </section>
  );
};

export default page;
