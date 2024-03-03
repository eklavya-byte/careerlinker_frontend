
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

async function getProduct(userId) {
  const res = await fetch(`http://localhost:9090/job/${userId}`)
  const data = await res.json();
  return data;
}


export default async function SingleJob({ params }) {
  const job = await getProduct(params.jobId);
  return (
    <>
      {/* <p className="text-2xl text-center pt-5 font-bold text-gray-300">{job.title}</p>
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
    </div> */}

      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
            {/* <div className="my-2 shadow-lg relative"> */}
              <div className="p-5 lg:mx-10 flex justify-center ">
                <div className="text-pink-600 border border-solid shadow-md border-gray-600">
                  {job && (
                    <div className="p-5">
                      <h1 className="text-2xl font-bold">Job Notification: {job.title} Position</h1>

                      <div className="border-t border-b border-gray-300 my-5 py-3">
                        <p>Description: {job.description}</p>
                      </div>

                      <div className="my-5">
                        <h2 className="font-bold">Key Details:</h2>
                        <p>Posted Date: {job.postedDate}</p>
                        <p>Application Start Date: {job.applicationStartDate}</p>
                        <p>Application End Date: {job.applicationEndDate}</p>
                        <p>Exam Date: {job.examDate}</p>
                        <p>Admit Card Date: {job.admitCardDate}</p>
                        <p>Application Fee: {job.applicationFee}</p>
                        <p>Total Vacancies: {job.totalVacancies}</p>
                        <p>Eligibility Criteria: {job.eligibilityCriteria}</p>
                      </div>

                      <div className="my-5">
                        <h2 className="font-bold">Application Process:</h2>
                        <p>Interested candidates can apply starting from {job.applicationStartDate}.</p>
                        <p>The application deadline is {job.applicationEndDate}.</p>
                        <p>The exam for the {job.title} position is scheduled for {job.examDate}.</p>
                        <p>Admit cards will be issued on {job.admitCardDate}.</p>
                      </div>

                      <div className="my-5">
                        <h2 className="font-bold">Application Fee:</h2>
                        <p>A non-refundable application fee of {job.applicationFee} is applicable. Ensure payment is made within the specified timeframe to complete the application process.</p>
                      </div>

                      <div className="my-5">
                        <h2 className="font-bold">Total Vacancies:</h2>
                        <p>There are a total of {job.totalVacancies} vacancies for the {job.title} position. This is a great opportunity for qualified individuals to join our esteemed institution.</p>
                      </div>

                      <div className="my-5">
                        <h2 className="font-bold">Result Date:</h2>
                        <p>The results of the selection process will be announced on {job.resultDate}. We appreciate the enthusiasm and effort of all applicants and look forward to welcoming new members to our team.</p>
                      </div>

                      <p className="my-5">Thank you for considering this exciting career opportunity with us. For more details and to apply, please visit our official website.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}



    </>
  )

}