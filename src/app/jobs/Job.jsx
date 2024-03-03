import JobButton from "./jobButton";

export default async function Job({ jobdata }) {
  const { id, title, description, postedDate, applicationStartDate, applicationEndDate, examDate, admitCardDate, applicationFee, totalVacancies, eligibilityCriteria, resultDate } = jobdata;

  return (
    <div className="p-2" >
      
        {/* <p>ID: {id}</p> */}
        <p className="text-2xl text-gray-200 font-bold">{title}</p>
        <p  className=" text-gray-300">{description}</p>
        <p  className=" text-gray-300">start: {applicationStartDate} || last date: {applicationEndDate}</p>

        <p  className="pt-4 text-gray-400">Eligibility Criteria: {eligibilityCriteria ? (eligibilityCriteria.length > 50 ? eligibilityCriteria.substring(0, 50).split(3) : eligibilityCriteria.split(3)) : 'N/A'}</p>
        {/* <p>Posted Date: {postedDate}</p>
        
        <p>Exam Date: {examDate}</p>
        <p>Admit Card Date: {admitCardDate}</p>
        <p>Application Fee: {applicationFee}</p>
        <p>Total Vacancies: {totalVacancies}</p>
      className="absolute bottom-0 left-0 right-0 flex justify-center p-3"
        <p>Result Date: {resultDate}</p> */}
        <span className="flex justify-center items-center text-center p-3" ><JobButton  id={id} /></span>
          
    </div>
  );
};



