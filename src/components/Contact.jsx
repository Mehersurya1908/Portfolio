import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
        templateParams,
        "YOUR_USER_ID" // Replace with your EmailJS User ID
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-5xl font-bold mb-8">Contact Me</h1>

      <form onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded"
        >
          Send
        </button>
      </form>

      {status && <p className="mt-4">{status}</p>}
    </div>
  );
}
