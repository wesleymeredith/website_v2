// pages/projects/VailContent.tsx
import React from 'react';
import type { GetStaticProps } from 'next';
import { Github, Play, FileText } from 'lucide-react';
import { projects, Project } from '../../data/projects';

// ------------- Reusable links (null-safe) -------------
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
          href="/notebooks/letusski.html"
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

// ------------- Main content (null-safe) -------------
const VailContent: React.FC<{ project?: Project | null }> = ({ project }) => {
  return (
    <>
      {/* Project Links */}
      <ProjectLinks project={project} />

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Introduction</h2>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            If you've ever tried to book a ski trip recently, you've probably noticed something: many of your favorite mountains are now owned by the same company. Vail Resorts has been on an acquisition spree, buying up independent ski areas across the country and bundling them into their Epic Pass ecosystem, 
            and if you are unlucky enough to miss the December deadline for buying their Epic pass, visitors would have to pay anywhere
            from $86 to over $300 per person during peak times. How outrageous!
          </p>
          <p className="mb-6">
            But here's the question that keeps local residents up at night: <strong>What happens to housing costs and wages when Vail comes to town?</strong>
          </p>
          <p className="mb-6">
            As an data scientist, I knew this was the perfect opportunity to apply causal inference methods to a real-world policy question. This 
            is my first experience using causal inference to estimate the impact of an event, so we will begin with a foundational model: difference-in-differences.
            Ski towns are already some of the most expensive places to live in America, and any additional price pressure could push out the very workers who keep these communities running,
            so let's investigate.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Why Traditional Analysis Falls Short</h2>
        <div className="prose prose-lg mb-12">
          <p className="text-gray-800 leading-relaxed mb-6">
            You might think we could just compare home prices before and after Vail's acquisitions. But that would be misleading for several reasons:
          </p>
          <ul className="mb-6">
            <li><strong>National trends:</strong> Housing prices have been rising everywhere, not just in Vail towns</li>
            <li><strong>Selection bias:</strong> Vail doesn't randomly choose resorts, they target successful, growing markets</li>
            <li><strong>Timing effects:</strong> Many acquisitions happened during the post-2010 housing recovery</li>
          </ul>
          <p className="mb-6">
            What we need is a way to isolate Vail's causal impact from these confounding factors. Which is why we are going to be using difference-in-differences.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">The Difference-in-Differences Strategy</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            Difference-in-differences (DiD) is like running a controlled experiment when randomization isn't possible. The core idea is this:
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
            <p className="text-blue-900 mb-0">
              <strong>The DiD Logic:</strong> Compare the change in outcomes for treated towns (Vail acquisitions) to the change in similar untreated towns (independent resorts) over the same time period. The difference between these differences gives us the causal effect.
            </p>
          </div>
          <p className="mb-6">
            This approach controls for any factors that affect all ski towns equally (like national housing trends) and any time-invariant differences between towns (like natural amenities). However, in order to run a DiD experiment, 
            the treated and control groups must exhibit <strong>parallel pre-treatment trends</strong>, meaning that before the treatment occurs, 
            the outcome trajectories of both groups move in a similar fashion. If this assumption is violated, the estimated treatment 
            effect may be biased.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Building the Perfect Control Group</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The success of any DiD analysis hinges on finding good control units. I made several decisions here:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Decision 1: Focus on Post-2011 Acquisitions</h3>
          <p className="mb-6">
            I excluded earlier acquisitions to avoid confounding from the 2008 financial crisis. This left me with 7 major US acquisitions from 2012-2018, including Park City (2014), Stowe (2017), and Crested Butte (2018).
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Decision 2: Exclude Competing Consolidators</h3>
          <p className="mb-6">
            Here's where my ski knowledge came in clutch. I couldn't use other major resort chains as controls because they might be experiencing similar consolidation effects. So I excluded all Alterra-owned resorts and major Ikon Pass partners, focusing on 35 truly independent ski towns.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Decision 3: Statistical Matching</h3>
          <p className="mb-6">
            For each Vail acquisition, I used statistical distance-based matching to find the 5 most similar independent resorts based on pre-treatment characteristics:
          </p>
          <ul className="mb-6">
            <li>Population size</li>
            <li>Median home values</li>
            <li>Median household income</li>
            <li>Unemployment rate</li>
            <li>Homeownership rate</li>
          </ul>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Data and Methodology</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            I pulled county-level data from the American Community Survey (ACS) for 2011-2023, giving me a 13-year panel dataset. 
            The Census Bureau's API made this very straightforward, though I had to be careful about rate limiting and data quality checks.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">The Model</h3>
          <div className="bg-gray-50 p-6 rounded-lg font-mono text-sm mb-4">
            Y<sub>it</sub> = α + β₁·Treated<sub>i</sub> + β₂·Post<sub>t</sub> + β₃·(Treated<sub>i</sub> × Post<sub>t</sub>) + γ<sub>i</sub> + δ<sub>t</sub> + ε<sub>it</sub>
          </div>
          <p className="mb-6">
            Where β₃ is our coefficient of interest, which is the causal effect of Vail acquisition. The γ<sub>i</sub> and δ<sub>t</sub> terms are town and year fixed effects.
            I used log transformations for dollar-denominated variables, which allowed me to view results as percentage changes. There were also robust standard errors, 
            which helps ensure that the inference on coefficients is reliable even if the variance of errors is not constant across observations.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Implementation</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The entire analysis is implemented in Python, using libraries such as pandas, statsmodels, scikit-learn, and matplotlib.
            The analysis pipeline includes data collection via the Census API with error handling and rate limiting, 
            a matching algorithm using standardized Euclidean distances, and visualizations to assess parallel trends assumptions.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Results</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            The results reveal a picture of Vail's impact. Housing values show mixed effects across towns, employment generally trends positive alongside tourism activity, 
            population growth appears moderate in some markets, and income effects vary by location.
          </p>
          <p className="mb-6">
            <em>Note: Specific numerical results are being finalized and will be updated in the full analysis.</em>
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Challenges and Limitations</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This is an empirical study, so it has limitations:
          </p>
          <ul className="mb-6">
            <li><strong>Treatment timing:</strong> Acquisitions happened over several years, creating staggered treatment timing</li>
            <li><strong>Spillover effects:</strong> Neighboring communities might be indirectly affected</li>
            <li><strong>Sample size:</strong> Limited number of major acquisitions constrains statistical power</li>
          </ul>
          <p className="mb-6">
            Despite these limitations, the DiD framework provides our best shot at isolating causal effects from observational data.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Implications and Next Steps</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This analysis demonstrates how causal inference methods can inform policy. The findings have some important implications:
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">For Policymakers</h3>
          <p className="mb-6">
            Local governments should consider the potential housing market effects when evaluating resort development proposals. Proactive affordable housing policies may be necessary to preserve community character.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">For Researchers</h3>
          <p className="mb-6">
            Future work could extend this analysis using synthetic control methods, event study approaches, or other techniques for analyzing treatment effects.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">For Investors</h3>
          <p className="mb-6">
            Understanding consolidation effects can inform real estate investment strategies in for these ski towns.
            Vail's consolidation story is far from over, and this framework could be applied to study other tourism industry mergers and acquisitions.
          </p>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Conclusion</h2>
        <div className="prose prose-lg max-w-none">
          <p className="mb-6">
            This project started as curiosity I had about Vail and their aggressive acquisition strategy in the ski industry, and it became a deep dive into causal inference methodology. 
            By choosing similar treatment and control groups, working with panel data, and using difference-in-differences analysis, we can better understand what changes are truly caused by Vail's acquisitions.
          </p>
          <p className="mb-6">
            The results suggest that Vail's impact on local communities is significant, and it is not the simple story of uniform price increases that people 
            might expect, nor the benefits that others might claim.
          </p>
          <p className="mb-6">
            Ultimately, this project demonstrates how causal inference can be applied to a market impact question. The DiD framework offers a powerful approach to extracting insights from observational data.
          </p>
        </div>
      </div>
    </>
  );
};

// ------------- Page wrapper + SSG data -------------
type PageProps = { project: Project | null };

// If `Project` doesn’t include `id`, widen it locally
type MaybeId = Project & { id?: string };

const TARGET_ID = 'vail-causal';

export default function VailPage({ project }: PageProps) {
  return <VailContent project={project} />;
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const list = (projects ?? []) as MaybeId[];
  const project = list.find(p => p.id === TARGET_ID) ?? null;

  if (!project) {
    return { notFound: true };
  }

  return { props: { project } };
};
