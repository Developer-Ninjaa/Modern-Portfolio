import SingleSkill from "./SingleSkill";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { DiMongodb } from "react-icons/di";
import { SiVite } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaFigma } from "react-icons/fa";

const skills = [
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
    {
    skill: "Java",
    icon: FaJava,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Vite.js",
    icon: SiVite,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Node.js",
    icon: FaNodeJs,
  },
  {
    skill: "Postman",
    icon: SiPostman,
  },
    {
    skill: "Github",
    icon: FaGithub,
  },
  {
    skill: "MongoDB",
    icon: DiMongodb,
  },
    {
    skill: "MySQL",
    icon: DiMysql,
  },
    {
    skill: "Figma",
    icon: FaFigma,
  },
];

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
