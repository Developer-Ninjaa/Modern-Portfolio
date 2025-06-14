import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Jaskaran Singh, A Full Stack Developer, resulting in -driven
        strong foundation in both front-end and back-end
        technologies. I specialize in building robust, scalable, and
        user-friendly web applications using modern stacks like React, Node.js,
        Express, and MongoDB (MERN). With hands-on experience in Agile
        environments, I thrive in turning complex business problems into
        elegant, high-performance solutions. Whether its crafting intuitive UI
        components or designing secure RESTful APIs, I bring a deep
        understanding of software architecture, database design, and DevOps
        practices to deliver end-to-end features. I’m passionate about
        continuous learning, clean code, and delivering real value through
        technology. Currently seeking opportunities where I can contribute to
        impactful products and grow alongside a talented, collaborative team.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
