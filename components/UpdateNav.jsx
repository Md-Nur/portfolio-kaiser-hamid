import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";
import Link from "next/link";
import RemoveData from "./forms/RemoveData";
import Card from "./basic/Card";
import Button from "./basic/Button";

const navAllNames = [
  "Home",
  "Education",
  "Publication",
  "Experience",
  "Teaching",
  "Skills",
  "Projects",
  "Achievements",
  "Activities",
];
const UpdateNav = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [error, setError] = useState(null);
  const [rmAlert, setRmAlert] = useState(false);
  const [rmDocId, setRmDocId] = useState(null);
  const [freshNavNames, setFreshNavNames] = useState([]);
  const [data, setData] = useState({
    name: "",
    link: "",
    dropDown: false,
    subNames: [],
    subLinks: [],
  });
  const collectionId = "6501d5d3b4c9891beb36";

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setNavLinks(res.documents.reverse());
      })
      .then(() => {
        let usedNavNames = navLinks.map((link) => link.name);
        setFreshNavNames(
          navAllNames.filter((name) => !usedNavNames.includes(name))
        );
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [navLinks]);

  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };

  const handleAdd = () => {
    console.info(data);
    appwriteService
      .createData(collectionId, data)
      .then((res) => {
        console.info(res);
      })
      .catch((err) => {
        setError(err.message);
        console.info(err);
      });
  };

  return (
    <section className="">
      <Card>
        {error && <div className="text-red-500">{error}</div>}
        <h1 className="text-2xl text-center font-bold">Update Navigation</h1>
        {rmAlert && <RemoveData docId={rmDocId} clId={collectionId} />}
        <div className="flex flex-wrap gap-2 justify-around my-5">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-center">
              Add New Elements to the navbar
            </h3>
            <div
              className="flex justify-center space-x-5 items-baseline space-y-5"
            >
              <label className="" htmlFor="name">
                Name: 
              </label>
              <select
                name="name"
                id="name"
                className="border rounded px-5 py-2 border-color1 dark:border-color4 text-color1"
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    name: e.target.value,
                    link: `/${e.target.value.toLowerCase()}`,
                    dropDown: e.target.value === "Experience" ? true : false,
                    subNames:
                      e.target.value === "Experience"
                        ? ["Research Experience", "Professional Experience"]
                        : [],
                    subLinks:
                      e.target.value === "Experience"
                        ? ["/research-experience", "/professional-experience"]
                        : [],
                  }));
                }}
              >
                <option value="">Select</option>
                {freshNavNames.map((name, index) => (
                  <option key={index} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <button onClick={handleAdd} className="">
                <Button>Add</Button>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-center">
              Update Existing Elements
            </h3>
            <ul className="desc">
              {navLinks.map((link, index) => (
                <li key={index}>
                 {index+1}. <Link href={link.link}>{link.name}</Link>
                  <button
                    className="text-red-500 font-bold border rounded hover:border-red-500 mx-5 px-3"
                    onClick={() => removeData(link.$id)}
                  >
                     Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default UpdateNav;


/*


const navLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Education",
    link: "/education",
  },
  {
    name: "Publication",
    link: "/publication",
  },
  {
    dropDown: true,
    name: "Experience",
    subNames: ["Research Experience", "Professional Experience"],
    subLinks: ["/research-experience", "/professional-experience"],
  },
  {
    name: "Teaching",
    link: "/teaching",
  },
  {
    name: "Skills",
    link: "/skill",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Achievements",
    link: "/achievements",
  },
  {
    name: "Activities",
    link: "/activites",
  },
];



*/
