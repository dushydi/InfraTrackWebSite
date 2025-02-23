import Button from "../componets/Button";
import emailjs from "@emailjs/browser";
import React, { useRef, FormEvent, useState, useEffect } from "react";

const GetInTouch: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_pegaepn", "template_245d4pd", form.current, {
          publicKey: "yiALN47odMHRx5QSM",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            console.log("Message sent");
            setShowSuccess(true);
            if (form.current) {
              form.current.reset(); // Clear form content
            }
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 5000); // 5 seconds

      return () => clearTimeout(timer); // Clear timer on unmount or re-render
    }
  }, [showSuccess]);

  return (
    <section className="bg-[#e8f6fd] py-16 pt-48 relative" id="get-in-touch">
      {showSuccess && (
        <div className="absolute top-4 right-4 bg-green-200 text-green-800 px-4 py-2 rounded-md shadow-md z-50">
          Email sent!
        </div>
      )}
      <div className="max-w-2xl mx-auto p-8 bg-[#e8f6fd] rounded-xl shadow-3xl">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Get In Touch
        </h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          {/* Form fields remain the same */}
          <div>
            <label
              htmlFor="from_name"
              className="block text-lg font-medium text-gray-700 font-montserrat"
            >
              Name
            </label>
            <input
              type="text"
              name="from_name"
              id="from_name"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-[#2e4052] focus:border-[#008080]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="user_email"
              className="block text-lg font-medium text-gray-700 font-montserrat"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-[#2e4052] focus:border-[#008080]"
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-gray-700 font-montserrat"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-[#2e4052] focus:border-[#008080]"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit">
              <Button label="Send message" className="py-3 px-4 " />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
