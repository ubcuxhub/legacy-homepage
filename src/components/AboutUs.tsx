import React from "react";
import AboutImageStack from "./AboutImageStack";

const AboutUs: React.FC = () => {
  return (
    <div
      className="bg-gray-100"
      style={{
        position: "relative",
        zIndex: 9999,
        backgroundColor: "#f3f4f6",
        paddingLeft: "80px",
        paddingRight: "80px",
        paddingTop: "139px",
        paddingBottom: "139px",
      }}
    >
      <div className="max-w-8xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <p
              className="mb-0"
              style={{
                color: "#7A7A7A",
                fontFamily: "Lora",
                fontSize: "31.871px",
                fontStyle: "italic",
                fontWeight: 600,
                lineHeight: "normal",
                alignSelf: "stretch",
              }}
            >
              who we are
            </p>
            <h2
              className="text-gray-800 mb-6 leading-tight"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 700,
                fontSize: "38px",
              }}
            >
              Empowering the next generation of UX designers
            </h2>
            <div
              className="space-y-6 text-gray-700"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 400,
                fontSize: "18px",
                color: "#383838",
              }}
            >
              <p>
                Founded in February 2017 as UBC&apos;s{" "}
                <strong>first and only user experience club</strong>, UBC UX Hub
                is a growing collective of{" "}
                <strong>design-passionate students</strong>. We empower emerging
                designers through hands-on workshops, industry talks, and
                networking events that help bridge the gap between classroom
                learning and real-world practice.
              </p>
              <p>
                Our mission is to <strong>foster growth and community</strong>{" "}
                within the design field. Whether you&apos;re an aspiring
                designer or a seasoned expert, we invite you to join us on our
                journey to <strong>fully explore the world of UX design</strong>
                .
              </p>
            </div>
          </div>

          <div className="lg:flex-shrink-0">
            <AboutImageStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
