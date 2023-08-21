import { AboutBody, AboutTop } from "@/devlink";
import Link from "next/link";

const About = () => {
  return (
    <>
      <AboutTop />
      <AboutBody
        aboutImage="/assets/square.jpg"
        link={{ href: "/assets/resume.pdf" }}
        textLink="View resume"
      />
    </>
  );
};

export default About;
