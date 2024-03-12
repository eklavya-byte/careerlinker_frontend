"use client"
import { useRouter } from "next/navigation"

export default function AdmitCardButton({id}) {
    const router  = useRouter();
    function handleClick(){
        router.push(`/admitcard/${id}`)
    }
  return (
    <button className="text-green-600 border border-solid border-gray-300 p-1 px-3 rounded-lg " onClick={handleClick}>
    View details ↗
</button>

  )
}

