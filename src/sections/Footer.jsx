import { socials } from "../constants/index.jsx";
import { useState } from "react";

const Footer = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f137c998-c37f-4989-b6e9-5a9398e2aaf1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <footer className="bg-s1 text-white py-16 px-6 shadow-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

        {/* Left: Logo & Contact */}
        <div className="flex-1">
          <div className="mb-4">
            <img
              src="/src/public/try2.svg"
              alt="Vista Agriwings Logo"
              className="w-36 h-auto"
            />
          </div>
          <p className="mb-3 leading-6">
            1244 - D Sudama Nagar,<br />
            60 Feet Road Annapurna,<br />
            Indore, MP
          </p>
          <p className="mb-1">📞 +91 62606062689</p>
          <p>📧 vistaagriwings@gmail.com</p>
        </div>

        {/* Center: Contact Form */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-poppins font-normal mb-4">Contact Us</h3>
          <form
            onSubmit={onSubmit}
            className="flex flex-col gap-4 w-full max-w-md shadow-200 p-6 rounded-20 bg-s2"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 rounded-14 text-black focus:outline-none focus:ring-2 focus:ring-p1 font-inter"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-3 rounded-14 text-black focus:outline-none focus:ring-2 focus:ring-p1 font-inter"
            />
            <textarea
              name="message"
              placeholder="Your Note"
              rows="4"
              required
              className="p-3 rounded-14 text-black focus:outline-none focus:ring-2 focus:ring-p1 font-inter"
            ></textarea>
            <button
              type="submit"
              className="bg-p1 text-s1 py-2 px-6 rounded-14 hover:opacity-90 transition font-poppins font-medium w-fit"
            >
              Send
            </button>
            <span className="text-sm text-p3 font-inter">{result}</span>
          </form>
        </div>

        {/* Right: Socials & Links */}
        <div className="flex-1 flex flex-col items-start md:items-end">
          <div className="flex gap-4 mb-4">
            {socials.map(({ id, url, icon, title }) => (
              <a href={url} key={id} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon}
                  alt={title}
                  className="w-6 h-6 hover:opacity-80 transition"
                />
              </a>
            ))}
          </div>
          <div className="flex gap-4 text-sm text-gray-400 mb-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
          <p className="text-xs opacity-60">© {new Date().getFullYear()} Vista Agriwings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
