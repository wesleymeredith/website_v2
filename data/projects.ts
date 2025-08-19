/**
 * Projects Data Configuration
 * 
 * This file contains all the project information displayed in the projects section.
 * Each project has a title, description, tech stack, and optional links/images.
 * 
 * To add/remove projects:
 * 1. Add new project objects to the projects array below
 * 2. Remove projects by deleting their objects
 * 3. Reorder projects by changing their position in the array
 * 4. Save the file - changes appear automatically
 * 
 * To add images:
 * 1. Place your project images in public/images/projects/
 * 2. Reference them as "/images/projects/your-image.jpg"
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Optional: extended description for project detail pages
  techStack: string[];
  images?: string[]; // Optional: path to project image
  github?: string; // Optional: GitHub repository URL
  demo?: string; // Optional: Live demo URL to Loom
  notebook?: string; // Optional: Jupyter notebook or analysis link
  date: string; // Date when the project was completed
}

export const projects: Project[] = [
  {
    id: "vail-causal",
    title: "Analyzing Vail's Ski Resort Acquisitions with Causal Inference",
    description: "Applied difference-in-differences to assess socioeconmic impacts of Vail's expansion across North America.",
    longDescription: "Here I collected and processed data for 7-vail acquired and 35 control ski towns via Census API, and used propensity score matching on demongraphies.",
    techStack: ["Python", "Causal Inference"],
    images: ["/images/projects/ski-pic.png"],
    notebook: "/notebooks/vail_causal",
    date: "2025"
  },
  {
    id: "stock-news-sentiment-analysis",
    title: "Stock News Sentiment Analysis Tool",
    description: "Developed an NLP-powered Flask web application utilizing BERT, PyTorch, and NLTK to analyze sentiment in financial news articles",
    longDescription: "This project involved building a comprehensive sentiment analysis tool specifically designed for financial news. The application integrates with the News.org API to retrieve relevant stock-related articles and performs sentiment analysis using BERT (Bidirectional Encoder Representations from Transformers) and PyTorch. The system generates structured insights for users, helping them assess market trends and make data-driven investment decisions. The project demonstrates proficiency in natural language processing for sentiment analysis and showcases the ability to build practical web applications that solve real-world problems.",
    techStack: ["Python", "Flask", "BERT", "PyTorch", "NLTK", "Natural Language Processing"],
    images: ["/images/projects/sentiment-analysis.png", "/images/projects/senti1.png", "/images/projects/senti2.png"],
    github: "https://github.com/wesleymeredith/Financial-News-Sentiment-Analysis",
    //demo: "https://stock-sentiment-demo.com",
    notebook: "/notebooks/letusski.html",
    date: "2025"
  },
  {
    id: "housing-price-prediction",
    title: "Housing Price Prediction Challenge",
    description: "Secured a top 12% ranking on Kaggle's housing price prediction challenge by applying machine learning algorithms, feature engineering, and hyperparameter tuning techniques.",
    longDescription: "This project involved comprehensive exploratory data analysis (EDA) of the Ames Housing dataset to gain insights into key patterns and trends. I implemented and optimized multiple machine learning algorithms including decision trees, random forests, XGBoost, and artificial neural networks (ANNs). Through feature engineering and hyperparameter tuning using scikit-learn grid search, I enhanced prediction accuracy by 15%. The project secured a top 12% ranking among 24,000 participants on Kaggle, demonstrating strong machine learning fundamentals and competitive data science skills.",
    techStack: ["Python", "Neural Networks","XGBoost", "Machine Learning"],
    images: ["/images/projects/StockNewsCover.png"],
    github: "https://github.com/wesleymeredith/Ames-Housing-Project",
    //demo: "<>"
    //notebook: "https://www.kaggle.com/wesleymeredith/housing-price-prediction",
    date: "2023"
  },
  {
    id: "spotify-wrapped-clone",
    title: "Spotify 'Wrapped' Clone",
    description: "Developed and deployed a Python-based Flask web application integrated with the Spotify API, enabling users to visualize personalized Spotify 'wrapped' data including top artists and tracks.",
    longDescription: "Built a full-stack web application that replicates Spotify's popular 'Wrapped' feature. The application integrates with the Spotify Web API using OAuth2 authentication for secure user login. Users can visualize their personalized music data including top artists, tracks, and listening patterns. The project demonstrates proficiency in full-stack development, API integration, and user authentication. The application features a responsive design and provides insights into users' music listening habits, enhancing the overall music discovery experience.",
    techStack: ["Python", "Flask", "Spotify API", "OAuth2", "Web Development", "Full-Stack"],
    images: ["/images/projects/wrappedCover.png","/images/projects/landing_page_1.png","/images/projects/second_page_2.png","/images/projects/third_page_3.png"],
    github: "https://github.com/wesleymeredith/Spotify-wrapped-clone",
    //demo: "https://spotify-wrapped-clone.com",
    //notebook: "<>"
    date: "2024"
  },
  {
    id: "drowsiness-detector",
    title: "Drowsiness Detector",
    description: "Developed a real-time, webcam-based drowsiness detection system using computer vision techniques with a focus on enhancing personal productivity.",
    longDescription: "This computer vision project addresses the growing issue of video call fatigue by implementing a real-time drowsiness detection system. The application uses OpenCV for webcam integration and dlib for facial landmark detection. I implemented a sophisticated EAR (Eye Aspect Ratio) threshold algorithm for accurate detection of drowsiness, allowing for personalized alerts tailored to individual drowsy patterns and preferences. The system can be particularly useful for remote workers, students, and anyone spending extended periods in video meetings, helping to maintain alertness and productivity.",
    techStack: ["Python", "OpenCV", "dlib", "Computer Vision", "Facial Recognition"],
    images: ["/images/projects/drowsyCover.png", "/images/projects/eye_open.png", "/images/projects/eye_close.png"],
    github: "https://github.com/wesleymeredith/Drowsiness-Detection",
    //demo: "https://drowsiness-detector-demo.com",
    //notebook: "<>"
    date: "2022"
  }
];
