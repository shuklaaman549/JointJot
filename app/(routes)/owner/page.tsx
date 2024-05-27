// app/(routes)/owner/page.tsx

import React from 'react';

const OwnerPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Owner</h1>
        <div className="flex flex-col items-center">
          <img
            src="/Ammyyy.jpg" // Replace with actual path to profile picture
            alt="Aman Shukla"
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-2xl font-bold">Aman Shukla</h2>
          <p className="text-lg mb-4">Email: shuklaaman549@gmail.com</p>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.linkedin.com/in/shuklaaman549" target="_blank" className="text-blue-500 hover:text-blue-400">
              LinkedIn
            </a>
            <a href="https://github.com/shuklaaman549" target="_blank" className="text-blue-500 hover:text-blue-400">
              GitHub
            </a>
            <a href="https://twitter.com/shuklaaman549" target="_blank" className="text-blue-500 hover:text-blue-400">
              Twitter
            </a>
            <a href="https://instagram.com/shuklaaman549" target="_blank" className="text-blue-500 hover:text-blue-400">
              Instagram
            </a>
          </div>
          <p className="text-lg mb-4">
            Aman Shukla is the visionary behind JointJot. With a passion for technology and a commitment to excellence, Aman has been instrumental in driving the growth and success of the platform. His leadership and expertise continue to inspire the JointJot team and community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OwnerPage;
