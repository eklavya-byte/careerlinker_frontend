import { getAllResults } from "@/sevices/resultService"
import Results from "./Results";


export default async function page({searchParams}){

    const resultsData = await getAllResults(searchParams);
    const results = resultsData.content || [];

    return(
        <div>
            <Results results={results}/>
        </div>
    )
}