import { BASE_URL } from "@/helper/httphelper";


//crete admit card in db 
export async function createAdmitCard(admitObject) {

    const url = BASE_URL + "admitcard"
    console.log(url)
    const response = await fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admitObject)
        })
    return response.status;
}

//update admit card in db 
export async function updateAdmitCard(admitObject, id) {

    const url = BASE_URL + "admitcard" + "/id"
    const response = await fetch(url,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(admitObject)
        })
    return response.status;
}

//get admit card by id 
export async function getAdmitCard(id) {
    const url = `${BASE_URL}admitcard/${id}`
    try {
        const response = await fetch(url, {
            next: {
                revalidate: 30,
            },
        })
        return response.json();

    } catch (error) {
        console.log(error);
    }
}

//delete admit card  // return respose status  
//there is not gutcha here in status code for instance we will assume it is deleting !
export async function deleteAdmitCard(id) {
    const url = `${BASE_URL}admitcard/${id}`;
    try {
        const response = await fetch(url, {
            method: "DELETE"
        });
        return response.status;
    } catch (error) {
        console.log(error);
    }
}

//get all of admit card with pageable response 
export async function getAllOfAdmitCard(searchParams) {
    const { pageNumber = 0, pageSize = 16, sortDir = 'desc', sortBy = 'id' } = searchParams || {};
    let pageNum = 0;
    if (pageNumber > 0) {
        pageNum = pageNumber - 1;
    }
    let url = `${BASE_URL}admitcard?pageNumber=${pageNum}&pageSize=${pageSize}&sortDir=${sortDir}&sortBy=${sortBy}`;
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



