import cv from "../assets/cv.pdf";
const About = () => {
  return (
    <section className="container m-auto px-4 py-14 z-50">
      <h2 className="text-2xl font-semibold mb-8">About me</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 z-50">
        {[
          {
            year: "2018",
            content:
              "Started my journey in software development with a fascination for creating impactful digital solutions.",
          },
          {
            year: "2019",
            content:
              "Explored front-end technologies like HTML, CSS, and JavaScript, building a foundation for UI/UX design.",
          },
          {
            year: "2020",
            content:
              "Dived into back-end development with Node.js, gaining expertise in server-side programming.",
          },
          {
            year: "2021",
            content:
              "Collaborated on various projects, enhancing teamwork and communication skills.",
          },
          {
            year: "2022",
            content:
              "Adopted React.js for building dynamic and responsive user interfaces, improving proficiency in modern frameworks.",
          },
          {
            year: "2023",
            content:
              "Contributed to open-source projects, embracing continuous learning and staying updated with industry trends.",
          },
          {
            year: "2024",
            content:
              "Currently exploring new technologies, experimenting with side projects, and seeking exciting collaborations.",
          },
        ].map((entry, index) => (
          <div
            key={index}
            className="relative -z-50 ml-20 before:w-3 before:h-3 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded before:-left-5"
          >
            <h3 className="pl-absolute -left-20 text-lg font-semibold -z-50">
              {entry.year}
            </h3>
            <p className="mt-4 -z-50">{entry.content}</p>
          </div>
        ))}
      </div>
      <div className="container text-center py-10 -z-50">
        <a
          href={cv}
          className="pt-2 px-6 py-2 border rounded-full w-[150px] cursor-pointer hover:border-blue-500 hover:text-blue-500 -z-"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>{" "}
      </div>
    </section>
  );
};

export default About;
