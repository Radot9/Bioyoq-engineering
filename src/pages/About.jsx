import HeroBanner from "../assets/images/bioyoq-banner.jpg";
import BioyoqLogo from "../assets/images/bioyoq-logo.svg";
import Badge from "../components/Badge.jsx";
import PrimaryButton from "../components/PrimaryButton.jsx";
import { SlideUpParagraph } from "../components/SlideUpParagraph.jsx";
import { processSteps } from "../data/processSteps";
import LogoCarousel from "../components/LogoCarousel.jsx";
import { AnimatedAboutText } from "../components/AnimatedAboutText.jsx";
import { AnimatedDivider } from "../components/AnimatedDivider.jsx";
import { MarqueeScrollText } from "../components/MarqueeScrollText.jsx";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      {/* Hero Section - Split layout with line icon and text */}
      <section className="bg-white pt-16 pb-0 px-4 md:px-8">
        {/* Full-width grayscale image below split section */}
        <div className="w-screen mt-[-4rem] relative z-0 left-1/2 right-1/2 -translate-x-1/2">
          <img
            src={HeroBanner}
            alt="Team"
            className="w-full h-64 md:h-96 object-cover object-top grayscale"
          />
        </div>
        {/* Overlap effect: negative margin to overlap banner below */}
        {/* <div className="relative w-32 h-32 mb-8">
              <img
                src={BioyoqLogo}
                alt="Bioyoq Logo"
                className="absolute top-[-80px] left-0 w-full h-full z-10"
            
              />
              
            </div> */}
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Left: Heading and line icon */}
          <div className="flex flex-col items-start justify-center h-full py-12">
            <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-8">
              About Us
            </h1>
          </div>
          {/* Right: Description text */}
          <div className="flex flex-col justify-center h-full py-12">
            <p className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
              Our{" "}
              <span className="text-[#C7B99F]">
                construction and engineering
              </span>{" "}
              expertise covers each process and every part of the project
              lifecycle, from the initial tender through to completion and
              beyond.
            </p>
          </div>
        </div>
      </section>
      {/* Our Approach Section - new design */}
      <section className="bg-[#EAE8DE] py-8 lg:py-32 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-2">
                Our Approach
              </h2>
            </div>
            <div className="text-sm text-gray-700 md:text-right max-w-xl md:ml-auto">
              As a team, Bioyoq is driven by a forward-thinking mindset focused
              on pre-empting risk, simplifying complexity and delivering
              commercially meaningful outcomes for our clients.
            </div>
          </div>
          <hr className="border-t border-gray-400 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-900">
            <div className="flex flex-col items-start">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#9D2B21"
                strokeWidth="2"
                className="mb-2"
              >
                <rect x="4" y="16" width="4" height="8" />
                <rect x="12" y="12" width="4" height="12" />
                <rect x="20" y="8" width="4" height="16" />
              </svg>
              <h3 className="font-semibold mb-1">Considered</h3>
              <p className="text-xs text-gray-700">
                We prepare for the long term. By investing in our people,
                anticipating industry trends and examining issues from every
                angle, we provide advice that is both durable and effective.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#9D2B21"
                strokeWidth="2"
                className="mb-2"
              >
                <circle cx="16" cy="16" r="8" />
                <text
                  x="16"
                  y="21"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#9D2B21"
                >
                  ₦
                </text>
              </svg>
              <h3 className="font-semibold mb-1">Commercial</h3>
              <p className="text-xs text-gray-700">
                We deliver tangible value. Our advice is realistic, outcome
                focused and aligned with the commercial realities our clients
                face.
              </p>
            </div>
            <div className="flex flex-col items-start">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                stroke="#9D2B21"
                strokeWidth="2"
                className="mb-2"
              >
                <circle cx="16" cy="16" r="8" />
                <path d="M10 16h12M16 10v12" />
              </svg>
              <h3 className="font-semibold mb-1">Strategic</h3>
              <p className="text-xs text-gray-700">
                We apply broad-based expertise to support clear, informed
                decision-making. Our service is geared towards reducing risk,
                creating value and securing results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="w-full py-8 flex flex-col items-center justify-center">
        <MarqueeScrollText text="build it right" />
        <AnimatedDivider />
      </section>

      {/* What We Do Section - reference image style */}
      <section className="w-full bg-white py-8 lg:py-32 px-4 md:px-8">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: Large heading and highlighted text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8">Our legal services are structured to support clients across the full project lifecycle—before, during and after contract execution. We focus on reducing risk, protecting entitlements and driving <span className="text-[#C7B99F]">commercially effective outcomes</span> at every stage of project delivery.</h2>
          </div>
          {/* Right: Section heading and supporting details */}
          <div className="flex flex-col justify-center items-end text-right">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">What we<br />do/</h3>
            <div className="text-xs text-gray-700 max-w-md mb-8">
              Our experience spans the full spectrum of the built environment. This includes complex residential and commercial developments, as well as major infrastructure projects across transport, utilities, energy and social infrastructure. We have acted on matters involving power stations, tunnels, offshore facilities, hospitals, aged care facilities, schools and national initiatives such as the rollout of the National Broadband Network.<br /><br />
              Whether advising on upstream contract strategy or resolving high-stakes disputes, our team is trusted by contractors, developers and government-linked entities to deliver clarity and commercial certainty.
            </div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#9D2B21" strokeWidth="2" className="mt-4"><path d="M16 4v24M8 20l8-8 8 8"/></svg>
          </div>
        </div>
      </section>

      {/* Process Section - More Details */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
        <h2 className="text-4xl font-bold mb-8 text-primary">Our Process</h2>
        
      </section>
        {/* Process Sections - from homepage data */}
        <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
          {processSteps.map((step, idx) => (
            <div key={step.title} className={`border-t border-gray-300 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image (alternate left/right) */}
              <div className="flex justify-center items-center">
                <img src={idx === 1 ? "/src/assets/images/bioyoq-road-construction.jpg" : "/src/assets/images/bioyoq-road-constructrion.jpg"} alt={step.title} className="w-full max-w-md h-64 object-cover grayscale" />
              </div>
              {/* Text */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {/* Example icon for each step, can be customized */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#C7B99F" strokeWidth="2" className="mr-4">
                    <rect x="8" y="8" width="24" height="24"/>
                    <text x="20" y="28" textAnchor="middle" fontSize="16" fill="#C7B99F">{step.number}</text>
                  </svg>
                  <h3 className="text-3xl font-light text-[#C7B99F]">{step.title}</h3>
                </div>
                <p className="text-base text-gray-900 font-medium mb-2">{step.description}</p>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>

      {/* Industry Engagement Section */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
        <h2 className="text-4xl font-bold mb-8 text-primary">
          Industry Engagement
        </h2>
        <SlideUpParagraph>
          <div className="max-w-[700px] text-lg text-gray-700">
            Our team actively participates in industry bodies, attends
            conferences, and collaborates with peers to stay ahead of trends and
            best practices.
          </div>
        </SlideUpParagraph>
      </section>

      {/* Partners Section */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
        <h2 className="text-4xl font-bold mb-8 text-primary">Our Partners</h2>
        <LogoCarousel />
      </section>

      {/* Contact Us Section */}
      <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 lg:py-32">
        <h2 className="text-4xl font-bold mb-8 text-primary">Contact Us</h2>
        <div className="bg-white rounded-xl p-8 shadow flex flex-col items-center">
          <p className="text-lg text-gray-700 mb-4">
            Ready to start your project or have questions? Reach out to our team
            today.
          </p>
          <a
            href="mailto:info@bioyoq.com"
            className="text-primary text-xl font-bold underline mb-2"
          >
            info@bioyoq.com
          </a>
          <span className="text-gray-600">+234 800 000 0000</span>
        </div>
      </section>
    </>
  );
}
