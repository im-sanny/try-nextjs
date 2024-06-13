import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-24">
      {blogs.map((blog) => (
        <div key={blog.slug} className="border p-12">
          <h3>{blog.title}</h3>
          <h3>{blog.description}</h3>
          <button className="bg-white p-3 rounded-md">
            <Link href={`/blogs/${blog.slug}`}>View details</Link>
          </button>
        </div>
      ))}
    </div>
  );
};

const blogs = [
  {
    slug: "introduction-to-javascript",
    title: "Introduction to JavaScript",
    description:
      "Learn the basics of JavaScript, the most popular programming language for web development.",
  },
  {
    slug: "react-hooks-guide",
    title: "A Comprehensive Guide to React Hooks",
    description:
      "An in-depth guide to understanding and using React Hooks to manage state and lifecycle in your React components.",
  },
  {
    slug: "css-grid-vs-flexbox",
    title: "CSS Grid vs Flexbox: Which One Should You Use?",
    description:
      "A comparison of CSS Grid and Flexbox, two powerful layout systems in CSS, and when to use each.",
  },
  {
    slug: "building-restful-apis-with-node",
    title: "Building RESTful APIs with Node.js and Express",
    description:
      "A step-by-step tutorial on how to build RESTful APIs using Node.js and Express framework.",
  },
  {
    slug: "mongodb-basics",
    title: "MongoDB Basics: Getting Started with NoSQL",
    description:
      "An introduction to MongoDB, a popular NoSQL database, covering basic concepts and operations.",
  },
  {
    slug: "understanding-async-await",
    title: "Understanding Async/Await in JavaScript",
    description:
      "A guide to understanding asynchronous programming in JavaScript using async/await syntax.",
  },
  {
    slug: "introduction-to-tailwind-css",
    title: "Introduction to Tailwind CSS",
    description:
      "Learn how to use Tailwind CSS, a utility-first CSS framework, to quickly build modern web interfaces.",
  },
  {
    slug: "firebase-authentication",
    title: "Firebase Authentication: Securing Your Web App",
    description:
      "A tutorial on how to implement user authentication in your web application using Firebase Authentication.",
  },
];

export default page;
