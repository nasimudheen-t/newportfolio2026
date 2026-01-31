import React from "react";
import Marquee from "react-fast-marquee";

const PartnersMarquee = () => {
  return (
    <div className="about-content-part-bottom">
      <h2 className="text-black">Company I Worked With</h2>
      <div className="company-list">
        <div className="scroller">
          <div className="scroller__inner">
            <Marquee>
              <img
                src="https://media.licdn.com/dms/image/v2/C4E0BAQFOnbgVWI_usg/company-logo_200_200/company-logo_200_200/0/1630627685435/zakysoft_solutions_private_limited_logo?e=1771459200&v=beta&t=6x43wcU5XKwnfVoiiLzH4YdiQRsukd5-tXhLxmC_waE"
                width={"80px"}
                alt=""
              />
              {/* <img src={"/images/client-logos/partner2.png"} alt="" />
                            <img src={"/images/client-logos/partner3.png"} alt="" />
                            <img src={"/images/client-logos/partner4.png"} alt="" />
                            <img src={"/images/client-logos/partner5.png"} alt="" />
                            <img src={"/images/client-logos/partner1.png"} alt="" /> */}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersMarquee;
