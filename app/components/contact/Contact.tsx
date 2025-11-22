'use client'
import React, { useState } from "react";
import Image from "next/image";
import { MdEmail, MdCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const CONTACT_EMAIL = "sharonkairu62@gmail.com";
const PHONE_NUMBER = "0733445566"; // local format
const E164_PHONE = "254733445566"; 

const Contact = () => {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // basic validation
    if (!name.trim() || !fromEmail.trim() || !message.trim()) {
      alert("Please enter your name, email and a message.");
      return;
    }

    // Compose subject and body for mailto
    const mailSubject = subject.trim() || "Message from website contact form";
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${fromEmail}`,
      "",
      "Message:",
      message,
    ];
    const body = bodyLines.join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(body)}`;

    // open user's mail client with prefilled email
    setSending(true);
    // use location.href so it opens user's mail client
    window.location.href = mailto;
    // reset (note: mail client opens; user still must send in their mail client)
    setTimeout(() => setSending(false), 1000);
  };

  // WhatsApp prefilled message
  const whatsappText = encodeURIComponent(
    `Hi, my name is ${name || "[Your name]"} — I'm contacting you from the website.`
  );
  const whatsappHref = `https://wa.me/${E164_PHONE}?text=${whatsappText}`;

  return (
    <div
      id="contact"
      className="m-4 lg:m-8 bg-gradient-to-b from-purple-200/40 to-transparent z-0 border-2 border-orange-200 rounded-3xl shadow-2xl flex flex-col items-center p-4 relative overflow-hidden"
    >
      {/* Top-right bouncing dot */}
      <div className="absolute top-4 right-4 w-10 h-10 bg-purple-300 rounded-full opacity-80 animate-bounce" />

      <h1 className="text-orange-500 font-bold text-4xl mt-6">
        How to get in touch with us
      </h1>
      <div className="bg-orange-400 w-60 h-2 rounded-full mt-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mt-8 w-full max-w-5xl">
        {/* IMAGE (mobile-first: shown first on small screens) */}
        <div className="order-first md:order-last flex justify-center">
          <Image
            src="/contact.jpg"
            alt="Contact illustration"
            width={350}
            height={350}
            className="object-contain rounded-2xl mix-blend-multiply"
          />
        </div>

        {/* CONTACT FORM / TEXT BOX */}
        <div className="p-4 bg-white rounded-3xl shadow-xl text-center relative">
          <h2 className="text-3xl font-bold text-[#0fa0a3] mb-6">
            You can reach us through
          </h2>

          {/* Email form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <label className="block">
              <span className="text-sm text-gray-600">Your name</span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0fa0a3]"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">Your email</span>
              <input
                type="email"
                value={fromEmail}
                onChange={(e) => setFromEmail(e.target.value)}
                placeholder="you@example.com"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0fa0a3]"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">Subject (optional)</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0fa0a3]"
              />
            </label>

            <label className="block">
              <span className="text-sm text-gray-600">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                rows={5}
                className="mt-1 w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0fa0a3] resize-none"
                required
              />
            </label>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#0fa0a3] hover:bg-[#0b8f8f] text-white font-semibold px-5 py-2 rounded-lg shadow"
                disabled={sending}
              >
                <MdEmail className="w-5 h-5" />
                {sending ? "Opening mail client..." : "Send email"}
              </button>

              
            </div>

            {/* Helpful text showing the recipient address */}
            <p className="text-sm text-gray-500 mt-2">
              Your message will open in your email app addressed to{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-gray-800 underline"
              >
                {CONTACT_EMAIL}
              </a>
              . Please press send inside your email client to deliver.
            </p>
            <h1>OR</h1>
            {/* Phone action buttons */}
              <div className="flex gap-3">
                {/* Call */}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                  <MdCall className="w-5 h-5 text-teal-600" />
                  Call
                </a>

                {/* WhatsApp */}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
