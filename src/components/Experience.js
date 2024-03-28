import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";
import LahiruBandaranayaka from "../../public/images/profile/LahiruBandaranayaka.jpg";
import TharinduMarasinghe from "../../public/images/profile/TharinduMarasinghe.jpg";
import ChamudithBandara from "../../public/images/profile/ChamudithBandara.jpg";
import Image from "next/image";


const Details = ({ position, name, companyLinks, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 sm:text-center first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
        <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg ">
          {position}&nbsp;<br/>
          <a
            href={companyLinks}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize hover:underline"
          >
            @{name}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className=" font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
      Our Team
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

      <motion.div
      style={{scaleY: scrollYProgress}} 
      className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
      md:w-[2px] md:left-[30px] xs:left-[20px]" />

        <ul className="w-full flex flex-col items-start justify-between sm:ml-3 xs:ml-2">
          
            <>

            <div
              className="ml-[20%] col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={ChamudithBandara}
                alt="ChamudithBandara"
                className=" w-[250px] md:w-[175px] sm:w-[150px] h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

          <Details
            position="Software Engineer"
            companyLinks="https://www.linkedin.com/in/chamudith-bandara-930975202/"
            name="CHAMUDITH BANDARA"
            time="2022-Present"
            address="Acres 7, Dekinda Junction, Balana, Kadugannawa."
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />



            
          </>

          <div
              className="ml-[20%] col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={TharinduMarasinghe}
                alt="THARINDU MARASINGHE"
                className=" w-[250px] md:w-[175px] sm:w-[150px] h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
          
          <Details
            position="Digital Marketing Enthusiast"
            companyLinks="https://www.linkedin.com/in/tharindu-marasinghe-16443a217/"
            name="THARINDU MARASINGHE"
            time="2022-Present"
            address="232/1 kotabogoda, kadugannawa"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />

          
          
          <>

          <div
              className="ml-[20%] col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={LahiruBandaranayaka}
                alt="LahiruBandaranayaka"
                className=" w-[250px] md:w-[175px] sm:w-[150px] h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

          <Details
            position="Software Engineer"
            companyLinks=""
            name="LAHIRU BANDARANAYAKA"
            time="2022-Present"
            address="E3,Aluthnuwara rd, Idampitiya, Hingula"
            work="Worked on a team responsible for developing new features for Google's 
                search engine, including improving the accuracy and relevance of search results and 
                developing new tools for data analysis and visualization."
          />

          </>

        </ul>
      </div>
    </div>
  );
};

export default Experience;
