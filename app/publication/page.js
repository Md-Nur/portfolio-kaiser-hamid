import React from "react";

let publicationData = [
  {
    id: 1,
    title: "Cancer Classification",
    description:
      "Shovito Barua Soumma,shraq R. Rahman and Faisal Bin Ashraf “Machine Learning Approaches to Metastasis Bladder and Secondary Pulmonary Cancer Classification Using Gene Expression Data”, Proceedings of 25th International Conference on Computer and Information Technology (ICCIT 2022), [Accepted]",
    asset: "./publications/Cancer_Classification.pdf",
  },
  {
    id: 2,
    title: "Brain Tumor Detection",
    description:
      "Shovito Barua Soumma, Md. Nazmul Islam, Plabon Paul and Faisal Bin Ashraf, “Finding Efficient Feature Extraction and Classification Architecture for Brain Tumor Detection from MRI Image”, Proceedings of 3rd International Conference ECCE 2022, December 17-19 [SUBMITTED]",
    asset: "",
  },
  {
    id: 3,
    title: "Heart Disease Detection",
    description:
      "Shovito Barua Soumma, Md. Nazmul Islam, Plabon Paul and Faisal Bin Ashraf, “Finding Efficient Feature Extraction and Classification Architecture for Brain Tumor Detection from MRI Image”, Proceedings of 3rd International Conference ECCE 2022, December 17-19 [SUBMITTED]",
    asset: "",
  },
];
const page = () => {
  return (
    <section className="m-3 my-10 py-10 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">
      <h2 className="text-3xl font-bold text-center py-5 my-5">Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 my-5">
        {publicationData.map((publication) => (
          <div
            key={publication.id}
            className="dark:bg-color3 text-color4 dark:text-color1 bg-color2 shadow-md rounded-md p-4 py-5 my-5"
          >
            <h3 className="text-xl font-bold">{publication.title}</h3>
            <p className="text-sm">{publication.description}</p>
            <a
              href={publication.asset}
              className="text-orange-500 hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
