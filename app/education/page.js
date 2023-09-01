import React from 'react'

let educationData = [
    {
        title: "B.Sc. in Computer Science and Engineering",
        institution: "East Delta University",
        duration: "2015 - 2019",
        description: "I received my Bachelors (B.Sc.) in Computer Science and Engineering (CSE) from East Delta University, Bangladesh. I was a member of the Computer Club of East Delta University (CCEdu). I was also a member of the East Delta University Debating Club (EDUDC)."
    },
    {
        title: "Higher Secondary Certificate (HSC)",
        institution: "Chittagong College",
        duration: "2013 - 2015",
        description: "I received my Higher Secondary Certificate (HSC) from Chittagong College, Bangladesh. I was a member of the Chittagong College Debating Club (CCDC)."
    },
    {
        title: "Secondary School Certificate (SSC)",
        institution: "Chittagong Collegiate School",
        duration: "2005 - 2013",
        description: "I received my Secondary School Certificate (SSC) from Chittagong Collegiate School, Bangladesh. I was a member of the Chittagong Collegiate School Debating Club (CCSDC)."
    }
]
const page = () => {
  return (
    <section id="education" className="text-color4 dark:text-color1 py-10 my-10 m-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw] ">
        <h2 className="text-4xl text-color1 dark:text-color4 font-bold text-center py-3 my-3">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {educationData.map((data, index) => (
                <div key={index} className="bg-color2 dark:bg-color3 p-5 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-center py-3 my-3">{data.title}</h3>
                    <p className="text-center text-xl">{data.institution}</p>
                    <p className="text-center text-xl">{data.duration}</p>
                    <p className="text-justify">{data.description}</p>
                </div>
            ))}
        </div>
    </section>

  )
}

export default page