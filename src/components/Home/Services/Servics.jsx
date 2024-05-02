import { data } from "autoprefixer";
import daisyui from "daisyui";
import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Servics = () => {
  const [services, setServivces] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setServivces(data);
      });
  }, []);

  console.log(services);

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center mt-5">Our Service Area</h1>
      <p className=" md:w-[50%] text-center mx-auto text-gray-500 my-3">
        the majority have suffered alteration in some form, by injected humour,
        or randomised words which do not look even slightly believable.
      </p>
      <div className=" grid md:grid-col-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <ServiceCard key={index} servicesData={service}></ServiceCard>
        ))}
      </div>
    <button className=" btn btn-md btn-outline border-orange-600 text-orange-600 mx-auto flex my-8 hover:text-white hover:bg-orange-600 hover:border-none">More Service</button>
    </div>
  );
};

export default Servics;
