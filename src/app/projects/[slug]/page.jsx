"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projectsData } from "@/utlits/fackData/projectData";
import { useState } from "react";
import ProjectModal from "@/components/ui/project-modal";

const SingleProject = ({ params }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const { slug } = params;

  const project = projectsData.find((p) => p.slug === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!project) return notFound();

  return (
    <div className="single-project-page-design">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pb-30">
            <h1>{project.title}</h1>
          </div>
        </div>
      </div>

      {/* <div className="single-project-image">
        <Image
          width={1095}
          height={1072}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={project.src}
          alt={project.title}
        />
      </div> */}

      <div className="container pt-30">
        <div className="row">
          <div className="col-lg-4">
            <div className="single-project-page-left">
              <div className="single-info">
                <p>Year</p>
                <h3>{project.year}</h3>
              </div>

              <div className="single-info">
                <p>Company</p>
                <h3>{project.company}</h3>
              </div>

              <div className="single-info">
                <p>Services</p>
                <h3>{project.services}</h3>
              </div>

              <div className="single-info">
                <p>Project</p>
                <h3>{project.project}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="single-project-page-right">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>

        <div className="row pt-30 ">
          {project.gallery?.map((img, index) => (
            <div className="col-lg-6" key={index}>
              <div
                className="single-image"
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  width={633}
                  height={679}
                  sizes="100%"
                  style={{ width: "100%", height: "auto",border:"rounded-lg" }}
                  src={img}
                  alt="gallery"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

{/*     
       <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={project}
      /> */}
    </div>
  );
};

export default SingleProject;
