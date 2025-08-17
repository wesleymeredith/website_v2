// pages/projects/HousingPriceContent.tsx
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
const HousingPriceContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This study focused on predicting housing prices using the Ames Housing dataset, comparing four different machine learning approaches:
            Decision Tree, Random Forest, XGBoost, and Artificial Neural Networks (ANN). The project particularly investigated whether feature engineering
            or hyperparameter tuning had a greater impact on model performance.
          </p>
        </div>
      </div>

      {/* Dataset */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Dataset</h2>
        <div className="prose prose-lg mb-12">
          <ul className="list-disc list-inside mb-6">
            <li>Training Set: 1,460 samples</li>
            <li>Testing Set: 1,459 samples</li>
            <li>Features: 79 property attributes (both numerical and categorical)</li>
            <li>Target Variable: Sale Price</li>
          </ul>
        </div>
      </div>

      {/* Methodology */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Methodology</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Data Preprocessing</h4>
          <p className="mb-6">
            Our preprocessing pipeline began with thorough missing value treatment. For categorical data, we imputed missing values with ‘None’,
            while numerical missing values were filled using mean or median values as appropriate. We then applied label encoding to convert
            categorical variables into a format suitable for our models.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Feature Engineering</h4>
          <p className="mb-6">
            The feature engineering process involved creating several new meaningful features. We developed polynomial features for key metrics
            like square footage and room numbers, created interaction features combining variables like age and size, and generated ratio features
            such as living area to lot size ratio. These efforts significantly improved our model’s predictive power, raising the average Mutual
            Information score from 0.126 to 0.162.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Implementation</h4>
          <p className="mb-6">
            We implemented a comprehensive evaluation framework testing each model against various preprocessing techniques. Starting with baseline
            implementations, we explored PCA dimensionality reduction, feature selection, outlier removal, feature engineering, and hyperparameter
            tuning to understand their relative impact on model performance.
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Results</h2>
        <div className="prose prose-lg mb-12">
          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Performance Comparison</h4>
          <p className="mb-6">Best RMSE scores for each model after feature engineering:</p>
          <ul className="list-disc list-inside mb-6">
            <li>Decision Tree: 32,542</li>
            <li>Random Forest: 27,590</li>
            <li>XGBoost: 26,598</li>
            <li>ANN: 21,776</li>
          </ul>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Key Insights</h4>
          <p className="mb-6">
            The feature engineering process proved to be the most impactful factor in improving model performance, reducing RMSE by approximately
            15–30% across all models while enhancing interpretability. PCA, contrary to expectations, showed poor improvements across all models,
            largely because PCA conflicts with the non-linear relationships in the housing dataset.
          </p>
          <p className="mb-6">
            Our ANN implementation saw significant gains from architectural optimization. The three-layer design (128/64/32 neurons) with L2
            Regularization and ReLU activations proved most effective. Interestingly, hyperparameter tuning showed minimal impact compared to
            feature engineering, suggesting that architecture and data quality mattered more than parameter optimization here.
          </p>
        </div>
      </div>

      {/* Final Thoughts / Future Work */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Final Thoughts / Future Work</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This was my first end-to-end data science project. The biggest takeaway was how crucial data cleaning and transformation are.
            If I revisit this project, I’ll experiment with ensembling approaches and put more emphasis on EDA.
          </p>
          <br />
          <p className="mb-6">
            <em>This project was completed in collaboration with Kaijun Zhang and Yiran Zhu at North Carolina State University.</em>
          </p>
        </div>
      </div>
    </>
  );
};

// ---------- Page wrapper + SSG data ----------
type PageProps = { project: Project | null };

// If `Project` doesn’t include `id`, widen it locally
type MaybeId = Project & { id?: string };

// ⚠️ Set to your actual id from data/projects.ts
const TARGET_ID = 'housing-price-prediction';

export default function HousingPricePage({ project }: PageProps) {
  return <HousingPriceContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find((p) => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
