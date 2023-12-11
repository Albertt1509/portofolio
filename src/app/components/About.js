"use client";
import { useTransition, useState } from "react";
import Image from "next/image";
import Tab from "../Tab";

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const frontEndData = [
    {
      id: 1,
      title: "HTML",
      image: "/images/HTML.png",
      width: 50,
      height: 50,
      alt: "HTML",
    },
    {
      id: 2,
      title: "CSS",
      image: "/images/CSS3.png",
      width: 55,
      height: 50,
      alt: "CSS",
    },
    {
      id: 3,
      title: "JavaScript",
      image: "/images/JS.png",
      width: 55,
      height: 50,
      alt: "JavaScript",
    },
    {
      id: 4,
      title: "React JS",
      image: "/images/reak.png",
      width: 63,
      height: 50,
      alt: "React JS",
    },
    {
      id: 5,
      title: "Next JS",
      image: "/images/next.jpeg",
      width: 55,
      height: 50,
      alt: "Next JS",
    },
    {
      id: 6,
      title: "Django",
      image: "/images/Dj.png",
      width: 42,
      height: 50,
      alt: "Django",
    },
    {
      id: 7,
      title: "Bootstrap",
      image: "/images/bss.png",
      width: 55,
      height: 50,
      alt: "Bootstrap",
    },
    {
      id: 8,
      title: "Tailwind",
      image: "/images/tailwind.png",
      width: 78,
      height: 80,
      alt: "Tailwind",
    },
  ];

  const backEndData = [
    {
      id: 1,
      title: "Node JS",
      image: "/images/nodejs.png",
      width: 80,
      height: 50,
      alt: "Node JS",
    },
    {
      id: 2,
      title: "Laravel",
      image: "/images/Laravel.png",
      width: 55,
      height: 50,
      alt: "Laravel",
    },
  ];

  const dataTools = [
    {
      id: 1,
      title: "PHP MyAdmin",
      image: "/images/myadmin.png",
      width: 80,
      height: 50,
      alt: "PHP MyAdmin",
    },
    {
      id: 2,
      title: "Microsoft SQL Server",
      image: "/images/sql.png",
      width: 58,
      height: 50,
      alt: "Microsoft SQL Server",
    },
    {
      id: 3,
      title: "MongoDB",
      image: "/images/MongoDb.png",
      width: 49,
      height: 50,
      alt: "MongoDB",
    },
    {
      id: 4,
      title: "GitHub",
      image: "/images/GitHub.jpeg",
      width: 49,
      height: 50,
      alt: "GitHub",
    },
  ];

  return (
    <>
      <section className="text-white mt-[90px]">
        <div className="md:flex items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <div className="md:w-1/2">
            <Image
              src="/images/ex.jpeg"
              alt="hero-icon"
              width={500}
              height={500}
              className="object-covezr"
            />
          </div>
          <div className="md:w-1/2">
            <div className="md:order-1">
              <h1 className="font-bold text-4xl mb-4">#About Me</h1>
              <p className="text-base lg:text-lg text-justify-center">
                Just newbie programmer want to a profesional programmer with
                ninja way.
              </p>
              <div className="flex flex-row mt-4">
                <Tab
                  selectTab={() => handleTabChange("skills")}
                  active={tab === "skills"}
                >
                  Skills
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("education")}
                  active={tab === "education"}
                >
                  Education
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("experience")}
                  active={tab === "experience"}
                >
                  Experience
                </Tab>
                <Tab
                  selectTab={() => handleTabChange("certificate")}
                  active={tab === "certificate"}
                >
                  Certificate
                </Tab>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {tab === "education" && (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-bold md:text-left">Education</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Contoh Item Pendidikan */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold">
                    Bachelor's Degree in Computer Science
                  </h2>
                  <p className="text-gray-400">
                    University of SCU, Graduation Year: 2024
                  </p>
                  <p className="mt-2 ">
                    I have developed my skills and insights through various work
                    experiences and projects. As a full-stack web developer and
                    front-end web developer, I am responsible for tasks assigned
                    by my seniors.
                  </p>
                </div>
                <div className="mb-8 ">
                  <h2 className="text-xl font-bold">High School Diploma</h2>
                  <p className="text-gray-400">
                    Xaverius Pringsewu High School, Graduation Year: 2020
                  </p>
                  <p className="mt-2">
                    I completed my high school education at Xaverius Pringsewu,
                    focusing on natural sciences. During my time at school, I
                    actively participated in various extracurricular activities
                    and achieved biology quiz competition. I have decided to
                    determine my educational path to pursue my studies in the
                    Information Systems department at university.
                  </p>
                </div>
              </div>
            </>
          )}
          {tab === "skills" && (
            <>
              <h1 className="mb-8 text-4xl font-bold  md:text-left">
                Front End
              </h1>
              <div className="front-end text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-6 gap-4 ">
                {frontEndData.map((item) => (
                  <div key={item.id} className="w-full ">
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                      />
                      <h1 className="mt-2">{item.title}</h1>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className="mb-8 mt-8 text-4xl font-bold  md:text-left">
                Back End
              </h1>
              <div className="front-end text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
                {backEndData.map((item) => (
                  <div key={item.id} className="w-full ">
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                      />
                      <h1 className="mt-2">{item.title}</h1>
                    </div>
                  </div>
                ))}
              </div>
              <h1 className="mb-8 mt-8 text-4xl font-bold  md:text-left">
                Data Base & Tools
              </h1>

              <div className="front-end text-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 ">
                {dataTools.map((item) => (
                  <div key={item.id} className="w-full ">
                    <div className="flex flex-col items-center">
                      <Image
                        src={item.image}
                        width={item.width}
                        height={item.height}
                        alt={item.alt}
                      />
                      <h1 className="mt-2">{item.title}</h1>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {tab === "experience" && (
            <>
              <div className="mb-8">
                <h1 className="text-4xl font-bold md:text-left">Experience</h1>
              </div>
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">
                    Fullstack Web Developer Intern
                  </h2>
                  <p className="text-gray-400">CV Medisimed</p>
                  <p className="mt-2">
                    Successfully completed an internship as a full-stack web
                    developer, contributing to various projects and gaining
                    hands-on experience in web development.
                  </p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold">
                    Front-end Web Developer
                  </h2>
                  <p className="text-gray-400">HR System Project</p>
                  <p className="mt-2">
                    Played a key role as a front-end web developer in a project
                    focused on developing a Human Resources System, delivering
                    impactful contributions to enhance the user interface and
                    overall user experience.
                  </p>
                </div>
              </div>
            </>
          )}
          {tab === "certificate" && (
            <>
              <h1 className="mb-8  text-4xl font-bold md:text-left">
                Certificate
              </h1>
              <Image
                src="/images/unika_1.png"
                width={500}
                height={500}
                className="flex justify-center mx-auto"
                alt="Certificate"
              />
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default About;
