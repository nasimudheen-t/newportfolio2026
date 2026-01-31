import React from "react";
import { RiMailSendLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";

const Summery = () => {
  return (
    <section id="about" className="about-single-area innerpage-single-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part border">
                <img src={"/images/about/nasim2.png"} alt="About Me" />
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part">
                <h2 className="text-black">I’m Nasimudeen, a Mern Stack developer.</h2>
                <p className="text-black">
                  I am an India-based MERN Stack Web Developer with strong
                  experience in Next.js and modern React development. I build
                  scalable, secure, and high-performance web applications using
                  MongoDB, Express.js, React, and Node.js, with a focus on React
                  Hooks, TanStack Query for efficient server-state management,
                  and clean component architecture.
                </p>
                <p className="text-black">
                  I have hands-on experience developing real-world features such
                  as authentication systems, admin dashboards, REST APIs, file
                  uploads, and real-time messaging. I enjoy working across the
                  full development lifecycle—from building responsive user
                  interfaces to designing reliable backend services and
                  databases—and I am passionate about delivering
                  production-ready applications using modern web technologies..
                </p>
                <div className="hero-btns">
                  <a href="contact.html" className="theme-btn text-black">
                    Get In touch
                    <i>
                      {" "}
                      <RiMailSendLine size={16} className="text-black" />{" "}
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Summery;
