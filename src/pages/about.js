import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "../components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref} />;
};

const about = () => {
  return (
    <>
      <Head>
        <title>ITrian | About Us</title>
        <mata name="description" content="any description" />
      </Head>
      {/* <TransitionEffect /> */}

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Meet the Minds Behind Innovation!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Who We Are !..
              </h2>
              <p className="font-medium">
                At Itrian, we are a team of passionate innovators, strategists,
                and problem-solvers committed to transforming businesses in the
                digital age. With expertise in software development and digital
                marketing, we combine cutting-edge technology with data-driven
                strategies to deliver scalable solutions tailored to your unique
                goals.
              </p>

              <h2 className="mt-4 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                What We Do !..
              </h2>
              <p className="font-medium">
                We specialize in crafting dynamic websites, robust applications,
                and comprehensive marketing campaigns that drive growth and
                maximize ROI. Whether you're looking for custom web and mobile
                app development, seamless e-commerce solutions, or impactful
                digital marketing strategies like SEO, PPC, and social media,
                we’re here to help you succeed.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="ChamudithBandara"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfide clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={13} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <h2 className="mt-10 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Our Solutions Are :
          </h2>
          <ul className="font-medium list-disc pl-10">
            <li className="mt-2">
              Custom-Built: Designed to match your specific business needs.
            </li>
            <li className="mt-2">
              Future-Ready: Leveraging the latest technology and market trends.
            </li>
            <li className="mt-2">
              Results-Driven: Focused on measurable outcomes that matter to you.
            </li>
          </ul>

          <h2 className="mt-10 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Our Mission -
          </h2>
          <p className="font-bold">
            To empower businesses by delivering innovative solutions that
            combine technology and creativity, enabling them to thrive in an
            ever-evolving digital landscape.
          </p>

          <h2 className="mt-4 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Our Vision -
          </h2>
          <p className="font-bold">
            To be the trusted partner for businesses worldwide, setting
            benchmarks in software innovation and marketing excellence.
          </p>

          <Experience />
          <Skills />

          <h2 className="mt-10 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Why Choose Us?
          </h2>
          <ul className="font-medium list-disc pl-5">
            <li className="mt-2">
              End-to-End Expertise: From idea to execution, we handle
              everything.
            </li>
            <li className="mt-2">
              Collaborative Approach: We work closely with our clients to ensure
              their vision is realized.
            </li>
            <li className="mt-2">
              Data-Driven Results: Every decision we make is backed by analytics
              and industry insights.
            </li>
            <li className="mt-2">
              Scalable Solutions: As your business grows, our solutions grow
              with you.
            </li>
          </ul>

          <h2 className="mt-10 mb-2 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
            Join Us in Your Growth Journey
          </h2>
          <p className="font-medium">
            Let us help you write your success story with cutting-edge solutions
            and unparalleled dedication. Together, we’ll turn your ideas into
            realities and your challenges into opportunities.
          </p>
        </Layout>
      </main>
    </>
  );
};

export default about;
