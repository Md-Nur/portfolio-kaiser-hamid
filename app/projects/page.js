import Link from "next/link";

let projectData = [
  {
    title:
      "Tuberculosis Detection using Chest X-ray with Deep Learning L4 T2 (8th semester, ML Lab Project)",
    duration: "2022",
    technologies: "CoLab, Tensorflow, CNN",
    description:
      "In this work, I have detected TB reliably from the chest X-ray images using image pre-processing, data augmentation and deep-learning classification techniques. Four different deep CNNs (ResNet18, ChexNet, InceptionV3, and MobileNet) were used for transfer learning from their pre-trained initial weights and were trained,validated and tested for classifying TB and non-TB normal cases.",
    imageUrls: ["/project/tb.png"],
    referenceLinks: [
      {
        preview: "Presentation",
        url: "https://docs.google.com/presentation/d/1lhM0Xd_q_VTgRb3axwLJsDBdhZgiCZCV_PGs3uxRBEc/edit#slide=id.g11489bc8cae_0_190",
      },
    ],
  },
  {
    title: "Online Book Sharing Platform",
    duration: "2021",
    technologies: "Nodejs, ReactJs, MongoDB",
    description:
      "This is a full-stack web application where users can share their books with others. Users can upload their books, search for books, and download them. Users can also add books to their favorite list and can see the list of books they have uploaded. I have used ReactJs for the frontend, NodeJs for the backend, and MongoDB for the database.",
  },
  {
    title: "L4 T1 (7th semester, Software Engr. Lab Project)",
    duration: "2021",
    description:
      "Online Book-selling and giveaway platform. Users can purchase books from their local bookstores and even add sale posts. Additionally, users may donate their unused old books",
    referenceLinks: [
      {
        preview: "Visit Live Site",
        url: "https://bookazon-frontend.herokuapp.com/",
      },
    ],
  },
  {
    title: "Portable Heart Rate Monitoring System L3 T1 (5th semester)",
    duration: "2020",
    technologies:
      "AtMega32 micro controller, HC-05 Bluetooth Module, 16x2 LCD Display, Android Device",
    description:
      "Portable heart rate monitor is a personal monitoring device that measures the heart rate using optical sensors in real time and send the measured the data to directly to an android device. We are developing prototype of this application using the continuous monitoring of parameters to detect and predict the heart attack and generate an alarm.",
    imageUrls: [ "./project/block_summary.png" , "/project/sensing.jpg"],
    referenceLinks: [
      {
        preview: "Github",
        url: "https://github.com/shovito66/heartRateMonitoring",
      },
      {
        preview: "Live Demo",
        url: "https://www.youtube.com/watch?v=GcZv4N4CA9U",
      },
    ],
    youtubeFrame:
      "https://www.youtube.com/embed/GcZv4N4CA9U?si=Y7Fs9ZtJbHXy3NDh",
  },
  {
    title: "Algorithm Simulator L1 T2 (2nd semester)",
    duration: "2018",
    technologies: "JavaFX, Java, InelliJ",
    description:
      "Aim of this project was to get familiar with OOP language, GUI designing, and simulate different algorithms visually by taking input from users. This is a java project that shows simulation of 3 sorting algorithms and BFS. JavaFx is used for the UI part. In our simulation part of sorting algorithm, we resize the bar of input given by the user so that it can fit in window.",
    referenceLinks: [
      {
        preview: "Github",
        url: "https://github.com/shovito66/Algorithm-Simulator",
      },
      {
        preview: "Youtube",
        url: "https://www.youtube.com/watch?v=MYR6FlUK3Y4",
      },
    ],

    youtubeFrame:
      "https://www.youtube.com/embed/MYR6FlUK3Y4?si=Wo3OR_vz0Elva7tY",
  },
  {
    title: "Spondon - A medical App",
    duration: "2018",
    technologies: "NodeJs, MongoDB, Android",
    description:
      "User can search a blood donor; Search parameter: name, blood group, division, district, availability User can search an ambulance or oxygen cylinder; Search parameter: name division, district User can show the live bed status of all the hospitals of Bangladesh and filter the hospitals according to hospital name, division, district, availability, last update We have an admin side built in React from where admin can perform CRUD operation for ambulance and oxygen cylinder.",
    referenceLinks: [
      {
        preview: "Github",
        url: "https://github.com/shovito66",
      },
      {
        preview: "Youtube",
        url: "https://www.youtube.com/watch?v=MYR6FlUK3Y4",
      },
    ],

    youtubeFrame:
      "https://www.youtube.com/embed/riQ56dGMZMA?si=9KMSvvv7sjL-zT48",
  },
];
const page = () => {
  return (
    <section className="m-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">
      <h2 className="text-4xl font-bold text-center py-3 my-3">
        Projects
      </h2>
      <div className="text-justify items-center justify-center pl-1 flex flex-col gap-10 mt-10">
        {projectData.map((data) => (
          <div className="flex justify-between items-center mb-20 flex-wrap">
            <div className="text-xl font-bold">{data.title}</div>
            <div className=" ">
              <em>({data.duration})</em>
            </div>
            {data.technologies ? (
              <div className="text-lg">
                <strong>technologies:</strong> {data.technologies}
              </div>
            ) : null}
            {data.referenceLinks ? (
              <div className="text-lg py-3">
                <div className="">
                  {data.referenceLinks.map((obj) => (
                    <a href={obj.url} className="px-2  ">
                      [{obj.preview}]
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
            <div className="py-3">{data.description}</div>
            {data.youtubeFrame ? (
              <iframe
                
                src={data.youtubeFrame}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="mx-auto my-5 w-[96vw] h-[54vw] md:w-[80vw] md:h-[45vw] lg:w-[60vw] lg:h-[33.75vw] xl:w-[50vw] xl:h-[28.125vw] 2xl:w-[40vw] 2xl:h-[22.5vw]"
              ></iframe>
            ) : null}
            {data.imageUrls ? (
              <div className="flex flex-wrap gap-5 justify-around">
                {data.imageUrls.map((url) => (
                  <img src={url} alt="Picture of project" />
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
