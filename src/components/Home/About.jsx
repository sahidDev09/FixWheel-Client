import aboutperson from "../../assets/images/about_us/person.jpg";
import aboutparts from "../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="grid grid-cols-2 gap-5 my-5">
      <div>
        <img src={aboutperson} alt="" />
        <img src={aboutparts} alt="" />
      </div>
      <div>
        <h1>About us</h1>
        <h1>We are qualified & of experience in this field</h1>
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
      </div>
    </div>
  );
};

export default About;
