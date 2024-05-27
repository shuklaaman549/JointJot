// app/(routes)/about/page.tsx

import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About JointJot</h1>
        <p className="text-lg mb-4">
          Welcome to JointJot, your collaborative platform for seamless note-taking and team collaboration.
          Our mission is to empower individuals and teams to jot down ideas, share knowledge, and work together
          more effectively.
        </p>
        <p className="text-lg mb-4">
          At JointJot, we believe that great ideas can come from anywhere and anyone. Our platform is designed
          to provide a space where creativity can flourish, and collaboration is made easy.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Real-time collaborative note-taking</li>
          <li>Easy organization and categorization of notes</li>
          <li>Secure and private workspaces for your team</li>
          <li>Accessible from any device, anywhere</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Our Story</h2>
        <p className="text-lg mb-4">
          JointJot was born out of a need for better collaboration tools. We noticed that many teams struggled
          with disjointed systems and inefficient workflows. Our goal was to create a platform that bridges these
          gaps and enhances productivity.
        </p>
        <p className="text-lg mb-4">
          Since our inception, we have been dedicated to continuous improvement and listening to the feedback
          of our users. We strive to make JointJot the best it can be, and we are excited to have you as part of
          our journey.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Join Us</h2>
        <p className="text-lg mb-4">
          Whether you are a student, a professional, or part of a large organization, JointJot has something
          to offer you. Join us today and experience the future of collaborative note-taking.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
