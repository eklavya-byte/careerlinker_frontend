import { getAllOfAdmitCard } from '@/sevices/admitcardService';
import AdmitCard from './Admit';
import Link from 'next/link';


export const metadata = {
  title: "Recent Admit Cards",
  description: "Stay updated with the latest admit cards. Access your exam hall tickets easily and stay organized for your upcoming exams.",
};

export default async function AdmitCardPage({ searchParams }) {
  const admitCardData = await getAllOfAdmitCard(searchParams);
  const admitCardList = admitCardData.content || [];

  const pageArray = Array.from({ length: admitCardData.totalPages }, (_, i) => i + 1);


  return (
    <>
      <div className="container mx-auto mt-8 px-10">
        <h1 className="text-2xl mb-4 text-gray-200 font-bold text-center pb-2">Recent Admit Cards</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {admitCardList.map((admitCard) => (
            <div key={admitCard.id} className=" p-4 rounded-lg shadow-md">
              <AdmitCard admitCardData={admitCard}/>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center py-5 my-5 ">
  <p className="text-center text-gray-300 mx-2">Page 
  </p>
  { pageArray.length > 0 && pageArray.map((page) =>
    <p key={page}>  <Link href={{ pathname: '/admitcard', query: { pageNumber: page } }}><span className={admitCardData.pageNumber === page-1 ? "text-gray-200 mx-2" : "text-gray-400 mx-2"} >{page}</span></Link>
    </p>
  )}
</div>
    </>
  );
}
