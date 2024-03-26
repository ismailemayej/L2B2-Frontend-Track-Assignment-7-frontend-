/* eslint-disable @typescript-eslint/no-unused-vars */

import { toast } from "sonner";

/* eslint-disable @typescript-eslint/no-explicit-any */
const AlartModal = ({ modal, postinfo, user }: any) => {
  const sentSubmitData = (submitData: any) => {
    toast.success("Your Donate submit data successfully");
    console.log(submitData, "submited data");
  };
  const sentDataObj = {
    Name: user.name,
    Email: user.email,
    PostTitle: postinfo.title,
    PostCategory: postinfo.category,
    PostAmount: postinfo.amount,
  };

  return (
    <div className="overflow-y-auto bg-gray-400 backdrop-blur-md  fixed top-9 right-50 left-50 z-50 justify-center flex items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-xl shadow dark:bg-gray-700">
          {/* ---------- */}

          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => modal(false)}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-left">
            <h3 className="mb-5 text-xl font-normal text-gray-500 dark:text-gray-400">
              <div>Name:{user?.name ? user?.name : "No user name"}</div>
              <div>Email:{user?.email}</div>
            </h3>
            <div>
              <h2 className="font-semibold text-center">Post Details</h2>
              <div className="text-lg">
                <span className="font-semibold">Title:</span> {postinfo?.title}
              </div>
              <div className="text-lg">
                <span className="font-semibold">Category:</span>{" "}
                {postinfo?.category}
              </div>
              <div className="text-lg">
                <span className="font-semibold">Amount:</span>
                {postinfo?.amount}
              </div>
              your are sure for Donate?
            </div>
            <button
              onClick={() => sentSubmitData(sentDataObj)}
              type="submit"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Yes, I'm sure
            </button>
            <button
              onClick={() => modal(false)}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              No, cancel
            </button>
          </div>

          {/* ---------- */}
        </div>
      </div>
    </div>
  );
};

export default AlartModal;
