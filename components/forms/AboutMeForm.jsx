import appwriteService from "@/appwrite/config";
import { useEffect, useState } from "react";
import Card from "../basic/Card";
import Button from "../basic/Button";
const AboutMeForm = () => {
  const [data, setData] = useState({
    about_me: "",
  });
  const [visibilty, setVisibilty] = useState("fixed");
  const [error, setError] = useState(null);
  let collectionId = "64f798f22a16191eda71";
  let documentId = "64f79a9a675c6fddd8f2";
  useEffect(() => {
    appwriteService
      .readData(collectionId, documentId)
      .then((response) => {
        setData({
          about_me: response["about_me"],
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const upadateAboutMe = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .updateData(collectionId, documentId, data)
        .then(() => {
          window.location.reload();
          setVisibilty("hidden");
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className={`${visibilty} h-screen top-0 left-0 bg-gray-700 bg-opacity-70 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="w-full flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Update About Me
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form onSubmit={upadateAboutMe} className="w-full">
            <div className="space-y-5">
              <div>
                <div className="mt-2">
                  <textarea
                    className="bg-color4 dark:bg-color1 flex h-52 w-full rounded-md px-3 py-2 text-sm"
                    type="text"
                    id="about_me"
                    value={data.about_me}
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, about_me: e.target.value }))
                    }
                    placeholder="About Me. Update your about me section here. then click update. It will be replaced with the current text."
                    required
                  />
                </div>
                <div className="flex items-center p-5 justify-center gap-5">
                  <Button>
                    <input type="submit" value="Update" />
                  </Button>
                  <Button>
                    <button onClick={() => setVisibilty("hidden")}>
                      Cancel
                    </button>
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

export default AboutMeForm;
