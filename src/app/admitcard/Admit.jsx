import AdmitCardButton from "./AdmitCardButton";

export default async function AdmitCard({ admitCardData }) {
  const { id, postName, postDate, shortInformation, applicationBegin, lastDateApplyOnline, correctionLastDate, preExamDate, applicationFee, totalPost, eligibilityDetails} = admitCardData;

  return (
    <div className="p-2" >
      
        {/* <p>ID: {id}</p> */}
        <p className="text-2xl text-gray-200 font-bold">{postName}</p>
        <p  className=" text-gray-300">{shortInformation}</p>
        <p  className=" text-gray-300">start: {applicationBegin} || last date: {lastDateApplyOnline}</p>

        <p  className="pt-4 text-gray-400">Eligibility Criteria: {eligibilityDetails ? (eligibilityDetails.length > 50 ? eligibilityDetails.substring(0, 50).split(3) : eligibilityDetails.split(3)) : 'N/A'}</p>
        <span className="flex justify-center items-center text-center p-3" ><AdmitCardButton  id={id} /></span>
          
    </div>
  );
};



