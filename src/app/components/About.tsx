import React from "react";

export default function About() {
  return (
    <section className="max-w-5xl mx-auto my-12 px-6 py-10 rounded-3xl z-[99]">
      <h2 className="text-3xl md:text-4xl font-bold text-purple-400 mb-4 text-center">Short Bio</h2>
      <p className="text-3xl font-semibold text-gray-500 mb-6 text-center">
        I am a passionate <span className="text-red-400">full-stack developer</span> with a strong background in building modern, interactive web applications. I love working with <span className="text-blue-400">React, Node.js, and the latest web technologies</span> to create seamless user experiences.
      </p>
      <ul className="text-gray-400 font-semibold text-xl space-y-2 max-w-md mx-auto pl-8">
        <li className="relative">
          <span className="absolute -left-5">•</span>
          <span className="block text-center"><span className="text-red-400">2+ years</span> of professional development experience</span>
        </li>
        <li className="relative">
          <span className="absolute -left-5">•</span>
          <span className="block text-center">Expertise in frontend and backend technologies</span>
        </li>
        <li className="relative">
          <span className="absolute -left-5">•</span>
          <span className="block text-center">UI/UX enthusiast and pixel-perfect designer</span>
        </li>
        <li className="relative">
          <span className="absolute -left-5">•</span>
          <span className="block text-center"><span className="text-blue-400">Open source</span> contributor and lifelong learner</span>
        </li>
      </ul>
    </section>
  );
} 