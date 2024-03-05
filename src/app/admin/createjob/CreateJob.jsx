"use client";
import { addToJob } from "@/sevices/jobService";
import React, { useState } from "react";

const CreateJob = (event) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    description: "",
    postedDate: "",
    applicationStartDate: "",
    applicationEndDate: "",
    examDate: "",
    admitCardDate: "",
    applicationFee: "",
    totalVacancies: "",
    eligibilityCriteria: "",
    resultDate: "",
  });

  const resetFormData = () => {
    setFormData({
        id: "",
        title: "",
        description: "",
        postedDate: "",
        applicationStartDate: "",
        applicationEndDate: "",
        examDate: "",
        admitCardDate: "",
        applicationFee: "",
        totalVacancies: "",
        eligibilityCriteria: "",
        resultDate: "",
    });
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log(formData);
  try {
    const res = await addToJob(formData);
    console.log('Job added successfully:', res);
  } catch (error) {
    console.error('Error adding job:', error.message);
  }
};
  return (
    <div className=" m-8 p-5 text-red-500">
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto mt-8  text-red-500"
      >
        <div className="grid grid-cols-1 gap-4">
        <input
        type="text"
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="ID"
        className="border border-gray-300 p-2 rounded-md bg-gray-200"
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        className="border border-gray-300 p-2 rounded-md bg-gray-200"
      />
      <label
        htmlFor="description"
        className="block text-gray-400 text-sm font-bold mb-"
      >
        Description:
      </label>
      <textarea
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        rows="4"
        placeholder="Enter description"
        className="shadow appearance-none bg-gray-200 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <input
        type="text"
        name="postedDate"
        value={formData.postedDate}
        onChange={handleChange}
        placeholder="Posted Date"
        className="border border-gray-300 p-2 rounded-md bg-gray-200"
      />
          <input
            type="text"
            name="applicationStartDate"
            value={formData.applicationStartDate}
            onChange={handleChange}
            placeholder="Application Start Date"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="applicationEndDate"
            value={formData.applicationEndDate}
            onChange={handleChange}
            placeholder="Application End Date"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="examDate"
            value={formData.examDate}
            onChange={handleChange}
            placeholder="Exam Date"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="admitCardDate"
            value={formData.admitCardDate}
            onChange={handleChange}
            placeholder="Admit Card Date"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="applicationFee"
            value={formData.applicationFee}
            onChange={handleChange}
            placeholder="Application Fee"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="totalVacancies"
            value={formData.totalVacancies}
            onChange={handleChange}
            placeholder="Total Vacancies"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="eligibilityCriteria"
            value={formData.eligibilityCriteria}
            onChange={handleChange}
            placeholder="Eligibility Criteria"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
          <input
            type="text"
            name="resultDate"
            value={formData.resultDate}
            onChange={handleChange}
            placeholder="Result Date"
            className="border border-gray-300 p-2 rounded-md bg-gray-200"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className=" mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          >
            Submit
          </button>
          <button type="button" onClick={resetFormData}className="mx-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};


export default CreateJob;
