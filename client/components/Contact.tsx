import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // "success" | "error"
  const [statusMsg, setStatusMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus(null);

    emailjs
      .sendForm(
        "service_u2bq403",
        "template_5urfpgi",
        formRef.current,
        "PhNpatH4QSBI76k3c"
      )
      .then(
        () => {
          setStatus("success");
          setStatusMsg(
            "MESSAGE SENT SUCCESSFULLY. I WILL GET BACK TO YOU SOON."
          );
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
          setStatusMsg(
            "FAILED TO SEND MESSAGE. PLEASE TRY AGAIN."
          );
        }
      );
  };

  return (
    <section id="contact" className="section-padding bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE — RESTORED */}
          <div>
            <SectionHeader 
              title="CONTACT" 
              subtitle="Let's build scalable systems"
            />

            <div className="space-y-12">
              <p className="text-2xl md:text-4xl font-black uppercase tracking-tighter leading-tight">
                HAVE A PROJECT IN MIND? <br />
                <span className="opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
                  LET'S CONNECT.
                </span>
              </p>

              <div className="space-y-4">
                <p className="text-sm font-black uppercase tracking-widest text-black/40">
                  Direct Contact
                </p>
                <p className="text-xl md:text-3xl font-black tracking-tight">
                  paramshelke2512@gmail.com
                </p>
              </div>

              <div className="flex gap-8">
                {[
                  { icon: FaGithub, link: "https://github.com/param-atxep" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/param-shelke-856722381" },
                  { icon: FaInstagram, link: "https://www.instagram.com/parmya._?igsh=aXI5bXc2MzR3c2M0" },
                  { icon: FaEnvelope, link: "mailto:paramshelke2512@gmail.com" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.link}
                      className="text-3xl hover:opacity-40 transition-opacity"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — FORM */}
          <div className="bg-black p-12 text-white">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="space-y-8"
            >

              <div className="space-y-2 border-b border-white/20 pb-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full bg-transparent outline-none font-bold uppercase tracking-widest"
                  placeholder="YOUR NAME"
                />
              </div>

              <div className="space-y-2 border-b border-white/20 pb-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="w-full bg-transparent outline-none font-bold uppercase tracking-widest"
                  placeholder="YOUR EMAIL"
                />
              </div>

              <div className="space-y-2 border-b border-white/20 pb-4">
                <label className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent outline-none font-bold uppercase tracking-widest resize-none"
                  placeholder="YOUR MESSAGE"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-6 text-xs font-black uppercase tracking-[0.5em] hover:bg-white/90 transition-all flex items-center justify-center gap-4"
              >
                Send Message <FaPaperPlane />
              </button>

              {/* INLINE MESSAGE — SAME UI STYLE */}
              {status && (
                <p
                  className={`text-[10px] font-black uppercase tracking-widest text-center ${
                    status === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {statusMsg}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}