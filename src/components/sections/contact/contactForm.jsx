"use client";
import React, { useState } from "react";
import { RiMailLine } from "@remixicon/react";
import SlideUp from "@/utlits/animations/slideUp";
import { toast } from "sonner";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      setLoading(true);
      setSuccess(false);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }
      toast.success("Message sent successfully");

      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-lg-8">
      <SlideUp>
        <div className="contact-form contact-form-area">
          {/* only this line changed */}
          <form className="contactForm" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="name" className="text-black">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Steve Milner"
                    required
                    data-error="Please enter your Name"
                  />
                  <label htmlFor="name" className="for-icon">
                    <i className="far fa-user"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="email" className="text-black">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    placeholder="hello@websitename.com"
                    required
                    data-error="Please enter your Email"
                  />
                  <label htmlFor="email" className="for-icon">
                    <i className="far fa-envelope"></i>
                  </label>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="message" className="text-black">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Write Your message"
                    required
                    data-error="Please Write your Message"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>

              <div className="col-md-12">
                <div className="form-group mb-0 text-black">
                  <button
                    type="submit"
                    className="theme-btn"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Me Message"}
                    <i>
                      <RiMailLine size={15} />
                    </i>
                  </button>

                  {success && (
                    <p style={{ color: "green", marginTop: "10px" }}>
                      Message sent successfully
                    </p>
                  )}

                  <div id="msgSubmit" className="hidden"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </SlideUp>
    </div>
  );
};

export default ContactForm;
