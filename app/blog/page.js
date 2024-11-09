"use client";
import React, { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
const Blog = () => {
  const [expandedBlogId, setExpandedBlogId] = useState(null);

  const blogs = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Blog Post 1",
      description: "This is a short description of blog post 1.",
      fullContent:
        "This is the full content of blog post 1. It contains more detailed information.",
      author: "Author 1",
      date: "October 10, 2023",
      slug: "blog-post-1",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Blog Post 2",
      description: "This is a short description of blog post 2.",
      fullContent:
        "This is the full content of blog post 2. It contains more detailed information.",
      author: "Author 2",
      date: "October 11, 2023",
      slug: "blog-post-2",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Blog Post 3",
      description: "This is a short description of blog post 3.",
      fullContent:
        "This is the full content of blog post 3. It contains more detailed information.",
      author: "Author 3",
      date: "October 11, 2023",
      slug: "blog-post-3",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Blog Post 4",
      description: "This is a short description of blog post 4.",
      fullContent:
        "This is the full content of blog post 4. It contains more detailed information.",
      author: "Author 4",
      date: "October 11, 2023",
      slug: "blog-post-4",
    },
    // Add more blog objects as needed
  ];

  const toggleContent = (id) => {
    setExpandedBlogId(expandedBlogId === id ? null : id);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-0 lg:px-8 py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-blue-700 dark:text-blue-300">
        Blog Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white w-full dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={blog.image}
              alt={blog.name}
              className="w-full h-44 object-cover sm:h-56 md:h-64 lg:h-72"
            />
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {blog.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {blog.description}
              </p>
              {expandedBlogId === blog.id && (
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {blog.fullContent}
                </p>
              )}
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                <span>By {blog.author}</span> | <span>{blog.date}</span>
              </div>
              <Link
                href={`/blog/${blog.slug}`}
                className={`${buttonVariants({
                  variant: "outline",
                })} inline-block mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300 `}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
