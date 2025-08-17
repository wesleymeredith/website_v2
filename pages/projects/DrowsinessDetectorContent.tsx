import React from 'react';
import { Project } from '../../data/projects';
import { Github, Play, FileText } from 'lucide-react';

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="space-y-4 mb-12">
    <h2 className="text-3xl font-semibold tracking-tight mb-6">Project Links</h2>
    <div className="flex flex-wrap gap-4">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <Github size={20} className="mr-2" />
          View Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Play size={20} className="mr-2" />
          Live Demo
        </a>
      )}
      {project.notebook && (
        <a
          href={project.notebook}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
        >
          <FileText size={20} className="mr-2" />
          View Notebook
        </a>
      )}
    </div>
  </div>
);



const DrowsinessDetectorContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This project was inspired by personal experiences during the gap year between my undergraduate and graduate studies. While attending night classes in computer science after my full-time research job at a laboratory in Raleigh, NC, I sometimes struggled to stay awake during Zoom lectures. This led me to design a drowsiness detector that monitors eye activity using a webcam and alerts users with an audio cue when signs of drowsiness are detected.
          </p>
          <p className="mb-6">
            The system relies on the Eye Aspect Ratio (EAR), a metric detailed in<a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline hover:bg-green-100 px-1 rounded">this paper</a> 
            , to measure eye closure.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Setup & Installation</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">This project is implemented in Python and leverages the following libraries:</p>
          <ul className="list-disc list-inside mb-6">
            <li>OpenCV: For video processing and visualization.</li>
            <li>dlib: To detect facial landmarks.</li>
            <li>pyttsx3: To generate audio alerts.</li>
            <li>scipy: For EAR/Euclidean distance calculations.</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Methods</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            The program uses dlib to detect facial landmarks, focusing on the regions around the eyes. The Eye Aspect Ratio (EAR) is a scalar value that is calculated by determining ratio of Euclidean distances between specific eye landmarks. If the EAR drops below a predefined threshold for more than one second, the system detects drowsiness and issues an alert.
          When drowsiness is detected, the system
      fisplays a warning on the video feed and
      plays an audio alert using pyttsx3.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Code Overview</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">The main components of the implementation include:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Camera Setup: Captures live video feed from the webcam.</li>
            <li>Facial Detection: Detects facial landmarks using dlib.</li>
            <li>Eye Tracking: Continuously calculates the EAR for both eyes.</li>
            <li>Drowsiness Detection: Triggers alerts if the EAR remains below 0.3 for over one second.</li>
          </ul>
          <p className="mb-6">Here’s a simplified code snippet:</p>
          <pre className="bg-gray-100 rounded p-4 overflow-x-auto text-sm mb-6">
            {`# Detect EAR for left and right eyes  
left_EAR = Detect_Eye(leftEye)  
right_EAR = Detect_Eye(rightEye)  
avg_EAR = (left_EAR + right_EAR) / 2  
          
# Check for drowsiness  
if avg_EAR < EAR_THRESHOLD:  
    if time.time() - closed_eyes_start_time > DROWSINESS_THRESHOLD:  
        # Trigger alert  
        engine.say("Wake up!")  
        engine.runAndWait()`}
          </pre>
          <p className="mb-6">And it looks something like this:</p>
        </div>
      </section>

      {/* Images */}
      {project?.images && (
        <>
          <section className="mb-12">
            <img
              src={project.images[1]}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </section>
          <section className="mb-12">
            <img
              src={project.images[2]}
              alt={project.title}
              className="w-full rounded-lg shadow-lg"
            />
          </section>
        </>
      )}
    </>
  );
};

export default DrowsinessDetectorContent;
