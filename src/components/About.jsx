import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        I'm a creative coder who loves bringing digital dreams to life. 
        From sleek UIs to mind-bending 3D worlds, I've got the skills to 
        make it happen. React.js, Three.js, Figma, Blender - they're all tools 
        in my digital playground. And with my back-end know-how, I can build complete 
        experiences that'll amaze the users. Ready to craft something amazing together?
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const ResponsiveAbout = SectionWrapper(About, "about");

export default function ResponsiveAboutWrapper() {
  return (
    <div className="responsive-about">
      <style jsx>{`
        @media (max-width: 500px) {
          .responsive-about {
            padding: 0 20px;
          }
          .responsive-about h2 {
            font-size: 28px;
          }
          .responsive-about p {
            font-size: 16px;
            line-height: 24px;
          }
          .responsive-about .mt-20 {
            margin-top: 40px;
          }
          .responsive-about .gap-10 {
            gap: 20px;
          }
        }
      `}</style>
      <ResponsiveAbout />
    </div>
  );
}