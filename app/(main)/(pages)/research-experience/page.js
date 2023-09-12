"use client";
import Link from "next/link";
import Card from "@/components/basic/Card";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Loader from "@/components/basic/Loader";
import Button from "@/components/basic/Button";
import Edit from "./Edit";
import RemoveData from "@/components/forms/RemoveData";

let researchData2 = [
  {
    title:
      "Impact of Social Media on Family Bondings (HCI, Sociology, Human Psychology)",
    duration: "October 2022 - Present",
    supervisor: "Prof. Dr. A B M Alim Al Islam, CSE, BUET",
    description:
      "We are examining if the use of social media in Bangladesh contributes to a breakdown in communication between family members. Data has been collected using semi-structured face-to-face interviews. The Thematic technique will be used to collect and evaluate data from the recorded audio scripts of our interviewees in order to identify a pattern.",
    imageUrls: ["./research-xp/r1.jpeg"],
    imageTitle: "",
    main_objectives: [],
    external_collaborators: [{ name: "", company: "", education: "" }],
    thesisUrl: "",
    publicationsUrl: "",
    reports: [],
  },
  {
    title:
      "Android Malware Detection Based on System Calls Using NLP and Machine Learning Algorithms (ML, Security and Privacy)",
    duration: "April 2022 - Present",
    supervisor: "Prof. Dr. A B M Alim Al Islam, CSE, BUET",
    description:
      "I wanted to extend one of Dr. Hossain’s previous research where he used 1-step transition probability between the system calls to detect malware apk. As the prior model cannot capture the order or structure of system calls, it lacks semantic information. So after conducting a literature review to identify the limitations of the existing method for evading System Call-based Intrusion Detection System (IDS), I proposed a Machine Learning based robust dynamic method to detect malware apks, that can automatically execute the code routines as well as generate the user behavior of the android app.",
    imageUrls: ["./research-xp/r3.png", "./research-xp/r5.png"],
    imageTitle: "fig:work process and parsed system calls",
    main_objectives: [
      "Generate user behavior during the system call retrieval from a virtual android device",
      "Use a universal sentence encoder to represent each system call with an equivalent vector of 512 dimensions.",
      "Finally, a random forest classifier with 100 estimators is used to ‘accurately’ classify our data. Along with the Random Forest (RF) model, we ran experiments with other models, such as Logistic Regression, Multilayer Perceptron (MLP) and XGBoost to compare our results.",
    ],
    external_collaborators: [
      {
        name: "A S M Ahsan-Ul Haque",
        company: "Software Development Engineer, Amazon.com",
        education:
          "M.Sc, University of Virginia [2022], B.Sc in CSE, BUET [2017]",
      },
    ],
    thesisUrl: "",
    publicationsUrl: "",
    reports: [],
  },
  {
    title:
      "Finding Efficient Feature Extraction and Classification Architecture for Brain Tumor Detection from MRI Image",
    duration: "2022",
    supervisor: "",
    description:
      "Brain MRIs are notoriously imprecise in revealing the presence or absence of tumors. Using MRI scans of the brain, a Convolutional Neural Network (CNN) was trained to identify the presence of a tumor in this research. In order to evaluate the CNN model's capability for processing images, we applied the extracted features from DL different models into following ML models: KNN, Logistic regression, SVM, Random Forest, Naive Bayes, and Perception.\nWe have implemented four different models which are Densenet, Resnet50, EfficientnetB0, and our own custom CNN model. For optimization of our deep learning model, we used Adam algorithm. First, the performance is evaluated using several performance metrics. During the training of a model, we concentrated on reducing loss while simultaneously boosting accuracy",
    imageUrls: ["./research-xp/r9.png", "./research-xp/r10.png"],
    imageTitle: "fig:work process and accuracy",
    main_objectives: [],
    external_collaborators: [{ name: "", company: "", education: "" }],
    thesisUrl: "",
    publicationsUrl: "",
    reports: [],
  },
];
const page = () => {
  const [researchData, setResearchData] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [visibilty, setVisibilty] = useState(false);
  const [rmAlert, setRmAlert] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [rmDocId, setRmDocId] = useState(null);
  const collectionId = "6500a913f193396da1f8";

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

  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };

  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };

  if (!researchData) {
    return <Loader />;
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
      {rmAlert && <RemoveData docId={rmDocId} clId={collectionId} />}
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
                  <button
                    className="text-red-500 font-bold border rounded hover:border-red-500 px-5"
                    onClick={() => removeData(data.$id)}
                  >
                    Remove
                  </button>
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
