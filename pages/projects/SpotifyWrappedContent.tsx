// pages/projects/SpotifyWrappedContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';

// ---------------- Reusable links (null-safe) ----------------
const ProjectLinks: React.FC<{ project?: Project | null }> = ({ project }) => (
  <div className="space-y-4 mb-12">
    <h2 className="text-3xl font-semibold tracking-tight mb-6">Project Links</h2>
    <div className="flex flex-wrap gap-4">
      {project?.github && (
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
      {project?.demo && (
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
      {project?.notebook && (
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

// ---------------- Main content (null-safe) ----------------
const SpotifyWrappedContent: React.FC<{ project?: Project | null }> = ({ project }) => {
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
            “Wrapped” feature has become a cultural moment that I look forward to every winter.
            I didn’t want to wait an entire year again, so I built a <strong>Spotify Wrapped Clone</strong>
            as a web application.
          </p>
          <p className="mb-6">
            This project let me combine backend development, authentication flows, and API integration,
            while focusing on a user-friendly web app that delivers simple, personalized insights.
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">How It Works</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            The application uses the
            <a
              href="https://developer.spotify.com/documentation/web-api/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:bg-green-100 px-1 rounded"
            >
              {' '}Spotify Web API
            </a>
            {' '}and implements <strong>OAuth 2.0</strong> so users can securely log in with their Spotify accounts.
            Once authenticated, the app requests a user’s top artists/songs. Spotify offers three time ranges, so
            users can view <em>short-term</em>, <em>medium-term</em>, or <em>long-term</em> stats.
          </p>
          <p className="mb-6">
            The data is then processed and displayed in a clean, interactive dashboard that mirrors the
            Spotify Wrapped experience.
          </p>
        </div>
      </div>

      {/* Technical Implementation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            I built the backend with <strong>Python</strong> and <strong>Flask</strong>, handling sessions and the OAuth flow.
            Spotify endpoints return user-specific data, which I structure into JSON and render on the frontend.
          </p>
          <p className="mb-6">
            The OAuth 2.0 authorization code flow required careful handling of redirects, callback URIs, scopes, and token refresh.
            On the UI side, I kept the experience simple and familiar—similar to Spotify Wrapped.
          </p>
          <p className="mb-6">
            After login, users can tap one of three buttons to see their top artists by time window.
          </p>
        </div>
      </div>

      {/* Images */}
      {project?.images?.[1] && (
        <div className="mb-12">
          <img
            src={project.images[1]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {project?.images?.[2] && (
        <div className="mb-12">
          <img
            src={project.images[2]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}
      {project?.images?.[3] && (
        <div className="mb-12">
          <img
            src={project.images[3]}
            alt={project.title ?? 'Project image'}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Key Takeaways */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Key Takeaways</h2>
        <div className="prose prose-lg mb-12">
          <ul className="mb-6 list-disc list-inside">
            <li>Hands-on with OAuth 2.0 and secure authentication flows</li>
            <li>Integrated a third-party API into a Flask application</li>
            <li>Structured API responses and presented personalized data</li>
            <li>Designed and deployed an interactive web experience</li>
          </ul>
          <p className="mb-6">
            This project sharpened both technical skills and the ability to craft apps that provide real value via personalization.
          </p>
        </div>
      </div>

      {/* Future Plans */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Future Plans</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            Next iteration: expand the set of Spotify features, add recommendations, and sprinkle in some Framer Motion animations
            to really capture the Wrapped vibe.
          </p>
        </div>
      </div>
    </>
  );
};

// ---------------- Page wrapper + SSG data ----------------
type PageProps = { project: Project | null };

// If `Project` doesn’t declare `id`, widen it locally
type MaybeId = Project & { id?: string };
const TARGET_ID = 'spotify-wrapped-clone';

export default function SpotifyWrappedPage({ project }: PageProps) {
  return <SpotifyWrappedContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find(p => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
