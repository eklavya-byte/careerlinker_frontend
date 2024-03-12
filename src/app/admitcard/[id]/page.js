
// export default function admitCardid(){
//   return (
//     <div>specific admit card page </div>
//   )
// }

import { BASE_URL } from "@/helper/httphelper";
import { getAdmitCard } from "@/sevices/admitcardService";


export async function generateStaticParams() {
  try {
    const response = await fetch(`${BASE_URL}`+"admitcard");
    const admitCards = await response.json();
    const staticParams = admitCards.content.map((admitCard) => ({
      id : admitCard.id.toString(),
    }));
    return staticParams;
  } catch (error) {
    console.error('Error fetching job data:', error);
    return [];
  }
}


export async function generateMetadata({ params }) {
  // read route params
  const admitCardId = params.id;
 
  // fetch job data
  const AdmitCard = await getAdmitCard(admitCardId);
 
  return {
    title: AdmitCard.postName,
    description: AdmitCard.shortInformation
  };
}

export default async function page({ params }) {
  const AdmitCard = await getAdmitCard(params.id);

  return (
    <>
      <div className="container mx-auto mt-8 px-10">
        <div className="flex justify-center items-center">
          <div className="w-full md:w-11/12 lg:w-10/12 xl:w-9/12">
            <div className="p-5 lg:mx-10 flex justify-center">
              <div className="border border-solid shadow-md border-gray-600">
                {AdmitCard && (
                  <div className="p-5">
                    <h1 className="text-2xl text-orange-300 font-bold">Admit Card Info : {AdmitCard.postName}</h1>
                    <div className="border-t border-b text-orange-200 border-gray-300 my-5 py-3">
                      <p>Sort info: {AdmitCard.shortInformation}</p>
                    </div>
                    <div className="text-orange-100 my-5">
                      <h2 className="font-bold">Key Details:</h2>
                      <p>Posted Date: {AdmitCard.postDate}</p>
                      <p>Application Begin Date: {AdmitCard.applicationBegin}</p>
                      <p>Last Date to Apply Online: {AdmitCard.lastDateApplyOnline}</p>
                      <p>Correction Last Date: {AdmitCard.correctionLastDate}</p>
                      <p>Pre-Exam Date: {AdmitCard.preExamDate}</p>
                      <p>Application Fee: {AdmitCard.applicationFee}</p>
                      <p>Total Posts: {AdmitCard.totalPost}</p>
                      <p>Eligibility Details: {AdmitCard.eligibilityDetails}</p>
                    </div>
                    <div className="my-5 text-orange-100">
                      <h2 className="font-bold">Application Process:</h2>
                      <p>Instructions for application process...</p>
                    </div>
                    <div className="my-5 text-orange-100">
                      <h2 className="font-bold">Result Date:</h2>
                      <p>Expected result date...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
