// pages/projects/StockNewsContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';

import { projects, Project } from '../../data/projects';

// ---------- Reusable links (null-safe) ----------
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

// ---------- Main content (null-safe) ----------
const StockNewsContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This project involved the development of a Flask web application designed to analyze the sentiment of financial news
            articles related to specific stock tickers. Instead of traditional rule-based methods, this application uses BERT
            (Bidirectional Encoder Representations from Transformers) for sentiment analysis, enabling it to better understand the
            context and nuances in news headlines and summaries.
          </p>
          <p className="mb-6">
            The application pulls real-time news data using the News.org API, ensuring that the articles analyzed are relevant to the
            user’s stock ticker of interest. To prepare the text for BERT input, preprocessing steps like case normalization,
            tokenization, and punctuation handling were applied.
          </p>
          <p className="mb-6">
            BERT is a powerful transformer for this problem, so it can offer deeper insights into the sentiment behind news articles,
            whether positive, negative, or neutral, even when the sentiment is subtle or implied through context.
          </p>
          <p className="mb-6">
            The results are displayed in an interactive table format, making it easy for users to browse sentiment trends and relate
            them to potential stock market movements. This clean and intuitive interface supports smarter, data-driven investment
            decisions.
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
    </>
  );
};

// ---------- Page wrapper + SSG data ----------
type PageProps = { project: Project | null };

// widen locally in case `id` isn’t in your Project type yet
type MaybeId = Project & { id?: string };

const TARGET_ID = 'stock-news-sentiment-analysis';

export default function StockNewsPage({ project }: PageProps) {
  return <StockNewsContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find((p) => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
