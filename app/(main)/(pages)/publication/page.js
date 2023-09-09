import Card from "@/components/basic/Card";
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
    <>
      <h2 className="text-3xl font-bold text-center py-5 my-5">Publications</h2>
      <div className="flex flex-wrap gap-4 py-5 my-6">
        {publicationData.map((publication) => (
          <Card
            key={publication.id}
          >
            <h3 className="text-xl font-bold">{publication.title}</h3>
            <p className="text-sm">{publication.description}</p>
            <a
              href={publication.asset}
              className="  hover:text-orange-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </Card>
        ))}
      </div>
    </>
  );
};

export default page;
