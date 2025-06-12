import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostman } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { FaFigma } from "react-icons/fa";


const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
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
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
    {
      skill: "Node.js",
      icon: FaNodeJs,
    },
    
    {
      skill: "MongoDB",
      icon: DiMongodb,
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
        skill: "MySQL",
        icon: DiMysql,
      },
        {
        skill: "Figma",
        icon: FaFigma,
      },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
