import HeroBanner from "../assets/images/bioyoq-banner.jpg";
import Badge from "../components/Badge.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { SlideUpParagraph } from "../components/SlideUpParagraph.jsx";
import LogoCarousel from "../components/LogoCarousel.jsx";
import { AnimatedAboutText } from "../components/AnimatedAboutText.jsx";
import { AnimatedDivider } from "../components/AnimatedDivider.jsx";
import { MarqueeScrollText } from "../components/MarqueeScrollText.jsx";
import memberImage from "../assets/images/bioyoq-road-construction.jpg";
import { processSteps } from "../data/processSteps";
import { capabilities } from "../data/capabilities.js";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-[100dvh]">
        <div className="relative h-[60dvh]">
          <img
            src={HeroBanner}
            alt="Hero"
            className="rounded-b-3xl w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 rounded-b-3xl pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0, 0, 0, 0.71) 0%, rgba(30,30,30,0.0) 40%)",
            }}
          />
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-screen-2xl mx-auto flex px-4 md:px-8 translate-y-[50%]">
            <div className="flex-1 flex justify-end">
              <Badge />
            </div>
          </div>
        </div>
        <div className="mt-2 lg:mt-8 px-4 py-3 md:px-8 max-w-screen-2xl mx-auto">
          <h1 className="w-[70vw] font-black mb-4 uppercase text-primary text-[clamp(2rem,6vw,3.5rem)] 2xl:text-[clamp(2.5rem,8vw,5rem)] leading-[1.1] tracking-tight">
            Foundation & Road Construction Experts
          </h1>

          <div className="flex justify-between items-end gap-4 h-full">
            <PrimaryButton text="Talk to us" className="self-end" />

            <div className="flex flex-col items-center">
              <svg
                className="w-10 h-10 text-primary animate-bounce"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className="mt-2 text-sm text-gray-500">Scroll Down</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col gap-2 lg:gap-8 mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
        {/* First text - left side */}
        <div className="text-left w-full md:w-3/5">
          <SlideUpParagraph>
            <AnimatedAboutText text="Bioyoq is a forward-thinking construction and engineering company based in Lagos, delivering innovative solutions and technical expertise to clients across Nigeria and worldwide." />
          </SlideUpParagraph>
        </div>

        {/* Second text - right side */}
        <div className="text-left w-full md:w-2/5 ml-auto">
          <SlideUpParagraph>
            At Bioyoq, our experienced team applies creative problem-solving to
            every stage of your foundation and road construction project – from
            initial planning and precision execution to final completion –
            delivering tailored, practical, and cost-effective solutions that
            meet each client’s unique requirements and ensure lasting quality.
          </SlideUpParagraph>
        </div>
      </section>

      {/* Marquee Section: gentle horizontal scroll */}
      <section className="w-full py-8 flex flex-col items-center justify-center">
        <MarqueeScrollText text="From blueprint to reality." />
        <AnimatedDivider />
      </section>

      {/* Our Expertise Section */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-16">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Expertise</h2>
        <div className="w-full md:w-7/10 text-left">
          <SlideUpParagraph>
            <AnimatedAboutText text="We specialize in foundation and road construction, combining advanced engineering techniques with local expertise to deliver durable, high-quality infrastructure. Our team is committed to innovation, safety, and client satisfaction, ensuring every project is completed to the highest standards." />
          </SlideUpParagraph>
        </div>
      </section>

      {/* Process Section */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-amber-950/20 space-y-8 md:space-y-0">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="bg-transparent rounded-xl md:p-8 flex flex-col items-start"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: step.delay }}
            >
              <div
                className="text-5xl font-extrabold mb-2"
                style={{ color: "#9D2B21" }}
              >
                {step.number}
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {step.title}
              </div>
              <div className="border-b border-amber-950 opacity-20 w-full mb-4"></div>
              <div className="text-gray-700 mb-4">{step.description}</div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {step.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-16">
         <img
          src={memberImage}
          alt="Team"
          className="w-full h-64 lg:h-128 object-cover object-top rounded-xl mb-8 filter brightness-90 contrast-110 saturate-125"
        />
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Our Capabilities</h2>
          <SlideUpParagraph>
            <div className="max-w-[700px] text-lg text-gray-700">
              We leverage cutting-edge technology and industry best practices to deliver exceptional results in every project. Our capabilities include advanced project management, sustainable construction practices, and a commitment to safety and quality.
            </div>
          </SlideUpParagraph>
         <div className="mt-8">
          <ul className="divide-y divide-amber-950/20">
            {capabilities.map(({ title, href, desc }) => (
              <li key={title} className="py-12 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-16 group relative">
                <a
                  href={href}
                  className="text-4xl uppercase font-base text-primary hover:underline flex-1 block"
                >
                  {title}
                </a>
                <div className="flex-1 text-gray-600 text-base lg:px-4 my-4">{desc}</div>
                <span className="ml-2 flex-shrink-0 relative flex items-center">
                  <span className="absolute uppercase px-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-primary text-sm font-base pointer-events-none">
                    Learn more
                  </span>
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary transform rotate-[-45deg] group-hover:rotate-0 transition-transform duration-200"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </li>
            ))}
          </ul>
          </div>
      </section>

      {/* Our Members */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-16">
       
        <div className="flex flex-col md:flex-row w-full mb-16">
          <h2 className="text-4xl font-bold mb-8 text-gray-900 flex-1">Our Members</h2>
          <SlideUpParagraph>
            <div className="md:w-3/5 lg:w-2/5  ml-auto">
              Our staff are actively involved with a range of peak industry bodies, connecting with their peers, drawing on educational resources and accessing up-to-date information on industry developments.
            </div>
          </SlideUpParagraph>
        </div>
        <LogoCarousel />
      </section>
    </>
  );
}
