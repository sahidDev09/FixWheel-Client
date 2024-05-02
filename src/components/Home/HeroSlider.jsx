import sliderone from "../../assets/images/banner/1.jpg";
import slidertwo from "../../assets/images/banner/2.jpg";
import sliderthree from "../../assets/images/banner/3.jpg";
import sliderfour from "../../assets/images/banner/4.jpg";

const HeroSlider = () => {
  return (
    <div>
      <div className="carousel w-full lg:h-[700px] md:h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={sliderone} className="w-full rounded-md" />

          <div className="absolute flex justify-end h-full items-center left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className=" flex flex-col gap-3 md:p-14 p-3">
              <h1 className=" md:text-7xl text-white md:w-[50%] font-bold">
                Keep Your Wheels Rolling Smoothly
              </h1>
              <p className=" text-gray-400 md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci autem maxime illum qui, alias dicta maiores
                necessitatibus reprehenderit obcaecati quasi.
              </p>
              <div className=" flex items-center gap-4">
                <button className=" btn bg-orange-600 border-none text-white">
                  Discover More
                </button>
                <button className=" border border-white btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5 gap-5">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slidertwo} className="w-full" />
          <div className="absolute flex justify-end h-full items-center left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className=" flex flex-col gap-3 md:p-14 p-3">
              <h1 className=" md:text-7xl text-white md:w-[50%] font-bold">
                Reliable Car Servicing Solutions at FixWheel
              </h1>
              <p className=" text-gray-400 md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci autem maxime illum qui, alias dicta maiores
                necessitatibus reprehenderit obcaecati quasi.
              </p>
              <div className=" flex items-center gap-4">
                <button className=" btn bg-orange-600 border-none text-white">
                  Discover More
                </button>
                <button className=" border border-white btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5 gap-5">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={sliderthree} className="w-full" />
          <div className="absolute flex justify-end h-full items-center left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className=" flex flex-col gap-3 md:p-14 p-3">
              <h1 className=" md:text-7xl text-white md:w-[50%] font-bold">
                Precision Engineering for Your Wheels
              </h1>
              <p className=" text-gray-400 md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci autem maxime illum qui, alias dicta maiores
                necessitatibus reprehenderit obcaecati quasi.
              </p>
              <div className=" flex items-center gap-4">
                <button className=" btn bg-orange-600 border-none text-white">
                  Discover More
                </button>
                <button className=" border border-white btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5 gap-5">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={sliderfour} className="w-full" />
          <div className="absolute flex justify-end h-full items-center left-0 top-0 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
            <div className=" flex flex-col gap-3 md:p-14 p-3">
              <h1 className=" md:text-7xl text-white md:w-[50%] font-bold">
                Let FixWheel Handle Your Car Maintenance.
              </h1>
              <p className=" text-gray-400 md:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci autem maxime illum qui, alias dicta maiores
                necessitatibus reprehenderit obcaecati quasi.
              </p>
              <div className=" flex items-center gap-4">
                <button className=" btn bg-orange-600 border-none text-white">
                  Discover More
                </button>
                <button className=" border border-white btn btn-outline text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-10 bottom-5 gap-5">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
