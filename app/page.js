import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const Home = () => {
  return (
    <div className="px-4 md:px-8 lg:px-[10%]">
      {/* Hero Section */}
      <div className="container mx-auto p-8">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white">
              Free Landing Page Template for startups
            </h1>
            <p className="mt-4 text-lg sm:text-xl xl:text-2xl leading-normal text-gray-500 dark:text-gray-300">
              Nextly is a free landing page & marketing website template for startups and indie projects. Built with Next.js & TailwindCSS and completely open-source.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center mt-5 space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md text-center"
              >
                Download for Free
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg width="24" height="24" className="w-5 h-5" fill="currentColor">
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span>View on Github</span>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/hero.webp"
              alt="Hero Illustration"
              width={616}
              height={617}
              className="object-cover"
            />
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="py-12 text-center text-gray-700 dark:text-white">
          <p>Trusted by <span className="text-indigo-600">2000+</span> customers worldwide</p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-wrap lg:flex-nowrap gap-10">
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/benefit-one.png"
              alt="Benefits"
              width={521}
              height={521}
              className="object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Highlight your benefits
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-500 dark:text-gray-300">
              You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or illustration with some bullet points.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-gray-200">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Choose the plan that works best for you
          </p>
        </div>

        {/* >
          {/* Pricing Cards */}
          {/* {[1, 2, 3].map((plan) => ( */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Basic</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Perfect for getting started</p>
                <div className="mt-8">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">1 User</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">5GB Storage</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Get Started
                </Button>
              </div>
            </div>
            <div
              className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Standard</h3>
                <Badge className={"bg-blue-600 rounded-full"}>Best Seller</Badge>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Perfect for getting started</p>
                <div className="mt-8">
                  <span className="text-4xl font-bold">$10</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">1 User</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">5GB Storage</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Get Started
                </Button>
              </div>
            </div>

            <div
              className="bg-white dark:bg-gray-800 rounded-lg border-2 hover:border-blue-500 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="px-6 py-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-200">Premium</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Perfect for getting started</p>
                <div className="mt-8">
                  <span className="text-4xl font-bold">$15</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">1 User</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3">5GB Storage</span>
                  </li>
                </ul>
                <Button className="mt-8 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Get Started
                </Button>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>
    // </div>
  );
};

export default Home;
