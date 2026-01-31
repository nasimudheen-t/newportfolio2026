"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import { projectsData } from "@/utlits/fackData/projectData";
import Image from "next/image";

const Portfolio = ({ className }) => {
  const [category, setCategory] = useState("All");

  const handleCategoryClick = (item) => {
    setCategory(item);
  };

  // ------ filter unique category
  const filteredCategory = ["All"];
  projectsData.forEach(({ category }) => {
    if (!filteredCategory.includes(category)) {
      filteredCategory.push(category);
    }
  });

  const filteredProjects =
    category === "All"
      ? projectsData
      : projectsData.filter((image) => image.category === category);

  return (
    <section id="portfolio" className={`projects-area ${className}`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <SlideUp>
              <div className="section-title text-center">
                <h2>Works & Projects</h2>
                <p>
                  Explore some of my web development projects, carefully built
                  with a focus on clean code, performance, and real-world
                  problem solving.
                </p>
              </div>
            </SlideUp>
          </div>
        </div>

        <SlideUp>
          <ul className="project-filter justify-content-center pb-4">
            {filteredCategory.map((item, id) => (
              <li
                key={id}
                onClick={() => handleCategoryClick(item)}
                className={item === category ? "current" : ""}
              >
                {item}
              </li>
            ))}
          </ul>
        </SlideUp>

        <div className="project-masonry-active">
          {filteredProjects.map((project) => (
            <SlideUp key={project.id} delay={project.id}>
              <div className="project-item">
                <Link href={`/projects/${project.slug}`}>
                  <div className="project-image" style={{ aspectRatio: "16/10" }}>
                    <Image
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      src={project.src}
                      alt={project.title}
                      className="object-cover"
                    />
                    <div className="details-btn">
                      <RiArrowRightUpLine size={20} />
                    </div>
                  </div>
                </Link>
                <div className="project-content">
                  <span className="sub-title">{project.category}</span>
                  <Link href={`/projects/${project.slug}`}>
                    <h3 style={{ cursor: "pointer" }}>
                      {project.title}
                    </h3>
                  </Link>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
