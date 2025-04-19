import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img className="rounded-lg shadow-lg" src="https://via.placeholder.com/300x200?text=My+Photo+1" alt="Gallery Image 1" />
          <img className="rounded-lg shadow-lg" src="https://via.placeholder.com/300x200?text=My+Photo+2" alt="Gallery Image 2" />
          <img className="rounded-lg shadow-lg" src="https://via.placeholder.com/300x200?text=My+Project" alt="Gallery Image 3" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
