"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F8F7F4] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our products or services? We&apos;re here to
            help. Get in touch with us and we&apos;ll respond as soon as
            possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600">hello@gmail.com</p>
                  <p className="text-gray-600">support@medi-ecom.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <p className="text-gray-600">(209) 555-0104</p>
                  <p className="text-gray-600">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    1640 Parker Rd.
                    <br />
                    Allentown, New Mexico 31134
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-800 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === "loading" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                How do I track my order?
              </h3>
              <p className="text-gray-600">
                Once your order ships, you&apos;ll receive a tracking number via
                email. You can also track your order in your account dashboard.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                What is your return policy?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day return policy for most items. Products must be
                unused and in original packaging.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Do you ship internationally?
              </h3>
              <p className="text-gray-600">
                Yes, we ship to most countries. Shipping costs and delivery
                times vary by location.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Are your products FDA approved?
              </h3>
              <p className="text-gray-600">
                All our products meet FDA standards and are manufactured in
                FDA-registered facilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
