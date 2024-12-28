import React from "react";
import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <div id="contact" className="p-6 lg:p-20 md:p-10 text-gray-secondary bg-gray-primary">
      <h2 className="text-4xl font-bold mb-8">Get in touch_</h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-72">
        <div className="flex flex-col gap-4 md:text-left">
          <h3 className="text-2xl font-semibold uppercase tracking-wider">Contact Information</h3>
          <p className="font-bold uppercase text-xl">
            Email:{" "}
            <a
              href="mailto:jamalimubashirali@gmail.com"
              className="hover:underline text-lg lowercase"
            >
              jamalimubashirali@gmail.com
            </a>
          </p>
          <p className="font-bold uppercase text-xl">
            Phone:{" "}
            <a href="tel:+1234567890" className="text-gray-secondary hover:underline text-lg">
              +92 341 8182700
            </a>
          </p>
          <h3 className="text-2xl font-semibold mt-4 tracking-wider uppercase">Follow Me</h3>
          <div className="flex flex-col gap-4">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-lg font-bold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-lg font-bold"
            >
              Github
            </a>
            <a
              href="https://twitter.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-lg font-bold"
            >
              Twitter
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactSection;
