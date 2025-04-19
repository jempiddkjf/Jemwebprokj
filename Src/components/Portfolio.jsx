import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 px-4 bg-gray-950">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Portfolio</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A website about my personal bio and school presentation using HTML/CSS.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p>A JavaScript-based quiz app I built for fun and learning.</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p>A sample ecommerce product page using responsive design.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
