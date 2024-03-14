

import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg text-center mb-8">Welcome to our website!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:mx-16 lg:px-16">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Notifications</h2>
            <p>Stay updated with important notifications:</p>
            <ul className="list-disc pl-6">
              <li>Upcoming exams</li>
              <li>Admit card release</li>
              <li>Exam results</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Form Filling Details</h2>
            <p>Find all the details about filling exam forms:</p>
            <ul className="list-disc pl-6">
              <li>Application deadlines</li>
              <li>Required documents</li>
              <li>Procedure for form submission</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Exam Procedure</h2>
            <p>Learn how to proceed for the exams:</p>
            <ul className="list-disc pl-6">
              <li>Exam schedule</li>
              <li>Guidelines for appearing in exams</li>
              <li>Instructions for exam day</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-2">Notes and Quizzes</h2>
            <p>Prepare for your exams using our study materials:</p>
            <ul className="list-disc pl-6">
              <li>Access study notes</li>
              <li>Take quizzes to assess your knowledge</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:px-10 md:px-24 mx-2 mt-6">
        <h2 className="text-2xl font-bold mb-2  text-center">
          About Our Website
        </h2>
        <p>
          Welcome to our educational platform! Our website is dedicated to
          helping students prepare for their exams effectively. Whether you're
          looking for important notifications about upcoming exams, need
          guidance on filling out exam forms, or want to understand the
          procedures for exam day, we've got you covered.
        </p>
        <p>
          In addition to providing essential information, we offer study
          materials such as notes and quizzes to aid your preparation process.
          With our user-friendly interface and comprehensive resources, we
          strive to make your exam preparation experience seamless and
          successful.
        </p>
        <p>
          At our educational platform, we believe that learning should be
          engaging and interactive. That's why we offer dynamic study materials
          that cater to different learning styles and preferences.
        </p>
        <p>
          Our platform is not just about memorizing facts; it's about
          understanding concepts deeply and applying knowledge effectively. We
          provide practical exercises and real-world examples to reinforce
          learning and foster critical thinking skills.
        </p>
        <p>
          With our comprehensive resources and personalized study plans, you can
          tailor your learning experience to suit your individual goals and
          aspirations.
        </p>
        <p>
          Whether you're studying for standardized tests, entrance exams, or
          classroom assessments, our platform equips you with the tools and
          confidence you need to excel.
        </p>
        <p>
          Join our vibrant community of learners today and embark on a journey
          of discovery, growth, and academic achievement!
        </p>
      </div>
    </div>
  );
};

export default About;
