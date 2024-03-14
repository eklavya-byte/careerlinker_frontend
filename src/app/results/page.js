import { getAllResults } from "@/sevices/resultService"


export default async function page({searchParams}){

    const resultsData = await getAllResults(searchParams);
    const results = resultsData.content || [];

    console.log(results);

    return(
        <div>
            <h1>This one is result page ! </h1>
        </div>
    )
}