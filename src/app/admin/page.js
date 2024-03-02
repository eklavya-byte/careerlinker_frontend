

import Link from 'next/link';

export default function AdminPage(){
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

</div>

  );
}


