import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [projects, setProjects] = useState({
    title: "",
    duration: "",
    technologies: "",
    description: "",
    imageUrls: "",
    referencePreview1: "",
    referenceUrl1: null,
    referencePreview2: "",
    referenceUrl2: null,
    youtubeFrame: "",
  });

  let collectionId = conf.collections.project;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");
  let url;
  let mainUrl;
  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setProjects(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const extraEdit = () => {
    if (projects.imageUrls === "") {
      projects.imageUrls = [];
    } else if (projects.imageUrls.includes(",")) {
      projects.imageUrls = projects.imageUrls.split(",");
    } else if(typeof projects.imageUrls === "string") {
      projects.imageUrls = [projects.imageUrls];
    }
    if (projects.referenceUrl1 === "") {
      projects.referenceUrl1 = null;
    }
    if (projects.referenceUrl2 === "") {
      projects.referenceUrl2 = null;
    }
    if (projects.youtubeFrame === "" || projects.youtubeFrame === null) {
      projects.youtubeFrame = null;
    } else {
      url = projects.youtubeFrame.split("/")[3];
      if (url.length > 25) {
        mainUrl = url.split("?")[0];
      } else {
        mainUrl = url.split("=")[1];
        while (mainUrl.length > 11) {
          mainUrl = mainUrl.slice(0, -1);
        }
      }
      projects.youtubeFrame = `https://www.youtube.com/embed/${mainUrl}?si=Wo3OR_vz0Elva7tY`;
    }
  };
  const addProjects = async (e) => {
    extraEdit();
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, projects).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateProjects = async (e) => {
    extraEdit();
    e.preventDefault();
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          title: projects.title,
          duration: projects.duration,
          technologies: projects.technologies,
          description: projects.description,
          imageUrls: projects.imageUrls,
          referencePreview1: projects.referencePreview1,
          referenceUrl1: projects.referenceUrl1,
          referencePreview2: projects.referencePreview2,
          referenceUrl2: projects.referenceUrl2,
          youtubeFrame: projects.youtubeFrame,
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
            Projects Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateProjects : addProjects}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.title}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Title"
                    required
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.duration}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="Time Period"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.technologies}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        technologies: e.target.value,
                      }))
                    }
                    placeholder="Technologies Used"
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.description}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Description"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.imageUrls}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        imageUrls: e.target.value,
                      }))
                    }
                    placeholder="Image Urls. You can add multiple urls by seperating them with commas (,)."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.referencePreview1}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        referencePreview1: e.target.value,
                      }))
                    }
                    placeholder="If you want to add a reference, add a preview 1 text."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.referenceUrl1}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        referenceUrl1: e.target.value,
                      }))
                    }
                    placeholder="Add the preview 1 text's url."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.referencePreview2}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        referencePreview2: e.target.value,
                      }))
                    }
                    placeholder="If you want to add another reference, add a preview 2 text."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={projects.referenceUrl2}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        referenceUrl2: e.target.value,
                      }))
                    }
                    placeholder="Add the preview 2 text's url."
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="url"
                    value={projects.youtubeFrame}
                    onChange={(e) =>
                      setProjects((prev) => ({
                        ...prev,
                        youtubeFrame: e.target.value,
                      }))
                    }
                    placeholder="Add the youtube link. If you want to add a video"
                  />
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateProjects}>Update</button>
                    ) : (
                      <button onClick={addProjects}>Add</button>
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
