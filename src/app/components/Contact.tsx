import React from "react";

export default function Contact() {
  return (
    <section className="max-w-2xl mx-auto my-12 px-6 py-10 rounded-3xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 text-center">Contact</h2>
      <p className="text-lg text-white/80 mb-6 text-center">
        Interested in working together or have a question? Fill out the form below and I'll get back to you soon!
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-white/80 mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white/80 mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white/80 mb-1 font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 