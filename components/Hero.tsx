/**
 * Hero Section Component
 * 
 * This component displays the main introduction section at the top of the portfolio.
 * It includes your name, title, current role, and a brief description.
 * 
 * Features:
 * - Clean, minimal design
 * - Responsive layout that works on all devices
 * - Optional avatar image support
 * 
 * To customize:
 * - Update the profile data in data/profile.ts
 * - Add/remove the avatar by uncommenting the avatar line in profile.ts
 * - Modify the styling in the className attributes
 */

import React from 'react';
import { profile } from '../data/profile';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Main content container */}
        <div className="text-left">
          {/* Name - Large, bold heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {profile.name}
          </h1>

          {/* Title - Medium size, regular weight */}
          <h2 className="text-2xl text-zinc-700 mb-4">
            {profile.title}
          </h2>

          {/* Current Role Badge  */}
          <a 
            href="https://snappisites.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm mb-8 hover:bg-gray-50 hover:border-gray-300 transition-colors duration-200 cursor-pointer"
          >
            {/* Optional badge icon */}
            {profile.currentRole.badge && (
              <div className="w-3 h-3 bg-accent-500 rounded-sm mr-2 flex-shrink-0"></div>
            )}
            <span className="text-sm text-gray-600">
              {profile.currentRole.position} @ {profile.currentRole.company}
              {profile.currentRole.badge && ` • ${profile.currentRole.badge}`}
            </span>
          </a>

          {/* Avatar - Optional, centered above description */}
          {profile.avatar && (
            <div className="mb-8">
              <img
                src={profile.avatar}
                alt={`${profile.name} avatar`}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
          )}

          
          {/* About Me Section Title */}
          <h3 className="text-2xl font-bold mb-5 text-zinc-900 flex items-center">
            About me
          </h3>

          {/* Description paragraphs */}
          <div className="space-y-2 text-zinc-700 max-w-2xl">
            <li className="flex items-start"> 
            I graduated from North Carolina State University with a Master's in Computer Science.
            </li>
            <li className="flex items-start">
            I worked at Michelin as a Data Scientist Summer of 2024, primarily on market forecasting and creating AI-driven applications internally.
            </li>
            <li className="flex items-start">
            I enjoy music, cooking, soccer, and binge watching geography and construction videos on YouTube.
            </li>
            {/* {profile.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-md text-gray-600 leading-relaxed"
              >
                {paragraph}
              </p>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
