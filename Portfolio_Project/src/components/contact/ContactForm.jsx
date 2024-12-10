import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission (replace this with your backend integration)
    console.log("Form Submitted: ", formData);
    setSuccessMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-[40%] text-white">
      <p className="text-lg text-gray-300 mb-10">
          Feel free to reach out to me for collaborations, inquiries, or just to say hello!
        </p>
      {successMessage && (
        <p className="text-green-600 mb-4">{successMessage}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>
          <p className="mb-2 mt-2 font-semibold">Write all the given fields</p>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 px-4 rounded-full hover:bg-gray-900 uppercase font-bold transition-colors shadow-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
