import Link from "next/link";
import Job from "./Job";
import { getJob, getListOfCategory } from "@/sevices/jobService";
import CategoryDropdown from "@/components/pages/MyDropdown";

export const metadata = {
  title: "Latest Job notifications",
  description: "Stay informed with the latest job notifications. Explore job opportunities, stay ahead in your career, and find your next professional endeavor.",
};


export default async function Page({searchParams}) {
  // Fetch job data
  const jobsData = await getJob(searchParams);
  const jobs = jobsData.content || [];

  const pageArray = Array.from({ length: jobsData.totalPages }, (_, i) => i + 1);

  // console.log(pageArray);

  return (
    <>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {/* First Section */}
  <section className="md:col-span-1 hidden sm:block md:block  p-3 pl-5 ml-5 border border-gray-300 border-solid border-r-1 border-b-0 border-t-0 border-l-0  ">
  <h1 className="text-2xl font-bold mb-4 text-center pt-5">Latest Job List</h1>
  {jobs.map((job) => (
    <div className="p-2" key={job.id}>
      <Link href={`/jobs/${job.id}`}>
        <div className="">
          <span className="font-bold">{job.title}</span>
        </div>
        <div className="text-gray-400">
          <span>{job.description}</span>
        </div>
      </Link>
    </div>
  ))}
</section>


  {/* Second Section */}
  <section className="md:col-span-3 col-span-1">
  <div className="container mx-auto mt-8 px-10">
        <h1 className="text-2xl mb-4  text-gray-200 font-bold text-center pb-2">Latest Jobs notifications</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <Job key={job.id} jobdata={job} />
          ))}
          
        </div>
      </div>
  </section>


</div>
<div className="flex items-center justify-center py-5 my-5 ">
  <p className="text-center text-gray-300 mx-2">Page 
  </p>
  { pageArray.length > 0 && pageArray.map((page) =>
    <p key={page}>  <Link href={{ pathname: '/jobs', query: { pageNumber: page } }}><span className={jobsData.pageNumber === page-1 ? "text-gray-200 mx-2" : "text-gray-400 mx-2"} >{page}</span></Link>
    </p>
  )}
</div>

    </>



  );
}
