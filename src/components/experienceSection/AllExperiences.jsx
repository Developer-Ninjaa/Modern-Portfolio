import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    company: "AnsrCoach",
    date: "May 2021 - July 2021",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "React.JS Developer",
    company: "RmgX Technologies LLP",
    date: "Jan 2023 - May 2023",
    responsibilities: [
      "Build and designed frontend architecture of Web Apps using React.",
      "Worked extensively on Data Handling and integrating NPM packages.",
      "Collaborated on complex UI structures, opted data from JSON.",
    ],
  },
  {
    job: "Packaged Application Development Associate",
    company: "Accenture",
    date: "Sept 2023 - Present",
    responsibilities: [
      "Worked on different tech stack like SAP, Peoplesoft, MySQL.",
      "Participating in CtX & DI, data extraction and migration.",
      "Expanding the skillset on modern web app technologies.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
