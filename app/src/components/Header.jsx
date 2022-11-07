import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
  const { title } = useParams();

  return (
    <div className="App">
      <>
        <header className="  text-white bg-blue-600 body-font">
          <div className=" justify-between container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h1 className="text-3xl"> DEMO Streaming</h1>
            <img className="Logo" src="../../../assets/logo-gray.png" alt="logo" />

            <div className=" gap-10 inline-flex lg:justify-end ml-5 lg:ml-0">
              <Link to={`/login`} className="text-white">
                <h3 className="flex items-center hover:underline cursor-pointer">
                  Log in{' '}
                </h3>
              </Link>
              <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                Start your free trial
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </header>
        <header className=" header text-white bg-gray-700 body-font">
          <div className="justify-between container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <h1 className="subHeader text-xl"> Most Popular {title}</h1>
            <div>
              <ul className=" flex gap-14 dark:text-gray-400">
                <Link to={`/`} className=" hover:underline ">
                  <li className="mb-4">Home</li>
                </Link>
                <Link to={`/movies`} className=" hover:underline ">
                  <li className="mb-4">Movies</li>
                </Link>
                <Link to={`/series`} className=" hover:underline ">
                  <li className="mb-4">Series</li>
                </Link>
              </ul>
            </div>
          </div>
        </header>
      </>
    </div>
  );
};

export default Header;
