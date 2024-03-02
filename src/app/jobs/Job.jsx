// import JobButton from "./jobButton";

// export default async function Job({id,title,date}) {
//   return (
//     <div className="container mx-auto mt-8 px-10">
//     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//       <p>{id}</p>
//       <p>{title}</p>
//       <p>{date}</p>
//       <JobButton id={id}/>
//     </div>
//   </div>
  
//   );
// };


import JobButton from "./jobButton";

export default async function Job({ jobdata }) {
  const { id, title, description, postedDate, applicationStartDate, applicationEndDate, examDate, admitCardDate, applicationFee, totalVacancies, eligibilityCriteria, resultDate } = jobdata;

  return (
    <div >
      
        <p>ID: {id}</p>
        <p>Title: {title}</p>
        <p>Description: {description}</p>
        <p>Posted Date: {postedDate}</p>
        <p>Application Start Date: {applicationStartDate}</p>
        <p>Application End Date: {applicationEndDate}</p>
        <p>Exam Date: {examDate}</p>
        <p>Admit Card Date: {admitCardDate}</p>
        <p>Application Fee: {applicationFee}</p>
        <p>Total Vacancies: {totalVacancies}</p>
        <p>Eligibility Criteria: {eligibilityCriteria}</p>
        <p>Result Date: {resultDate}</p>
        <span className="flex justify-center items-center text-center p-3" ><JobButton  id={id} /></span>
        
      
    </div>
  );
};



