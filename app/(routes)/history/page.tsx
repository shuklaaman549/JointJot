// app/(routes)/history/page.tsx

import React from 'react';

const HistoryPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our History</h1>
        <p className="text-lg mb-4">
          JointJot was born out of a need for better project management and collaboration tools. Our journey started in [Year], when a group of passionate developers and project managers came together to create a platform that would revolutionize the way people work together.
        </p>
        <p className="text-lg mb-4">
          Over the years, we have grown and evolved, continuously adding new features and improving our platform based on user feedback. Our commitment to excellence and innovation has driven us to become a trusted name in project management and collaboration.
        </p>
        <p className="text-lg mb-4">
          We believe in the power of teamwork and strive to make it easier for people to achieve their goals. From small startups to large enterprises, JointJot has been helping teams of all sizes work more efficiently and effectively.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Milestones</h2>
        <ul className="list-disc list-inside">
          <li className="text-lg mb-2">[Year] - Launched the first version of JointJot</li>
          <li className="text-lg mb-2">[Year] - Introduced real-time collaboration features</li>
          <li className="text-lg mb-2">[Year] - Expanded our platform to support larger teams</li>
          <li className="text-lg mb-2">[Year] - Reached 10,000 active users</li>
          <li className="text-lg mb-2">[Year] - Launched mobile app</li>
        </ul>
        <p className="text-lg mb-4">
          As we look to the future, we are excited to continue growing and evolving. We are committed to providing our users with the best tools and features to help them succeed. Thank you for being a part of our journey.
        </p>
      </div>
    </div>
  );
};

export default HistoryPage;
