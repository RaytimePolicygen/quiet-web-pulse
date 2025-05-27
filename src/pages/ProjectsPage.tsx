
import React from 'react';

const ProjectsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of the first project and its key features.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of the second project and its key features.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A brief description of the third project and its key features.
              </p>
              <button className="text-blue-600 dark:text-blue-400 font-medium hover:underline">
                View Details
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in working with us on your next project?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
