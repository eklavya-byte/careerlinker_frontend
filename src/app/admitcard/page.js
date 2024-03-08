import { createAdmitCard, deleteAdmitCard, getAdmitCard, getAllOfAdmitCard } from '@/sevices/admitcardService'


export default async function page(){
  // const admitObject = {
  //   "nameOfPost": "Database Administrator",
  //   "postDate": "2024-03-08",
  //   "shortInformation": "Information about Database Administrator position.",
  //   "applicationBegin": "2024-03-01",
  //   "lastDateApplyOnline": "2024-03-20",
  //   "correctionLastDate": "2024-03-25",
  //   "preExamDate": "2024-04-15",
  //   "applicationFee": "$60",
  //   "totalPost": 25,
  //   "postName": "Administrator",
  //   "eligibilityDetails": "Proficiency in SQL and database management."
  // }
  
  // const result = await createAdmitCard(admitObject);
  // if(result === 201){
  //   return "Admit card created successfully";
  // } else(
  //   "Admit card not created successfully"
  // )

  // const result = await getAdmitCard(1);
  // console.log(result);

  // const result = await deleteAdmitCard(1);
  // console.log(result);

    //  const admitCard = await getAllOfAdmitCard();
    //  console.log(admitCard);

  return (
    <div>Page</div>
  )
}

