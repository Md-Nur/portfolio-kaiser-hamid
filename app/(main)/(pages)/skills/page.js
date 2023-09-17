"use client";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";

const page = () => {
  const [skillData, setSkillData] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = "65017257bc6662f0fd4b";
  let technical = {
    "Programing Languages": [],
    "Web Development": [],
    Database: [],
    Expert: [],
    Intermediate: [],
    Beginner: [],
    Software: [],
    Others: [],
  };
  let languages = [];
  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setSkillData(res.documents.reverse());
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

  if (skillData) {
    technical["Programing Languages"] = skillData.filter(
      (item) => item.type === "Programing Languages"
    );
    technical["Web Development"] = skillData.filter(
      (item) => item.type === "Web Development"
    );
    technical.Database = skillData.filter((item) => item.type === "Database");
    technical.Expert = skillData.filter((item) => item.type === "Expert");
    technical.Intermediate = skillData.filter(
      (item) => item.type === "Intermediate"
    );
    technical.Beginner = skillData.filter((item) => item.type === "Beginner");
    technical.Software = skillData.filter((item) => item.type === "Software");
    technical.Others = skillData.filter((item) => item.type === "Others");

    languages = skillData.filter((item) => item.type === "Language");
  }
  return (
    <section className="py-10 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
        Skills
      </h1>
      {error && (
        <div className="flex justify-center items-center w-full">
          <span className="text-red-500 font-bold">{error}</span>
        </div>
      )}

      {loggedIn && visibilty && <Edit updateId={updateId} />}
      {loggedIn && rmAlert && (
        <RemoveData docId={rmDocId} clId={collectionId} />
      )}

      <div className="flex flex-wrap justify-center items-baseline w-full mt-5">
        {skillData.map((skill, index) => (
          <div key={index}>
            {skill.icon && (
              <img src={skill.icon} alt="skill" className="h-16 m-2" />
            )}
          </div>
        ))}
      </div>
      {loggedIn && (
        <div className="flex justify-center w-full my-5">
          <button onClick={() => setVisibilty(true)}>
            <Button>Add New Skill</Button>
          </button>
        </div>
      )}
      <h2 className="text-3xl mt-20 font-bold">Technical Skills</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center w-full my-5">
        {Object.keys(technical).map((skill, index) => (
          <div key={index} className="max-w-250px">
            {technical[skill].length > 0 && (
              <Card key={index}>
                <div className="flex flex-col items-center justify-center min-h-[200px]">
                  <h1 className="text-xl font-bold text-center md:text-lg lg:text-xl">
                    {skill}
                  </h1>
                  <ul className="list-disc w-full px-3 mt-5">
                    {technical[skill].map((tech, index) => (
                      <div key={index}>
                        <li className="">
                          {tech.name}
                          {loggedIn && (
                            <div className="flex justify-end gap-3">
                              <button
                                className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                                onClick={() => removeData(tech.$id)}
                              >
                                Remove
                              </button>
                              <button
                                className="text-blue-500 font-bold px-5 border  rounded hover:border-blue-700 "
                                onClick={() => updateData(tech.$id)}
                              >
                                Update
                              </button>
                            </div>
                          )}
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
          </div>
        ))}
      </div>
      <h2 className="text-3xl mt-20 font-bold">Language Skills</h2>
      <ul className="w-full my-5 justify-center list-disc flex gap-10 flex-wrap">
        {languages.map((skill, index) => (
          <li key={index}>
            <span className="text-sm font-bold text-center md:text-base lg:text-lg">
              {skill.name}
              {loggedIn && (
                <div className="flex justify-end gap-3">
                  <button
                    className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                    onClick={() => removeData(skill.$id)}
                  >
                    Remove
                  </button>
                  <button
                    className="text-blue-500 font-bold px-5 border  rounded hover:border-blue-700 "
                    onClick={() => updateData(skill.$id)}
                  >
                    Update
                  </button>
                </div>
              )}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default page;
