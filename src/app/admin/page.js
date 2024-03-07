

import FilterJob from '@/components/pages/FilterJob';
import MyDropdown from '@/components/pages/MyDropdown';
import { getListOfCategory } from '@/sevices/jobService';
import Link from 'next/link';

export default async function AdminPage(){
  const listOfCategory =await getListOfCategory();
  // console.log(listOfCategory);
  return (
    <div className="flex flex-col pt-11 text-center">
  <div className="flex-1 flex  items-center">
    <div className="w-1/4 p-4">
      <Link href="/admin/createjob">Create Latest Job</Link>
    </div>
    <div className="w-1/4 p-4">
    <Link href="/admin/createjob">Create Latest Job</Link>
    </div>
    <div className="w-1/4 p-4">
    <Link href="/admin/createjob">Create Latest Job</Link>
    </div>
    <div className="w-1/4 p-4">
    <Link href="/admin/createjob">Create Latest Job</Link>
    </div>
  </div>

  <div>
  </div>

  <FilterJob searchParams={{region:"Delhi"}}/>

</div>

  );
}


