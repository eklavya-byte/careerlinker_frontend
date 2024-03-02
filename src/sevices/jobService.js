import { httpAxios } from "@/helper/httphelper";


export async function addToJob(jobdata) {
  try {
    const result = await httpAxios.post("/job", jobdata);
    return result.data;
  } catch (error) {
    throw new Error('Failed to add job: ' + error.message);
  }
}




// going to use this 
export async function getAllJobs() {
  const result = await httpAxios
    .get(`/job`)
    .then((response) => response.data);
  return result;
}





export async function getJobById(userId) {
    const result = await httpAxios
      .get(`/jobs/${userId}`)
      .then((response) => response.data);
    return result;
  }


// export async function deleteTask(taskId) {
//   const result = await httpAxios
//     .delete(`/api/tasks/${taskId}`)
//     .then((response) => response.data);
//   return result;
// }


//   const axios = require('axios');

// // Make sure to use the correct URL with the port
// const url = 'http://localhost:9090/job';

// axios.get(url)
//   .then(response => {
//      console.log(response);
//   })
//   .catch(error => {
//     console.response(error);
//   });




// Function to fetch all jobs
// export async function getAllJobs() {
//     try {
//       // Make the GET request to the /job endpoint using the axios instance
//       const response = await httpAxios.get(`/job`);
//       // Return the data from the response
//       return response.data;
//     } catch (error) {
//       // If an error occurs, throw it to be caught by the caller
//       throw new Error('Error fetching jobs:', error);
//     }
//   }
  
