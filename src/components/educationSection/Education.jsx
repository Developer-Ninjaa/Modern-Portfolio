import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { useEffect, useState } from "react";
import "./Education.css"; 

const educationData = [
  {
    degree: "Bachelor's of Technology",
    stream: "Electrical and Electronics Engineering",
    institution: "KIET Group of Institutions, Ghaziabad, Delhi-NCR",
    university: "AKTU Lucknow",
    duration: "2019 - 2023",
    grade: "7.55 CGPA",
  },
  {
    degree: "Intermediate 12th",
    stream: "PCM",
    institution: "CPS International, Modinagar, Uttar Pradesh",
    board: "CBSE",
    duration: "2018 - 2019",
    grade: "70%",
  },
  {
    degree: "High School 10th",
    stream: "PCM",
    institution: "SDA Inter College, Roorkee, Uttarakhand",
    board: "ICSE",
    duration: "2016 - 2017",
    grade: "69%",
  },
];

const Education = () => {
  const [iconSize, setIconSize] = useState(56); // default size

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) setIconSize(32);
      else if (width < 768) setIconSize(44);
      else setIconSize(56);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="education-section">
      <h2 className="education-heading">Education</h2>
      <VerticalTimeline lineColor="#fff">
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--education"
            date={edu.duration}
            iconStyle={{ background: "rgb(251 151 24 / var(--tw-bg-opacity, 1))", color: "#fff" }}
            icon={<IoMdSchool className="responsive-icon" size={iconSize} />}
          >
            <div className="timeline-elements">
              <h3 className="vertical-timeline-element-title"><b>{edu.degree}</b></h3>
              <h4 className="vertical-timeline-element-streamtitle">{edu.stream}</h4>
              <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
              {edu.university && <p>{edu.university}</p>}
              {edu.board && <p>{edu.board}</p>}
              <p><strong>Grade: </strong> {edu.grade}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
