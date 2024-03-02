import { NextResponse } from "next/server";

const data = [
    {
      "id": 1,
      "title": "Introduction to JavaScript",
      "description": "Learn the basics of JavaScript programming language."
    },
    {
      "id": 2,
      "title": "React Fundamentals",
      "description": "Explore the fundamentals of React.js library for building user interfaces."
    },
    {
      "id": 3,
      "title": "Node.js Essentials",
      "description": "Master the essentials of Node.js for server-side JavaScript development."
    },
    {
      "id": 4,
      "title": "Python Programming Basics",
      "description": "Get started with Python programming language basics and syntax."
    },
    {
      "id": 5,
      "title": "Data Structures and Algorithms",
      "description": "Study fundamental data structures and algorithms for problem-solving."
    },
    {
      "id": 6,
      "title": "HTML5 and CSS3",
      "description": "Learn the latest standards of HTML5 and CSS3 for web development."
    },
    {
      "id": 7,
      "title": "Vue.js Essentials",
      "description": "Discover the essential concepts of Vue.js framework for building reactive web applications."
    },
    {
      "id": 8,
      "title": "Database Design and Management",
      "description": "Learn the principles and techniques of designing and managing databases."
    },
    {
      "id": 9,
      "title": "Software Engineering Practices",
      "description": "Explore best practices and methodologies in software engineering."
    },
    {
      "id": 10,
      "title": "Responsive Web Design",
      "description": "Master techniques for creating responsive and mobile-friendly web designs."
    }
  ]
  
export function GET() {

    return NextResponse.json(data)
}
