import { httpAxios } from "@/helper/httphelper";


export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


//Create job
export async function addToJob(jobdata) {
  try {
    const result = await httpAxios.post("/job", jobdata);
    return result.data;
  } catch (error) {
    throw new Error('Failed to add job: ' + error.message);
  }
}

//second create job nextjs 
// export async function PostJob() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//     body: JSON.stringify({ time: new Date().toISOString() }),
//   })
//   const data = await res.json()
//   return Response.json(data)
// }



//get single job
export async function fetchSingleJob(userId) {
  try {
    const res = await fetch(`${BASE_URL}job/${userId}`)
    const data = await res.json();
    return data;
  } catch (error) {
    return error.message;
  }
}


//get all jobs pagable
export async function getJob(searchParams) {
  const { pageNumber = 0, pageSize = 15, sortDir = 'desc', sortBy = 'postedDate' } = searchParams || {};
  let pageNum = 0;
  if (pageNumber > 0 ){
    pageNum = pageNumber-1;
  }
  let url = `${BASE_URL}job?pageNumber=${pageNum}&pageSize=${pageSize}&sortDir=${sortDir}&sortBy=${sortBy}`;
  
  // Fetch job data
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


export async function getJobByCategory(searchParams) {
  const { pageNumber = 0, pageSize = 15, sortDir = 'desc', sortBy = 'postedDate' ,region="not-found"} = searchParams || {};
  let pageNum = 0;
  if (pageNumber > 0 ){
    pageNum = pageNumber-1;
  }
  let url = `${BASE_URL}job/getjob/${region}?pageNumber=${pageNum}&pageSize=${pageSize}&sortDir=${sortDir}&sortBy=${sortBy}`;
  
  // Fetch job data
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


// get list of categories
export async function getListOfCategory () {
  try {
    const res = await fetch(`${BASE_URL}category`)
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message)
    return error.message;
  }
}
