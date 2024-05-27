// app/(routes)/projects/page.tsx

import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="bg-black text-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Your Projects</h1>
        <p className="text-lg mb-4">
          Welcome to the Projects section of JointJot. This is where you'll find all your saved projects, neatly organized and easily accessible. Whether you're working on personal projects or collaborating with your team, JointJot ensures you have everything you need in one place.
        </p>
        <p className="text-lg mb-4">
          In this space, you can create new projects, view existing ones, and manage your tasks effectively. JointJot is designed to help you stay organized and productive, allowing you to focus on what matters most – bringing your ideas to life.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Managing Your Projects</h2>
        <ul className="list-disc list-inside mb-4">
          <li>View all your saved projects at a glance.</li>
          <li>Access detailed information and notes for each project.</li>
          <li>Collaborate with team members seamlessly.</li>
          <li>Track progress and deadlines effortlessly.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8 mb-4">Creating a New Project</h2>
        <p className="text-lg mb-4">
          Ready to start something new? Click on the "Create Project" button to begin a new journey. Enter the project details, add relevant notes, and invite your team members to collaborate. JointJot makes it simple and straightforward to get your projects off the ground.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Stay Organized</h2>
        <p className="text-lg mb-4">
          With JointJot, you can categorize your projects, set priorities, and ensure that nothing falls through the cracks. Our intuitive interface and powerful features are designed to help you stay on top of your workload and achieve your goals.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4">Get Started</h2>
        <p className="text-lg mb-4">
          Dive into your projects and see how JointJot can transform the way you work. Whether you're managing a solo project or working with a large team, we're here to support you every step of the way. Let's make great things happen together!
        </p>
      </div>
    </div>
  );
};

export default ProjectsPage;
