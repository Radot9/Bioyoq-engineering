import React from "react";
import ContactBanner from "../assets/images/bioyoq-banner.jpg";

export default function Contact() {
  return (
    <main className="min-h-screen bg-stone-800 text-white py-16 px-4 md:px-8">
      <section className="max-w-screen-2xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-16">
          <h1 className="text-4xl md:text-5xl font-light mb-8">Get in touch/</h1>
          <p className="text-lg text-gray-200 md:ml-auto md:text-right">
            We are passionate about what we do and empowered to turn great ideas into reality, delivering superior service and ongoing value to our clients.
          </p>
        </div>
        <hr className="border-gray-500 mb-8" />
        <form className="space-y-12">
          {/* Details Section */}
          <div>
            <label className="block text-base mb-4">DETAILS</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm mb-2" htmlFor="firstName">First Name*</label>
                <input id="firstName" name="firstName" type="text" required className="w-full bg-transparent border-b border-gray-500 py-2 px-0 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="lastName">Last Name*</label>
                <input id="lastName" name="lastName" type="text" required className="w-full bg-transparent border-b border-gray-500 py-2 px-0 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="phone">Phone*</label>
                <input id="phone" name="phone" type="tel" required className="w-full bg-transparent border-b border-gray-500 py-2 px-0 text-white focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm mb-2" htmlFor="email">Email*</label>
                <input id="email" name="email" type="email" required className="w-full bg-transparent border-b border-gray-500 py-2 px-0 text-white focus:outline-none" />
              </div>
            </div>
          </div>
          <hr className="border-gray-500" />
          {/* Message Section */}
          <div>
            <label className="block text-base mb-4">YOUR MESSAGE</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2">
                <label className="block text-sm mb-2" htmlFor="message">Write your message here*</label>
                <textarea id="message" name="message" required rows={5} className="w-full bg-transparent border-b border-gray-500 py-2 px-0 text-white focus:outline-none" />
              </div>
            </div>
          </div>
        </form>
        {/* Banner Image Section */}
        <div className="w-full mt-16">
          <img
            src={ContactBanner}
            alt="Contact Banner"
            className="w-full h-[350px] object-cover object-center rounded-xl"
          />
        </div>

        {/* Contact Details & Social Links Section */}
        <div className="w-full mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            <div className="text-left text-gray-200 text-base font-light uppercase tracking-wide">Direction</div>
            <div className="md:col-span-2 text-left text-white text-4xl md:text-5xl font-light">
              6, Ofili Close, Thomas Ajufo Estate, Alimosho, Lagos
            </div>
          </div>
          <hr className="border-gray-500 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            <div className="text-left text-gray-200 text-base font-light uppercase tracking-wide">Phone</div>
            <div className="md:col-span-2 text-left text-white text-4xl md:text-5xl font-light">
              +234 812776 4973
            </div>
          </div>
          <hr className="border-gray-500 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
            <div className="text-left text-gray-200 text-base font-light uppercase tracking-wide">Email</div>
            <div className="md:col-span-2 text-left text-white text-4xl md:text-5xl font-light">
              info@bioyoq.com
            </div>
          </div>
          <hr className="border-gray-500 mb-8" />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-center mt-12">
            <a href="#" className="text-white text-4xl underline font-light">Facebook</a>
            <a href="#" className="text-white text-4xl underline font-light text-center">LinkedIn</a>
            <a href="#" className="text-white text-4xl underline font-light text-right">Instagram</a>
          </div>
        </div>
      </section>
    </main>
  );
}
