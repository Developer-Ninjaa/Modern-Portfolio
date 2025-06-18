import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [isSent, setIsSent] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
  console.log("Sending email...");
  emailjs
    .sendForm("service_mip8cy7", "template_tto1mvd", form.current, {
      publicKey: "8OUr9dlO0cnWIJU_4",
    })
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        setEmail("");
        setName("");
        setMessage("");
        setSuccess("Message Sent Successfully!");
        setIsSent(true);
        setTimeout(() => {
          setSuccess("");
          setIsSent(false); // ✅ reset button text
        }, 6000);
      },
      (error) => {
        console.log("FAILED...", error.text);
        setSuccess("Failed to send message. Try again later.");
      }
    );
};


  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          {isSent ? "Message Sent" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
