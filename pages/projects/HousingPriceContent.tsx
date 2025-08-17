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



const HousingPriceContent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This study focused on predicting housing prices using the Ames Housing dataset, comparing four different machine learning approaches: Decision Tree, Random Forest, XGBoost, and Artificial Neural Networks (ANN). The project particularly investigated whether feature engineering or hyperparameter tuning had a greater impact on model performance.
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
            Our preprocessing pipeline began with thorough missing value treatment. For categorical data, we imputed missing values with ‘None’, while numerical missing values were filled using mean or median values as appropriate. We then applied label encoding to convert categorical variables into a format suitable for our models.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Feature Engineering</h4>
          <p className="mb-6">
            The feature engineering process involved creating several new meaningful features. We developed polynomial features for key metrics like square footage and room numbers, created interaction features combining variables like age and size, and generated ratio features such as living area to lot size ratio. These efforts significantly improved our model’s predictive power, raising the average Mutual Information score from 0.126 to 0.162.
          </p>

          <h4 className="mt-4 mb-1 font-semibold text-gray-800">Model Implementation</h4>
          <p className="mb-6">
            We implemented a comprehensive evaluation framework testing each model against various preprocessing techniques. Starting with baseline implementations, we explored PCA dimensionality reduction, feature selection, outlier removal, feature engineering, and hyperparameter tuning to understand their relative impact on model performance.
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
            The feature engineering process proved to be the most impactful factor in improving model performance, reducing RMSE by approximately 15-30% across all models while enhancing interpretability. 
            PCA, contrary to our expectations, showed poor improvements across all models. This was largely due because PCA conflicts with the non-linear relationships between the features in housing dataset.
          </p>
          <p className="mb-6">
            Our ANN implementation saw significant improvements through architectural optimization. The three-layer design (128/64/32 neurons) with L2 Regularization and ReLU activation functions proved most effective.
            Interestingly, hyperparameter tuning showed minimal impact compared to feature engineering, suggesting that model architecture and data quality were more crucial than parameter optimization for this particular problem.
          </p>
        </div>
      </div>

      {/* Final Thoughts / Future Work */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Final Thoughts / Future Work</h2>
        <div className="prose prose-lg mb-12">
          <p className="mb-6">
            This project was my first end-to-end data science project. There was a lot to uncover and learn from doing an entire project for the first time, like how important the cleaning and transformation of the data is.
            If I were to come back to this project in the future, I would integrate maybe some ensembling approaches and emphasize a lot more importance on the EDA.
          </p>
          <br></br>
          <p className="mb-6">
            <em>This project was completed in collaboration with Kaijun Zhang and Yiran Zhu at North Carolina State University.</em>
          </p>
        </div>
      </div>
    </>
  );
};

export default HousingPriceContent;
