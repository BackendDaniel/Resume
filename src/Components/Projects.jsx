import nike from "../assets/nike.png";
import education from "../assets/education.png";
import ecomm from "../assets/ecomm.png";
import portfolio from "../assets/portfolio.png";
const Projects = () => {
  return (
    <section>
      <div className="container m-auto px-4"></div>
      <div className="container m-auto px-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="flex flex-col lg:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5">
            <img
              src={portfolio}
              width={400}
              alt="Portfolio website"
              className="w-full h-auto"
            />
            <h3 className="font-semibold text-2xl mt-8">Portfolio website</h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive Portfolio website built with Vite ReactJS and Tailwind
              CSS with amaizing features and functionality <br />
              Vite ReactJS, Tailwind CSS, EmailJs for message
            </p>
            <div className="flex justify-evenly gap-2 mt-12">
              <a
                href="https://github.com/BackendDaniel/My-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700"
              >
                {" "}
                Live Preview
              </a>
              <a
                href="https://github.com/BackendDaniel/My-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                Check github
              </a>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5">
            <img
              src={nike}
              width={400}
              alt="Shoe store website"
              className="w-full h-auto"
            />
            <h3 className="font-semibold text-2xl mt-8">Shoe store website</h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive Ecommerce website built with ReactJS, Vite, TailwindCSS{" "}
              <br />
              its an online Shoe Store with amazing animations and design
            </p>
            <div className="flex justify-evenly gap-2 mt-12">
              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700"
              >
                {" "}
                Live Preview
              </a>
              <a
                href="https://github.com/BackendDaniel/BackendDaniel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                Check github
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 mt-11">
          <div className="border border-gray-500 rounded-md p-5">
            <img
              src={ecomm}
              width={400}
              alt="phone store website"
              className="w-full h-auto"
            />
            <h3 className="border border-gray-500 rounded-md p-5">
              Phone store website
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Ongoing Responsive E-commerce web project. Online phone store with
              a strong backend, payment gateway and database
              <br />
              ReactJS, Tailwind CSS, NodeJS, Firebase, Paystack .
            </p>
            <div className="flex justify-evenly gap-2 mt-12">
              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-700"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/BackendDaniel/Special"
                target="_blank"
                rel="noopener noreferer"
                className="px-6 py-3 border rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                Check github
              </a>
            </div>
          </div>
          <div className="border border-gray-500 rounded-md p-5">
            <img
              src={education}
              width={400}
              alt="IT firm website"
              className="w-full h-auto"
            />
            <h3 className="font-semibold text-2xl mt-8">IT Firm website</h3>
            <p className="text-gray-400 text-sm mt-2">
              Responsive React project with amazing functionality smooth HTML
              layout with darkmode Send and receive emails through the contact
              form <br />
              Vite ReactJS, Tailwind CSS, emailjs for message
            </p>
            <div className="flex justify-evenly gap-2 mt-12">
              <a
                href="https://"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-sm bg-gradient-to-t from-blue-500 to-cyan-500 rounded-full  hover:from-blue-700 hover:to-cyan-700"
              >
                Live Preview
              </a>
              <a
                href="https://github.com/BackendDaniel/Projects-completed"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 text-sm border rounded-full hover:border-blue-500 hover:text-blue-500"
              >
                Check GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
