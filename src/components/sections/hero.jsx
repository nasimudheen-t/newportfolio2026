"use client";
import React from "react";
import Link from "next/link";
import {
  RiFacebookCircleFill,
  RiTwitterXLine,
  RiLinkedinFill,
  RiGithubLine,
  RiCircleFill,
  RiDownloadLine,
  RiInstagramFill,
} from "@remixicon/react";
import PartnersMarquee from "./partnersMarquee";
import SlideUp from "@/utlits/animations/slideUp";

const Hero = () => {
  return (
    <section id="about" className="about-area">
      <div className="container">
        <div className="row">
          {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
          <div className="col-lg-4">
            <SlideUp>
              <div className="about-image-part">
                <img src={"/images/about/nasim.png"} alt="About Me" />
                <h2 className="text-black">Nasimudheen T</h2>
                <p className="text-black">I am a MERN Stack Developer based in Kerala.</p>
                <div className="about-social text-center">
                  <ul className="text-black">
                    <li className="text-black">
                      <Link href="https://www.instagram.com/nasym_._/" target="_blank">
                        <RiInstagramFill size={20} className="text-black" />
                      </Link>
                    </li>
                    <li className="text-black">
                      <Link href="">
                        <RiTwitterXLine size={20} className="text-black" />
                      </Link>
                    </li>
                    <li className="text-black">
                      <Link href="">
                        <RiLinkedinFill size={20} className="text-black" />
                      </Link>
                    </li>
                    <li className="text-black">
                      <Link href="">
                        <RiGithubLine size={20} className="text-black" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
          <div className="col-lg-8">
            <SlideUp>
              <div className="about-content-part ">
                <p className="text-black">Hello There!</p>
                <h2 className="text-black">
                  I’m Nasimudheen, a MERN Stack Web Developer building scalable,
                  high-performance web applications with modern
                  technologies.{" "}
                </h2>
                <div className="adress-field " >
                  <ul >
                    <li className="d-flex align-items-center text-black">
                      <i>
                        <RiCircleFill size={14} />
                      </i>{" "}
                      Available for Freelancing
                    </li>
                  </ul>
                </div>
                <div className="hero-btns">
                  <a href="/NasimudheenT.pdf" download className="theme-btn">
                    Download CV{" "}
                    <i>
                      <RiDownloadLine size={16} />
                    </i>
                  </a>
                </div>
              </div>
            </SlideUp>
            <SlideUp>
              <PartnersMarquee />
            </SlideUp>
          </div>
          {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
