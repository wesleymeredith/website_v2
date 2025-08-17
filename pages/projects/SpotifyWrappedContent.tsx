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


const SpotifyWrappedContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            Music has always been an important part of my life, and Spotify’s annual 
            “Wrapped” feature has become a cultural moment that I look forward too every winter. I did not want to 
            wait an entire year for it again, so I decided to recreate that same 
            personalized experience in a project of my own, so I built a 
            <strong> Spotify Wrapped Clone</strong> as a web application. 
          </p>
          <p className="mb-6">
            This project allowed me to combine my skills in backend development, 
            authentication flows, and API integration, while also focusing on designing 
            a user-friendly web app that delivers simple and personalized insights. 
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">How It Works</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            The application uses the<a href="https://developer.spotify.com/documentation/web-api/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline hover:bg-green-100 px-1 rounded">Spotify Web API</a> 
            and implements <strong>OAuth 2.0</strong> authentication so users can securely log in with their Spotify accounts. 
            Once authenticated, the app makes API requests to retrieve data about a user’s top artists and top songs. Which in the Spotify API
            they have three time frames parameters, so that gives us three options: short term, medium term, and long term.
          </p>
          <p className="mb-6">
            The data is then processed and displayed in a clean, interactive dashboard 
            that mirrors the experience of Spotify Wrapped. 
          </p>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            I developed the project using <strong>Python</strong> and <strong>Flask </strong>  
            for the backend, managing user sessions and handling the OAuth flow. The Spotify API endpoints 
            were used to fetch user-specific data, which I then structured into JSON responses 
            and rendered dynamically on the frontend. 
          </p>
          <p className="mb-6">
            A major challenge was implementing the OAuth 2.0 authorization code flow correctly, 
            ensuring tokens were exchanged securely and refreshed when expired. This required 
            careful handling of redirects, callback URIs, and user permissions.
            Beyond the backend work, I focused on creating a simple experience on the frontend  
            similar to the real Spotify Wrapped. I even messaged Spotify to see if I could use their font, 
            but they respectfully declined.  
          </p>
          <p className="mb-6">
            In the images below you can see the initial login page
            which will redirect to an Oauth 2.0 authentication flow, and once you are logged in, you
            have three buttons to display your top artists generated for three time periods.
          </p>
        </div>
      </div>
      {/* Add Image 1 with the login box*/}
      {project.images && (
        <div className="mb-12">
          <img
            src={project.images[1]}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {/* Add Image 2 */}
      {project.images && (
        <div className="mb-12">
          <img
            src={project.images[2]}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {/* Add Image 3 */}
      {project.images && (
        <div className="mb-12">
          <img
            src={project.images[3]}
            alt={project.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {/* Key Takeaways */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Key Takeaways</h2>
        <div className="prose prose-lg mb-12">
          <ul className="mb-6 list-disc list-inside">
            <li>Gained experience with OAuth 2.0 and secure authentication flows</li>
            <li>Learned how to integrate third-party APIs into a Flask application</li>
            <li>Improved skills in structuring API responses and presenting personalized data</li>
            <li>Strengthened my ability to design and deploy interactive web applications</li>
          </ul>
          <p className="mb-6">
            This project not only helped me improve technically, but also 
            gave me insight into how to create applications that provide 
            real value to users through personalization. 
          </p>
        </div>
      </div>
      {/* Future Plans */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Future Plans</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            When I come back to this
            project, I will add more unique API functions to display user data, maybe get recommendations,
            and then most likely add some Framer animations to really make it look like the real thing.
          </p>
        </div>
      </div>
    </>
  );
};

export default SpotifyWrappedContent;