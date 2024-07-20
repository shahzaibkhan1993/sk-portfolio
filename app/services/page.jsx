"use client";
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import Bulb from '@/components/Bulb';
import { FaLaptopCode } from "react-icons/fa";
import { MdPhoneAndroid } from "react-icons/md";
import { SiNextui } from "react-icons/si";
import { MdOutlineDataThresholding,MdEditDocument  } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
const services=[
  {
    num:'01',
    title:'Web Development',
    description:"Passionate web developer with a strong foundation in front-end & back-end technologies. Skilled in building responsive websites as well as web applications using variety of programming languages like Next.js, React, Angular, PHP, ASP.NET MVC, REST API, SOAP API HTML, CSS / Tailwind CSS, JavaScript. Proven ability to design, develop, and maintain complex web applications.",
    href:"/work",
    icon:<FaLaptopCode />
  },
  {
    num:'02',
    title:'Mobile Development',
    description:"Mobile app developer adept at building native and cross-platform applications. Proficient in languages like Java/Kotlin (Android) along with frameworks like React Native or Flutter for cross-platform development. Experience in crafting user-friendly interfaces, integrating APIs, and optimizing app performance for a seamless mobile experience.",
    href:"/work",
    icon:<MdPhoneAndroid  />
  },
  {
    num:'03',
    title:'Desktop Application Development',
    description:"I have extensive experience in desktop application development using C#, .NET (Windows Forms, WPF), Python, and Java. I excel in creating robust, high-performance applications with intuitive and efficient user interfaces. My expertise spans various frameworks, including Tkinter, PyQt, Kivy for Python, and Swing, JavaFX for Java. I am committed to delivering feature-rich, responsive applications that meet user needs and maintain high standards of code quality and performance.",
    href:"/work",
    icon:<TbDeviceDesktopAnalytics />
  },
  {
    num:'04',
    title:'Generative AI Developer',
    description:"AI-powered developer passionate about integrating generative AI into modern software applications. Leverages Python frameworks (Flask, Django, Streamlit, FastAPI) to build engaging generative AI applications. Possesses a strong understanding of AI concepts and conversational interfaces. Adept at designing and deploying scalable AI models in the cloud using platforms such as Hugging Face, TensorFlow, NLP, LLM, and ML. Develops AI-powered solutions using cutting-edge libraries like Face++, Face Recognition, Voice Recognition, ResNet, GAN, and librosa to automate tasks and empower intelligent decision-making.",
    href:"/work",
    icon:<GiArtificialIntelligence  />
  },
  {
    num:'05',
    title:'UI/UX Design',
    description:"Creative UI/UX designer with a proficiency in Figma and design principles. Skilled in crafting user-centered interfaces that are both visually appealing and intuitive. Experience in designing and prototyping interactive experiences using Figma for web and mobile applications.",
    href:"/work",
    icon:<SiNextui  />
  },
  
  {
    num:'06',
    title:'Data Anlaysis & Data Visualization',
    description:"Data enthusiast with expertise in wrangling and analyzing data using Python and its libraries (Pandas, NumPy, Matplotlib, Seaborn). Skilled at creating compelling data visualizations with Tableau and Power BI to communicate insights effectively. Experience in cleaning, manipulating, and transforming data to uncover patterns and trends.",
    href:"/work",
    icon:<MdOutlineDataThresholding />
  },
  {
    num:'07',
    title:'Software Documentation & Technical Writing',
    description:"Skilled technical writer with experience crafting clear and concise software documentation. Adept at tailoring documentation to various audiences, from developers to end-users. Proven ability to explain complex technical concepts in an easy-to-understand manner. Utilize industry best practices and tools to create informative and user-friendly documentation.",
    href:"/work",
    icon:<MdEditDocument  />
  },
  
 
];


const Services = () => {
  return (
<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container  mx-auto overflow-x-auto overflow-y-auto xl:overflow-x-auto xl:overflow-y-auto custom-scrollbar">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%', transition: { duration: 3, ease: "easeInOut" } }}
          className="flex  flex-col xl:flex-row space-x-0 xl:space-x-4 xl:space-y-0 items-center "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className={`bg-[rgba(65,47,123,0.15)] drop-shadow-2xl hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 hover:shadow-xl hover:shadow-black rounded-xl flex-shrink-0 w-full xl:h-[650px] md:w-[500px] xl:p-4 md:h-full  flex-col justify-center gap-12 group`}
              >
                {/* top */}
                <div className=" w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  {/* <Link href={service.href} className=" w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link> */}
                </div>
                {/* icon */}
                <div className="text-[44px] group-hover:text-accent transition-all duration-300">
                  <span className="flex justify-center items-center py-2">{service.icon}</span>
                </div>
                <div className="flex justify-center items-center">
                  {/* title */}
                  <h2 className="text-center text-wrap text-[20px] font-bold leading-snug text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                </div>
                <div className="flex justify-center items-center text-wrap flex-wrap sm:text-wrap">
                  {/* description */}
                  <p className="text-white/60 text-justify text-wrap break-words">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <Bulb />
    </section>
  );
}

export default Services;
