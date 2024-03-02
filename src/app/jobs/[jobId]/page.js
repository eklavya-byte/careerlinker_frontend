
export async function generateStaticParams() {
  try {
    const response = await fetch('http://localhost:9090/job');
    const jobs = await response.json();
    const staticParams = jobs.content.map((job) => ({
      userId: job.id,
    }));

    return staticParams;
  } catch (error) {
    console.error('Error fetching job data:', error);
    return [];
  }
}

async function getProduct(userId){
  const res = await fetch(`http://localhost:9090/job/${userId}`)
  const data = await res.json();
  return data;
}


export default async function SingleJob({params}){
  const job = await getProduct(params.jobId);
  return(
    <>
    <p className="text-2xl text-center pt-5 font-bold text-gray-300">{job.title}</p>
    <div className="flex justify-center items-center text-center p-5">
      {job && (
        <div className="text-start p-5  text-pink-600 border border-solid shadow-md border-gray-600">
          <p>Job ID: {job.id}</p>
          <p>Title: {job.title}</p>
          <p>Description: {job.description}</p>
          <p>Posted Date: {job.postedDate}</p>
          <p>Application Start Date: {job.applicationStartDate}</p>
          <p>Application End Date: {job.applicationEndDate}</p>
          <p>Exam Date: {job.examDate}</p>
          <p>Admit Card Date: {job.admitCardDate}</p>
          <p>Application Fee: {job.applicationFee}</p>
          <p>Total Vacancies: {job.totalVacancies}</p>
          <p>Eligibility Criteria: {job.eligibilityCriteria}</p>
          <p>Result Date: {job.resultDate}</p>
        </div>
      )}
    </div>
    </>
  )

}