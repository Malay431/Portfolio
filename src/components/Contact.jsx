import React, { useState } from "react";
import { FaGlobe, FaPhone } from "react-icons/fa";
import { IoCall, IoConstruct } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const data = {
      name: formData.name,
      email: formData.email,  
      message: formData.message,
      access_key: import.meta.env.VITE_WEB3FORMS,
    };

    try { 
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setIsMessageSent(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.log("Message Failed", result);
      }
    } catch (err) {
      console.log(err);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div id="contact" className="mt-20">
      <form
        onSubmit={handleFormSubmit}
        className="relative flex border rounded-4xl mx-20 p-20 bg-black border-gray-500/50"
      >
        <div className="w-1/3 border-r">
          <h1 className="text-3xl underline underline-offset-4 mt-20 font-bold">
            GET IN TOUCH
          </h1>
          <div className="mt-15 flex flex-col gap-4">
            <p className="flex gap-2 items-center">
              <FaGlobe />
              India
            </p>
            <p className="flex gap-2 items-center">
              <FaPhone />
              +91 7020151733
            </p>
            <p className="flex gap-2 items-center">
              <MdEmail />
              malaymchitodkar@gmail.com
            </p>
          </div>
        </div>

        <div className="w-2/3 ml-10">
          <h1 className=" mb-5 text-4xl font-light uppercase text-slate-300 flex gap-2">
            <RiMessage2Fill />
            Contact Me{" "}
          </h1>
          <div className="flex gap-5 mb-10">
            <div className="w-1/2 flex flex-col gap-2">
              <label>
                Your Name<span className="text-red-500">*</span>:{" "}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Eg. Elon Musk | Sundar Pichai"
                className="border w-full border-gray-500/50 s p-3 rounded-xl"
                required
              />
            </div>
            <div className="w-1/2 flex flex-col gap-2">
              <label>
                Your Email<span className="text-red-500">*</span>:{" "}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Eg. timcook@apple.com"
                className="border w-full border-gray-500/50 s p-3 rounded-xl"
                required
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label>
              Your Message<span className="text-red-500">*</span>:{" "}
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Eg. Hi Mr.Malay, We would like to work with you as we are really so impressed with your Resume."
              className="border w-full h-50 border-gray-500/50 s p-3 rounded-xl resize-none"
              required
            ></textarea>
          </div>

          <div className="w-full text-center mt-10">
            {!isMessageSent ? (
              <button disabled={loading} className="border px-3 py-2 rounded-2xl uppercase bg-gradient-to-br from-black via-gray-800 to-amber-200 transition-all duration-600 bg-[length:200%_auto] cursor-pointer hover:bg-right-top">
                {loading ? 'Sending..' : 'Send Message'}
              </button>
            ) : (
              <h1 className="text-green-400 px-3 py-2">✉️ Message Sent...</h1>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
