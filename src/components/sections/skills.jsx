"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  RiReactjsLine,
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiNodejsLine,
  RiDatabase2Line,
  RiTailwindCssLine,
  RiNextjsLine,
} from "@remixicon/react";

const skillsData = [
  { name: "React", icon: <RiReactjsLine size={50} /> },
  { name: "Next.js", icon: <RiNextjsLine size={50} /> },
  { name: "Node.js", icon: <RiNodejsLine size={50} /> },
  { name: "JavaScript", icon: <RiJavascriptLine size={50} /> },
  { name: "Tailwind", icon: <RiTailwindCssLine size={50} /> },
  { name: "HTML5", icon: <RiHtml5Line size={50} /> },
  { name: "CSS3", icon: <RiCss3Line size={50} /> },
  { name: "Database", icon: <RiDatabase2Line size={50} /> },
];

const Skills = () => {
  return (
    <section
      className="skills-area"
      style={{ padding: "60px 0", background: "var(--bg-darker)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-5">
              <h2>My Skills</h2>
              <p>Technologies I work with to build high-quality solutions.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="skill-item"
                  style={{
                    margin: "0 30px",
                    textAlign: "center",
                    color: "var(--text-secondary)",
                    transition: "0.3s",
                  }}
                >
                  <div
                    className="icon"
                    style={{
                      marginBottom: "10px",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {skill.icon}
                  </div>
                  <p style={{ fontWeight: 500 }}>{skill.name}</p>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
