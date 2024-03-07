

import Job from '@/app/jobs/Job';
import { getJobByCategory} from '@/sevices/jobService'

export default async function FilterJob ({searchParams}) {
    const jobsData = await getJobByCategory(searchParams);
    // console.log(jobsData)
  const jobs = jobsData.content || [];
  return (
    <div>
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
  )
}

