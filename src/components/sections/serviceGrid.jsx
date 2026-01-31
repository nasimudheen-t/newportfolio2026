import React from "react";
import { RiGlobalFill, RiPantoneFill, RiQuillPenLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const ServiceGrid = () => {
  return (
    <section id="services" className="services-area innerpage-single-area">
      <div className="container">
        <div className="container-inner">
          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <SlideUp>
                <div className="section-title text-center">
                  <p className="text-black">Services</p>
                  <h2 className="text-black">Quality Services</h2>
                </div>
              </SlideUp>
            </div>
          </div>
          <div className="row">
            <Card
              id={1}
              icon={<RiGlobalFill size={60} />}
              title={"Frontend Developing"}
              description={
                "Building fast, responsive, and accessible user interfaces using React and Next.js with modern React Hooks and clean component architecture.Focused on performance, usability, and scalable UI design"
              }
            />
            <Card
              id={2}
              icon={<RiQuillPenLine size={60} />}
              title={"Full-Stack Web Development"}
              description={
                "Developing complete web applications from frontend to backend using React, Node.js, and secure REST APIs.Experienced in authentication, dashboards, databases, and real-world application workflows."
              }
            />
            <Card
              id={3}
              icon={<RiPantoneFill size={60} />}
              title={"MERN Stack Application Development"}
              description={
                "Creating scalable full-stack applications using MongoDB, Express.js, React, and Node.js.re You Ready to kickstart your project with a touch of magic?Focused on clean architecture, secure APIs, and production-ready solutions."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;

const Card = ({ icon, title, description, id }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <SlideUp delay={id}>
        <div className="service-item">
          {icon}
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </SlideUp>
    </div>
  );
};
