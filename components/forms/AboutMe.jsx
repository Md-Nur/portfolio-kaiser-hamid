import appwriteService from "@/appwrite/config";
import { useState } from "react";
import Card from "../basic/Card";
import Button from "../basic/Button";
const AboutMe = () => {
  const [data, setData] = useState({
    about_me: "",
  });
  const upadateAboutMe = async (e) => {
    let databaseId = "64f798cc47419119ff83";
    let collectionId = "64f798f22a16191eda71";
    let documentId = "64f79a9a675c6fddd8f2";

    e.preventDefault();
    try {
      await appwriteService
        .updateData(databaseId, collectionId, documentId, data)
        .then((res) => {
          setData({
            about_me: "",
          });
          document.getElementById("about_me").value = "";
        })
        .then(() => {
          alert("About Me Updated");
        });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Card>
      <div className="w-full flex gap-y-4 flex-wrap">
        <h2 className="text-2xl font-bold text-center leading-tight w-full">
          About Me Section
        </h2>
        <form onSubmit={upadateAboutMe} className="w-full">
          <div className="space-y-5">
            <div>
              <div className="mt-2">
                <textarea
                  className="bg-color4 dark:bg-color1 flex h-44 w-full rounded-md px-3 py-2 text-sm"
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
              <div className="flex items-center justify-center">
                <Button>
                  <input type="submit" value="Update" />
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AboutMe;
