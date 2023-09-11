"use client";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";

const page = () => {
  const [publicationData, setPublicationData] = useState(null);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = "64ff7fa8ea9a062831d3";

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setPublicationData(res.documents.reverse());
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

  if (!publicationData) {
    return <Loader />;
  }

  return (
    <section className="flex flex-col items-center">
      {loggedIn && (
        <button className="w-44" onClick={() => setVisibilty(true)}>
          <Button>Add new Publication</Button>
        </button>
      )}
      <h2 className="text-3xl font-bold text-center py-1 my-1">Publications</h2>
      {error && (
        <div className="text-center text-red-500 text-xl font-bold">
          {error}
        </div>
      )}
      {loggedIn && visibilty && <Edit updateId={updateId} />}
      {rmAlert && <RemoveData collectionId={collectionId} docId={rmDocId} />}

      <div className="flex flex-wrap gap-4 py-3 my-3">
        {publicationData.map((publication, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-3 items-center">
              <h3 className="text-2xl font-bold">{publication.title}</h3>
              <p className="">{publication.description}</p>
              {publication.asset && (
                <a href={publication.asset} className="" target="_blank">
                  <Button>Read More</Button>
                </a>
              )}
              {loggedIn && (
                <div className="flex justify-center gap-5">
                  <button
                    onClick={() => removeData(publication.$id)}
                    className="w-24"
                  >
                    <Button>Remove</Button>
                  </button>
                  <button
                    onClick={() => updateData(publication.$id)}
                    className="w-24"
                  >
                    <Button>Update</Button>
                  </button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default page;
