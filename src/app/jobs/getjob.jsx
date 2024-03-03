import Link from "next/link";


async function getJob(){
  const response = await fetch ('http://localhost:9090/job',
  {
    next: {
        revalidate: 30,
          }
  })
  return response.json()

}


export default async function JobListTest () {

  const jobsData = await getJob();

  const jobs = jobsData.content || [];


  return (
    <div className="container mx-auto mt-8 px-10">
    <h1 className="text-2xl font-bold mb-4 text-center">Notifications</h1>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {jobs.map((job) => (
        <div key={job.id} className="lg:p-4 rounded-md shadow-md">
          <p className="text-lg font-semibold mb-2"><Link href={`/jobs/${job.id}`}>{job.title}</Link></p>
          {/* {console.log(job)} */}
          <p className="text-gray-500">{job.examDate}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

