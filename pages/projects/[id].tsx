import React from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft, ExternalLink, Github, Play, FileText } from 'lucide-react';
import { projects } from '../../data/projects';
import Layout from '../../components/Layout';
import { profile } from '../../data/profile';

// Import your project content components
import StockNewsContent from './StockNewsContent';
import HousingPriceContent from './HousingPriceContent';
import SpotifyWrappedContent from './SpotifyWrappedContent';
import DrowsinessDetectorContent from './DrowsinessDetectorContent';
import VailContent from './VailContent';



const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the project by ID
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <Layout title="Project Not Found" description="The requested project could not be found">
        <div className="pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
              <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
              <button
                onClick={() => router.push('/')}
                className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Projects
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

 // Function to render project-specific content component
 const renderProjectContent = () => {
  switch (project.id) {
    case 'vail-causal':
      return <VailContent project={project} />;
    case 'stock-news-sentiment-analysis':
      return <StockNewsContent project={project} />;
    case 'housing-price-prediction':
      return <HousingPriceContent project={project} />;
    case 'spotify-wrapped-clone':
      return <SpotifyWrappedContent project={project} />;
    case 'drowsiness-detector':
      return <DrowsinessDetectorContent project={project} />;  
    default:
      // fallback: show default introduction
      return (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Introduction</h2>
          <div className="prose prose-lg max-w-none">{project.longDescription}</div>
        </div>
      );
  }
};

return (
  <Layout title={`${project.title} - Project`} description={project.description}>
    <div className="pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{project.title}</h1>
          <p className="text-lg text-gray-600 mb-6">
            {profile.name} • {project.date}
          </p>
        </div>

        {/* Project Main Image */}
        {project.images && (
          <div className="mb-12">
            <img src={project.images[0]} alt={project.title} className="w-full rounded-lg shadow-lg" />
          </div>
        )}

        {/* Project Links
        <div className="space-y-4 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Links</h2>
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
            )}*/}
            
            {/* {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <Play size={20} className="mr-2" />
                Live Demo
              </a>
            )} */}
            {/* {project.notebook && (
              <a
                href={project.notebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                <FileText size={20} className="mr-2" />
                View Notebook
              </a>
            )} */}

        {/* Render project-specific content here */}
        {renderProjectContent()}

        {/* Back Button */}
        <div className="pt-8 border-gray-200">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Projects
          </button>
        </div>
      </div>
    </div>
  </Layout>
);
};

export default ProjectPage;
