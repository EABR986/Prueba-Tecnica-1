import './Home.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-6xl mb-4 font-medium 0">
              Best place for your movies and series collection
            </h1>
            <p className=" text-xl mb-8 leading-relaxed">
              Watching movies online has never been easier! Demo Streaming is a free
              streaming website that lets you watch tv series, watch tv shows, and watch
              movies online for FREE. The site provides thousands of free episodes from
              all your favorite TV shows, including Breaking Bad, Game of Thrones,
              Stranger Things, and more. If you are looking for something new to watch
              this weekend, take some time to explore the wide selection of Demo
              Streaming.
            </p>
            <div className="homeDiv gap-20 flex justify-center">
              <div className="justify-center HomeMovie flex flex-wrap w-1/3">
                <div className="homeContainer w-80 inline-flex p-1 md:p-2 h-96">
                  <Link to={`/movies`} className="movies">
                    <img
                      alt="gallery"
                      className=" cardImg bg-gray-800 block object-cover object-center w-full h-full rounded-lg"
                      src="../../../assets/placeholder.png"
                    />
                  </Link>
                </div>
                <p className="font-bold text-lg ">Movies</p>
              </div>
              <div className="justify-center flex flex-wrap w-1/3">
                <div className="homeContainer w-80 inline-flex p-1 md:p-2 h-96">
                  <Link to={`/series`} className="series">
                    <img
                      alt="gallery"
                      className="cardImg bg-gray-800 block object-cover object-center w-full h-full rounded-lg"
                      src="../../../assets/placeholder.png"
                    />
                  </Link>
                </div>
                <p className="font-bold text-lg ">Series</p>
              </div>
            </div>
          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 heroImg">
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src="https://res.cloudinary.com/dvedrbvnw/image/upload/v1667776434/prueba%20tecncia/cat_1299_cyebyd.jpg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
