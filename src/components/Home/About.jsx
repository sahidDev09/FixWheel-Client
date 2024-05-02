import aboutperson from "../../assets/images/about_us/person.jpg";
import aboutparts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-14 my-14 ">
      <div className=" relative">
        <img className=" w-3/4" src={aboutperson} alt="" />
        <img className=" absolute top-1/2 md:w-96 w-52 right-0 border-8 border-white" src={aboutparts} alt="" />
      </div>
      <div className=" space-y-8">
        <h1 className=" text-xl font-semibold text-red-500">About us</h1>
        <h1 className=" md:text-6xl text-3xl font-bold ">
          We are qualified & of experience in this field
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
        <button className=" btn btn-md bg-orange-600 border-none text-white">Get more info</button>
      </div>
    </div>
  );
};

export default About;
