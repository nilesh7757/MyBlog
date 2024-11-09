import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-0">
      {/* Hero Section */}
      <div className="container lg:px-[8%] mx-auto p-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="mt-4 text-lg sm:text-xl xl:text-2xl leading-normal text-gray-500 dark:text-gray-300">
              Nextly is a free landing page & marketing website template for
              startups and indie projects. Built with Next.js & TailwindCSS and
              completely open-source.
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="./hero.webp"
              alt="Hero Illustration"
              width={616}
              height={617}
              className="object-cover"
            />
          </div>
        </div>

        <div className="py-12 text-center text-gray-700 dark:text-white">
          <p>
            Trusted by <span className="text-indigo-600">2000+</span> customers
            worldwide
          </p>
        </div>
      </div>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900  py-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-200">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that works best for you
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-[10%]">
          <div className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Basic
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Perfect for getting started
              </p>
              <div className="mt-8">
                <span className="text-4xl font-bold">$9</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">1 User</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">5GB Storage</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Get Started
              </Button>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Standard
              </h3>
              <Badge className={"bg-blue-600 rounded-full"}>Best Seller</Badge>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Perfect for getting started
              </p>
              <div className="mt-8">
                <span className="text-4xl font-bold">$10</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">1 User</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">5GB Storage</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Get Started
              </Button>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">
                Premium
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-300">
                Perfect for getting started
              </p>
              <div className="mt-8">
                <span className="text-4xl font-bold">$15</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">1 User</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-3">5GB Storage</span>
                </li>
              </ul>
              <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="border-t border-gray-200 pt-4">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.46a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118l-3.39-2.46a1 1 0 00-1.175 0l-3.39 2.46c-.784.57-1.838-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118l-3.39-2.46c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">5.0</span>
        </div>
        <p className="text-gray-700 mb-4">
          This product exceeded my expectations! The quality is fantastic and the customer service was excellent. Highly recommend!
        </p>
        <p className="text-sm text-gray-500">- John Doe</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
