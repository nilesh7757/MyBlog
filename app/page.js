import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Home = () => {
  return (
    <div className="">
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
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-200">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that works best for you
          </p>
        </div>
        <div className="mt-16 px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>
      <div className="w-[90%] mx-auto p-6 rounded-lg mt-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
            Customer Reviews
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Here see what our top customers say
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-xl hover:rotate-1">
              <div className="flex justify-center items-center mb-2">
                {/* <!-- Removed the 5.0 rating --> */}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This product exceeded my expectations! The quality is fantastic
                and the customer service was excellent. Highly recommend!
              </p>
              <p className="text-lg font-bold text-center text-gray-500 dark:text-gray-400">
                - John Doe
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-xl hover:rotate-1">
              <div className="flex justify-center items-center mb-2">
                {/* <!-- Removed the 5.0 rating --> */}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This product exceeded my expectations! The quality is fantastic
                and the customer service was excellent. Highly recommend!
              </p>
              <p className="text-lg font-bold text-center text-gray-500 dark:text-gray-400">
                - John Doe
              </p>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform transform hover:scale-105 duration-300 hover:shadow-xl hover:rotate-1">
              <div className="flex justify-center items-center mb-2">
                {/* <!-- Removed the 5.0 rating --> */}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This product exceeded my expectations! The quality is fantastic
                and the customer service was excellent. Highly recommend!
              </p>
              <p className="text-lg font-bold text-center text-gray-500 dark:text-gray-400">
                - John Doe
              </p>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="w-full max-w-7xl mx-auto p-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 shadow-xl rounded-xl mt-12">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">
              Top Blogs
            </h2>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Here see todays top blogs
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="./glasseswithcomputer.jpg"
                  alt="Blog 1"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Blog Title 1
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="inline-block mt-5 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-colors duration-300">
                    Read more
                  </Button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="./laptop.jpg"
                  alt="Blog 2"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Blog Title 2
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="inline-block mt-5 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-colors duration-300">
                    Read more
                  </Button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
                <img
                  src="./laptopandcomputer.jpg"
                  alt="Blog 3"
                  className="w-full h-52 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                    Blog Title 3
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-3">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="inline-block mt-5 px-6 py-2 bg-blue-500 text-white font-medium rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-colors duration-300">
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
