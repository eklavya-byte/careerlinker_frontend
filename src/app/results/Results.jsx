"use client";
export default function Results({ results }) {

  return (
    <>
      <div className="">
      <h1 className=" text-center text-3xl font-semibold m-5">Here is upcoming results</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 mx-auto lg:px-28 lg:mx-36">
          {results &&
            results.map((result) => (
              <div key={result.id} className="p-4 rounded-lg shadow-md shadow-slate-500">
                <h1 className="text-2xl font-extrabold">{result.title}</h1>
                <p className="mx-auto text-gray-500 text-end text-xs">
                  Post date : {result.postDate}
                </p>
                <p className="mx-auto text-gray-200">{result.description}</p>
                <span className="flex justify-center text-blue-500 mt-2">
                  <a
                    className="font-semibold"
                    href={result.resultLink}
                  >
                    Go to result's website ↗
                  </a>
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
