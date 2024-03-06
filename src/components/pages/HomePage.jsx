import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomePage() {
  return (
    <div>
      {/* hero section */}
      <div className="font-light text-center lg:text-lg text-red-600 mb-4 pt-1">
        Stay updated with the latest notifications and details of upcoming
        exams.
      </div>
      <div className="flex justify-center items-center p-5">
        <section className="lg:mx-5 px-3">
          <h3 className="text-2xl mb-2 text-start">
            Stay Ahead, Stay Informed: Welcome to Exam Notifications!{" "}
          </h3>
          <span className="lg:px-3 ">
            <p className="pb-1 lg:px-3">
              Get free quizzes for preparing for your exam for free
            </p>
            <p className="pb-1 lg:px-3">
              Stay updated! Contribute articles to help others stay updated
            </p>
            <p className="pb-1 lg:px-3">
              Help others! For preparing and spreading happiness!
            </p>
            <p className="pb-1 lg:px-3">
              To keep free this platform, contribute !
            </p>
            <p className="pb-1 lg:px-3">
              Get exam paper-set free and solve it here !
            </p>
            <p className="pb-1 lg:px-3">
              Do follow our social media and share to built a strong community
            </p>
          </span>
        </section>
        <section className="hidden sm:block md:block mx-2 p-5 pl-10  bg-[url('/icons/hero-section-bw-min.png')] rounded-lg shadow-lg ">
          <img
            src="icons/hero-section-bw-min.png"
            alt=""
            className="object-cover  w-96 rounded-lg shadow-lg"
          />
        </section>
      </div>

      <hr className="border-1 border-gray-500 border-dashed border-opacity-50" />

      <div className="flex flex-col lg:flex-row md:flex-row lg:justify-center lg:items-center text-center">
        <div className="p-4 lg:w-1/4 md:w-1/2 mx-2">
          You can check upcoming job notifications
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2 mx-2">View results easily.</div>
        <div className="p-4 lg:w-1/4 md:w-1/2 mx-2">
          Take advantage of free quizzes to prepare.
        </div>
        <div className="p-4 lg:w-1/4 md:w-1/2 mx-2">
          Discover motivational and subject-specific articles.
        </div>
      </div>

      <hr className="border-1 border-gray-500 border-dashed border-opacity-50" />

      {/* some important links  */}
      <div>
        <section className="md:col-span-3 col-span-1 pt-6">
          <div className="container mx-auto mt-8 px-10">
            <h1 className="text-2xl mb-4  text-gray-200 font-bold text-center pb-2">
              Important links
            </h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 underline text-blue-500">
              <li>
                <Link href="/jobs">Get latest Job Update </Link>
              </li>
              <li>
                <Link href="/jobs">Get latest Result Update</Link>
              </li>
              <li>
                <Link href="/jobs">Go to free Quizzes</Link>
              </li>
              <li>
                <Link href="/jobs">Connect to our Teligram</Link>
              </li>
              <li>
                <Link href="/jobs">Go to our Youtube Channel</Link>
              </li>
              <li>
                <Link href="/jobs">Follow Instagram Page</Link>
              </li>
            </div>
          </div>
        </section>
      </div>

      <hr className="border-1 border-gray-500 border-dashed border-opacity-50 mt-10 pt-5" />


      {/* feedback and sujjestion section  */}
      <div className="flex justify-center items-center p-5 mt-2 text-blue-500 underline text-lg">
        <img className=" w-5 mx-4" src="/icons/google-forms.svg" alt="" />
        <Image/>
        <a href="https://forms.gle/eg5Mk64RTcND8XM47" target="_blank">
        <i>Submit Inquiry/Feedback</i>
        </a>
      </div>
    </div>
    
  );
}

export default HomePage;
