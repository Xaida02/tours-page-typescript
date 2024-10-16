import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 font-bold text-red-700">
      <div className="text-center">
        <h1 className="tracking-wider text-2xl ">404 Not Found</h1>
        <p className="text-base">
          It seems the page you're looking for doesn't exist.
        </p>
      </div>
      <Link
        className="bg-cyan-700 px-4 py-2 text-white duration-300 hover:text-cyan-700 hover:bg-white text-md rounded-lg border-2 border-transparent hover:border-cyan-700"
        to={"/"}
      >
        Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
