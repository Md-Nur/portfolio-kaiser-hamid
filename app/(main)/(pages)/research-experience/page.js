import Link from "next/link";
import Card from "@/components/basic/Card";

let researchData = [
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
      "South Asian Public Digital Service Centers and the Risk to User Privacy (HCI, Privacy)",
    duration: "2019",
    supervisor: "",
    description:
      "Worked an ethnographer using the thematic method to interview data. Our study looked at 19 digital service centers in Bangladesh. The findings showed that customers of these centers were vulnerable to privacy breaches due to a lack of infrastructure, local power politics, a lack of knowledge, and inadequate protection mechanisms.",
    imageUrls: ["./research-xp/r2.JPG"],
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
      "Data Warehouse Design for Health Sectors and Outbreak Prediction (Deep Learning, Data mining and Information Systems)",
    duration: "2021 - 2022",
    supervisor: "Prof. Dr. Abu Syed Md. Latiful Haque, CSE, BUET",
    description:
      "I have developed a clinical big data platform prototype-NCDW, integrating ambient data from 34 weather stations of Bangladesh Meteorological Department (BMD) as a proof of concept and solved the fundamental obstacle for data-driven communicable and non-communicable disease research, including record-linkage, privacy, and security, standardization, and interoperability. I submitted the conceptual design of my proposed system to Bangladesh Space Research and Remote Sensing Organization (SPARRSO) and secured their “Research Fellowship”. This platform enhance descriptive, diagnostic,predictive, and prescriptive analysis and research for a wide variety of diseases.",
    imageUrls: [
      "./research-xp/r6.jpg",
      "./research-xp/r7.png",
      "./research-xp/r8.png",
    ],
    imageTitle: "fig:Architecture, Data Cube and Possible Outbreak",
    main_objectives: [
      "Estimate the size of the NCDW and facilitates regional and national decision support, intelligent disease analysis, knowledge discovery, and data-driven research",
      "Develop a model to predict the number of cases of a given month of a given district.",
      "Forecast a disease outbreak",
    ],
    external_collaborators: [{ name: "", company: "", education: "" }],
    thesisUrl:
      "https://drive.google.com/file/d/1A5YIwiqB6UuGpYUdgXyUlO6Wrqp99gci/view?usp=share_link",
    publicationsUrl: "",
    reports: [],
  },
  {
    title:
      "Security Analysis of Popular Bangladeshi Android Apps (Security and Privacy)",
    duration: "March 2021 - October 2021",
    supervisor: "Prof. Dr. Md Shohrab Hossain, CSE, BUET",
    description:
      "I worked briefly on a govt-funded research project and we published two articles in BGD e-GOV CIRT, analyzing the security implementation of Bangladesh's most popular Android applications from different domains.",
    imageUrls: [],
    imageTitle: "",
    main_objectives: [
      "I compared three different versions of each app to check whether the subsequent versions of the app have improved with respect to security score using some security tools & framworks (MobSF, Androbugs, Quark, JD-GUI, ApkTool)",
      "To analyze these apps statically in batches, I implemented different bash scripts to automate the process",
      "I found that some popular banking apps log sensitive information without encryption, execute raw SQL queries which can cause SQL injection attacks and use HTTP for communication, although their servers support HTTPS. Later, we informed these banks about their existing vulnerabilities so that they can minimize their financial loss and rectify themselves in future updates to protect clients' privacy",
    ],
    external_collaborators: [
      {
        name: "Ajoy Das",
        company:
          "Graduate Research and Teaching Assistant, University of Calgary",
        education: "B.Sc in CSE, BUET [2019]",
      },
      {
        name: "Kanak Das",
        company:
          "Graduate Research and Teaching Assistant, University of California, Riverside",
        education: "B.Sc in CSE, BUET [2019]",
      },
    ],
    thesisUrl: "",
    publicationsUrl: "./publications",
    reports: [
      'Shovito Barua Soumma, and Md Shohrab Hossain, "Comparative Analysis on Different Periodic Versions of Bangladeshi App", BGD e-GOV CIRT Magazine October 2021',
      'Ajoy Das, Shovito Barua Soumma, and Md Shohrab Hossain, "Security Analysis of Popular Financial Android Apps of Bangladesh", BGD e-GOV CIRT Magazine September 2021',
    ],
  },
  {
    title:
      "Feature Selection Algorithms for Effective Botnet Detections (ML, Secuirty)",
    duration: "2020 - 2021",
    supervisor: "Prof. Dr. A.K.M Ashikur Rahman, CSE, BUET",
    description:
      "I am attempting to construct a feature selection algorithm using a diversified (containing 16 different types of botnets) dataset. I designed several heuristics to select the best features from a handful of possible features. Some proposed heuristics are truly feature-based, and some are group-based, thus generating different accuracy levels. Initially, we select 15 potential features for botnet detection. However, all features may not be (equally) useful for building a machine learning model and an increased number of features also increases the complexity of the model and might reduce the overall accuracy. Our selected feature set performs reasonably well in the machine learning model for identifying the botnets. With the strong guidance of Dr. Rahman, our team proposed four novel heuristics for feature selection, derived their time complexity, and perform a comparative analysis of these methods’ performance reviewing other state-of-the-art methods.",
    imageUrls: [],
    imageTitle: "",
    main_objectives: [],
    external_collaborators: [{ name: "", company: "", education: "" }],
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
  return (
    <>
      <h2 className="text-4xl font-bold text-center py-3 my-3">
        Research Experience
      </h2>
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
                <Link
                  className=" "
                  href={data.supervisor}
                  target="_blank"
                >
                  Here
                </Link>
              </span>
            ) : null}
            {data.publicationsUrl ? (
              <span className="">
                You can read my published articles from{" "}
                <Link
                  className=" "
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
            {data.external_collaborators[0].name !== "" ? (
              <span className="text-lg py-3">
                <strong>External collaborators :</strong>
                <div className="list-disc list-inside text-base px-3">
                  {data.external_collaborators.map((obj) => (
                    <div className="pb-1 my-3">
                      <p className="pb-1">{obj.name}</p>
                      <p className="pb-1">{obj.company}</p>
                      <p className="pb-1">{obj.education}</p>
                    </div>
                  ))}
                </div>
              </span>
            ) : null}
          </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default page;
