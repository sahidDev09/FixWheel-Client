import logomain from "../../assets/carnavlobo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-zinc-800 text-white mt-8">
        <aside>
          <img className=" w-96 " src={logomain} alt="" />
          <p>
            FixWheel Industries Ltd.
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Repire</a>
          <a className="link link-hover">rent</a>
          <a className="link link-hover">Cleaining</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Press Parts</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
