/**
 * Profile Data Configuration
 * 
 * This file contains all the personal information displayed in the hero section.
 * Edit the values below to customize your portfolio without touching component code.
 * 
 * To update:
 * 1. Change the values in the profile object below
 * 2. Save the file
 * 3. The changes will automatically appear on your website
 */

export interface Profile {
  name: string;
  title: string;
  currentRole: {
    company: string;
    position: string;
    badge?: string;
  };
  description: string[];
  avatar?: string; // Optional: path to avatar image in public/images/
}

export const profile: Profile = {
  name: "Wesley Meredith",
  title: "Data Scientist",
  currentRole: {
    company: "Snappi Sites",
    position: "Freelance Engineer",
    badge: undefined // Optional: remove if not applicable
  },
  description: [
    "I graduated from North Carolina State University with a Master's in Computer Science.",
    "I worked at Michelin as a Data Scientist Summer of 2024, primarily on market forecasting and creating AI-driven applications internally.",
    "I enjoy music, cooking, soccer, and binge watching geography and construction videos on YouTube."
  ],
  // avatar: "/images/avatar.jpg" // Uncomment and add your avatar image
};

