import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.instagram.com/jaskaran_singhhhhhh/" Icon={FaInstagram} />
      <SingleContactSocial link="https://www.linkedin.com/in/jaskaran-techno?original_referer=https%3A%2F%2Fgithub.com%2F" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Developer-Ninjaa" Icon={FiGithub} />
    </div>
  );
};

export default ContactSocial;
