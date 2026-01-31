import Image from "next/image";
import React from "react";

const SingleProject = () => {
  return (
    <div className="single-project-page-design">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center pb-30">
            {/* <p>BRANDING - BENTO STUDIO</p> */}
            <h1>Beautiful design for brand new Business</h1>
          </div>
        </div>
      </div>
      <div className="single-project-image">
        <Image
          width={1095}
          height={1072}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          src={"/images/projects/bugtracker/bug-tracker-ui.png"}
          alt="image"
        />
      </div>
      <div className="container pt-30">
        <div className="row">
          <div className="col-lg-4">
            {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
            <div className="single-project-page-left wow fadeInUp delay-0-2s">
              <div className="single-info">
                <p>Year</p>
                <h3>2025</h3>
              </div>
              <div className="single-info">
                <p>Company</p>
                <h3>Zaky Soft pvt ltd</h3>
              </div>
              <div className="single-info">
                <p>Services</p>
                <h3>Web Develop</h3>
              </div>
              <div className="single-info">
                <p>Project</p>
                <h3>Bug Tracking</h3>
              </div>
            </div>
            {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
          </div>
          {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
          <div className="col-lg-8">
            <div className="single-project-page-right wow fadeInUp delay-0-4s">
              <h2>Description</h2>
              <p>
                An internal bug and issue reporting system designed for company
                employees to easily report problems with detailed descriptions,
                images, and video attachments up to 1GB. Every submitted report
                is automatically synchronized with Jira, ensuring that issues
                created in the application are instantly available to the
                engineering and support teams in Jira without any manual
                duplication. The platform also includes a built-in real-time
                chat feature that allows the issue reporter and administrators
                to communicate directly within each issue, enabling faster
                clarification, better collaboration, and quicker resolution of
                reported problems..
              </p>
            </div>
          </div>
          {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
        </div>
        {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
        <div className="row pt-30">
          <div className="col-lg-6">
            <div className="single-image wow fadeInUp delay-0-2s">
              <Image
                width={633}
                height={679}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                src={"/images/projects/bugtracker/bu-tracker-part.png"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-image wow fadeInUp delay-0-4s">
              <Image
                width={633}
                height={679}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                src={"/images/projects/bugtracker/bu-tracker-ui3.png"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-image wow fadeInUp delay-0-6s">
              <Image
                width={633}
                height={679}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                src={"/images/projects/bugtracker/bu-tracker-ui4.png"}
                alt="gallery"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="single-image wow fadeInUp delay-0-8s">
              <Image
                width={633}
                height={679}
                sizes="100%"
                style={{ width: "100%", height: "auto" }}
                src={"/images/projects/bugtracker/bu-tracker-ui5.png"}
                alt="gallery"
              />
            </div>
          </div>
        </div>
        {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
      </div>
    </div>
  );
};

export default SingleProject;
