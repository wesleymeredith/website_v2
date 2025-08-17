/**
 * Contact Data Configuration
 * 
 * This file contains all the contact information and social media links.
 * Update the values below to customize your contact section.
 * 
 * To update:
 * 1. Change the email, phone, and location values
 * 2. Add/remove social media platforms
 * 3. Update the URLs to point to your actual profiles
 * 4. Save the file - changes appear automatically
 */

export interface ContactInfo {
  email: string;
  phone?: string; // Optional: remove if you don't want to display phone
  location?: string; // Optional: remove if you don't want to display location
  linkedin: string;
  github: string;
  kaggle?: string; // Optional: remove if you don't have Kaggle
  portfolio?: string; // Optional: remove if you don't have a separate portfolio
}

export const contactInfo: ContactInfo = {
  email: "wmeredith777@gmail.com",
  phone: "704-619-2058",
  location: "Raleigh, NC",
  linkedin: "https://linkedin.com/in/wesleymeredith",
  github: "https://github.com/wesleymeredith",
  // kaggle: "https://kaggle.com/wesleymeredith", // Uncomment if you have Kaggle
  // portfolio: "https://wesleymeredith.github.io" // Uncomment if you have a separate portfolio
};

// Social media icons mapping (these will be used to display appropriate icons)
export const socialIcons = {
  linkedin: "Linkedin",
  github: "Github",
  kaggle: "Database", // Using Database icon for Kaggle
  portfolio: "Globe"
};
