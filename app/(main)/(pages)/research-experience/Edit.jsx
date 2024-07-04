import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [researchXp, setResearchXp] = useState({
    title: "",
    duration: "",
    supervisor: "",
    description: "",
    imageUrls: "",
    imageTitle: "",
    main_objectives: "",
    external_collaborators_names: "",
    external_collaborators_company: "",
    external_collaborators_education: "",
    thesisUrl: null,
    publicationsUrl: null,
    reports: "",
  });

  let collectionId = conf.collections.researchXp;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");
  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setResearchXp(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const extraEdit = () => {
    if (researchXp.imageUrls === "") {
      researchXp.imageUrls = [];
    } else if (researchXp.imageUrls.includes("||")) {
      researchXp.imageUrls = researchXp.imageUrls.split("||");
    } else if (typeof researchXp.imageUrls === "string") {
      researchXp.imageUrls = [researchXp.imageUrls];
    }

    if (researchXp.main_objectives === "") {
      researchXp.main_objectives = [];
    } else if (researchXp.main_objectives.includes("||")) {
      researchXp.main_objectives = researchXp.main_objectives.split("||");
    } else if (typeof researchXp.main_objectives === "string") {
      researchXp.main_objectives = [researchXp.main_objectives];
    }

    if (researchXp.external_collaborators_names === "") {
      researchXp.external_collaborators_names = null;
    } else if (researchXp.external_collaborators_names.includes("||")) {
      researchXp.external_collaborators_names =
        researchXp.external_collaborators_names.split("||");
    } else if (typeof researchXp.external_collaborators_names === "string") {
      researchXp.external_collaborators_names = [
        researchXp.external_collaborators_names,
      ];
    }

    if (researchXp.external_collaborators_company === "") {
      researchXp.external_collaborators_company = [];
    } else if (researchXp.external_collaborators_company.includes("||")) {
      researchXp.external_collaborators_company =
        researchXp.external_collaborators_company.split("||");
    } else if (typeof researchXp.external_collaborators_company === "string") {
      researchXp.external_collaborators_company = [
        researchXp.external_collaborators_company,
      ];
    }

    if (researchXp.external_collaborators_education === "") {
      researchXp.external_collaborators_education = null;
    } else if (researchXp.external_collaborators_education.includes("||")) {
      researchXp.external_collaborators_education =
        researchXp.external_collaborators_education.split("||");
    } else if (
      typeof researchXp.external_collaborators_education === "string"
    ) {
      researchXp.external_collaborators_education = [
        researchXp.external_collaborators_education,
      ];
    }

    if (researchXp.reports === "") {
      researchXp.reports = null;
    } else if (researchXp.reports.includes("||")) {
      researchXp.reports = researchXp.reports.split("||");
    } else if (typeof researchXp.reports === "string") {
      researchXp.reports = [researchXp.reports];
    }

    if (researchXp.thesisUrl === "") {
      researchXp.thesisUrl = null;
    }
    if (researchXp.publicationsUrl === "") {
      researchXp.publicationsUrl = null;
    }
  };

  const addResearch = async (e) => {
    extraEdit();
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, researchXp).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
        console.info("Research Experience Added", res);
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateResearch = async (e) => {
    extraEdit();
    e.preventDefault();
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          title: researchXp.title,
          duration: researchXp.duration,
          supervisor: researchXp.supervisor,
          description: researchXp.description,
          imageUrls: researchXp.imageUrls,
          imageTitle: researchXp.imageTitle,
          main_objectives: researchXp.main_objectives,
          external_collaborators_names: researchXp.external_collaborators_names,
          external_collaborators_company:
            researchXp.external_collaborators_company,
          external_collaborators_education:
            researchXp.external_collaborators_education,
          thesisUrl: researchXp.thesisUrl,
          publicationsUrl: researchXp.publicationsUrl,
          reports: researchXp.reports,
        })
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const handleClose = () => {
    setVisibilty("hidden");
    window.location.reload();
  };

  return (
    //  Create a card for adding latest news
    <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Research Experience Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateResearch : addResearch}
            className="w-full"
          >
            <div className="space-y-2">
              <div>
                <div className="mt-2 space-y-2">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.title}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Title"
                    required
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.duration}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="Time Period"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.supervisor}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        supervisor: e.target.value,
                      }))
                    }
                    placeholder="Supervisor Name with Designation"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.description}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Description"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.imageUrls}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        imageUrls: e.target.value,
                      }))
                    }
                    placeholder="Image Urls. You can add multiple urls by seperating them with ||."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.imageTitle}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        imageTitle: e.target.value,
                      }))
                    }
                    placeholder="Image Title"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.main_objectives}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        main_objectives: e.target.value,
                      }))
                    }
                    placeholder="Main Objectives. You can add multiple objectives by seperating them with ||."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.external_collaborators_names}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        external_collaborators_names: e.target.value,
                      }))
                    }
                    placeholder="External Collaborators Names. You can add multiple names by seperating them with ||."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.external_collaborators_education}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        external_collaborators_education: e.target.value,
                      }))
                    }
                    placeholder="External Collaborators Education. You can add multiple education by seperating them with ||."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    value={researchXp.external_collaborators_company}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        external_collaborators_company: e.target.value,
                      }))
                    }
                    placeholder="External Collaborators designation. You can add multiple company by seperating them with ||."
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="url"
                    value={researchXp.thesisUrl}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        thesisUrl: e.target.value,
                      }))
                    }
                    placeholder="Thesis Url"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="url"
                    value={researchXp.publicationsUrl}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        publicationsUrl: e.target.value,
                      }))
                    }
                    placeholder="Publication Url"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="url"
                    value={researchXp.reports}
                    onChange={(e) =>
                      setResearchXp((prev) => ({
                        ...prev,
                        reports: e.target.value,
                      }))
                    }
                    placeholder="Reports. You can add multiple reports by seperating them with ||."
                  />
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateResearch}>Update</button>
                    ) : (
                      <button onClick={addResearch}>Add</button>
                    )}
                  </Button>
                  <Button>
                    <button onClick={handleClose}>Close</button>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Edit;
