/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ servicesData }) => {
  const { img, title, price } = servicesData;

  return (
    <div className=" bg-base-300 rounded-md">
      <div className=" p-5">
        <img className=" w-full h-[250px] rounded-md my-4" src={img} alt="" />
        <h1 className=" text-2xl font-semibold mb-2">{title}</h1>
        <div className=" flex justify-between items-center">
        <h2 className=" text-orange-600 font-semibold">Price: ${price}</h2>
        <FaArrowRightLong className=" text-xl text-orange-600"></FaArrowRightLong>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
