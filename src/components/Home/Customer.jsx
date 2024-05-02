import img1 from "../../assets/icons/supports/Group 32.png";
import img2 from "../../assets/icons/supports/Group 34.png";
import img3 from "../../assets/icons/supports/Group 35.png";

const Customer = () => {
  return (
    <div
      className=" bg-zinc-800 p-14 text-white md:flex items-center gap4
     justify-evenly rounded-md">
      <div className=" flex items-center gap-4">
        <img src={img1} alt="" />
        <div>
          <h1 className=" font-semibold">We are open monday-friday</h1>
          <h1 className=" text-2xl font-bold">7:00 am - 9:00 pm</h1>
        </div>
      </div>

      <div className=" flex items-center gap-4">
        <img src={img2} alt="" />
        <div>
          <h1 className=" font-semibold">Have a question?</h1>
          <h1 className=" text-2xl font-bold">+2546 251 2658</h1>
        </div>
      </div>

      <div className=" flex items-center gap-4">
        <img src={img3} alt="" />
        <div>
          <h1 className=" font-semibold">Need a repair? our address</h1>
          <h1 className=" text-2xl font-bold">Liza Street, New York</h1>
        </div>
      </div>
    </div>
  );
};

export default Customer;
