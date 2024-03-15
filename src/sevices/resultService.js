import { BASE_URL } from "@/helper/httphelper";



//get single result 
// create a result 
//get all results
export async function getAllResults(searchParams) {
    const { pageNumber = 0, pageSize = 26, sortDir = 'desc', sortBy = 'postDate' } = searchParams || {};
    let pageNum = 0;
    if (pageNumber > 0) {
        pageNum = pageNumber - 1;
    }
    let url = `${BASE_URL}results?pageNumber=${pageNum}&pageSize=${pageSize}&sortDir=${sortDir}&sortBy=${sortBy}`;
    // Fetch admit-card data
    try {
        const response = await fetch(url, {
            next: {
                revalidate: 30,
            },
        });
        return response.json();
    } catch (error) {
        console.log(error);
        return error.message;
    }
}


//delete results