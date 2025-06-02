import { TokyoContext } from "@/src/Context";
import { useContext } from "react";

const services = [
  {
    id: 1,
    name: "Domain Registry Systems",
    text: [
      "Expert in building and upgrading secure, high-performance domain registry platforms, ensuring regulatory compliance and seamless integration with registry APIs.",
      "Led modernization projects for national domain name systems, driving business growth and service expansion.",
      "Collaborated with cross-functional teams and external stakeholders to deliver robust domain solutions."
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 2,
    name: "Scalable Payment Gateways",
    text: [
      "Designed and managed scalable payment gateway solutions, integrating providers like Checkout and HyperPay for secure, efficient transactions.",
      "Implemented background jobs and message queues (Hangfire, RabbitMQ) to enhance reliability and performance.",
      "Supported major government and enterprise products with seamless payment integration."
    ],
    image: "assets/img/news/2.jpg",
  },
  {
    id: 3,
    name: "System Architecture & Microservices",
    text: [
      "Architected and deployed microservices-based systems using .NET Core, Nginx, and modern DevOps practices.",
      "Ensured scalability, maintainability, and clean architecture across large-scale platforms.",
      "Applied best practices in clean code, modular design, and continuous integration."
    ],
    image: "assets/img/news/3.jpg",
  },
  {
    id: 4,
    name: "API Integration & Automation",
    text: [
      "Integrated complex APIs for registry, payment, and business services, enabling automation and interoperability.",
      "Developed robust background processing and job scheduling for mission-critical workflows.",
      "Enhanced system reliability and compliance through automated monitoring and alerting."
    ],
    image: "assets/img/news/4.jpg",
  },
  {
    id: 5,
    name: "Technical Leadership & Agile Delivery",
    text: [
      "Led cross-functional teams as a technical lead and project manager, delivering projects on time and within scope.",
      "Applied agile methodologies to optimize collaboration, communication, and delivery outcomes.",
      "Mentored engineers and fostered a culture of continuous learning and innovation."
    ],
    image: "assets/img/news/1.jpg",
  },
  {
    id: 6,
    name: "Business Development & Client Success",
    text: [
      "Spearheaded business development for domain and payment services, identifying key partnerships and expanding offerings.",
      "Delivered technical demos, onboarded clients, and ensured high customer satisfaction.",
      "Bridged the gap between technical and business teams to drive value and growth."
    ],
    image: "assets/img/news/2.jpg",
  },
];
const ServiceItems = () => {
  const { setServiceModal, modalToggle, modal } = useContext(TokyoContext);
  return (
    <div className="list w-full h-auto clear-both float-left">
      <ul className="ml-[-40px] list-none flex flex-wrap">
        {services.map((service) => (
          <li className="mb-[40px] w-1/3 pl-[40px]" key={service.id}>
            <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[30px] pb-[40px] pl-[30px] transition-all duration-300">
              <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                {service.id <= 9 ? `0${service.id}` : service.id}
              </span>
              <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                {service.name}
              </h3>
              <p className="text">{service.text[0].slice(0, 70)}...</p>
              <div className="tokyo_tm_read_more">
                <a
                  href="#"
                  onClick={() => {
                    modalToggle(true);
                    setServiceModal(service);
                  }}
                >
                  <span>Read More</span>
                </a>
              </div>
              <a
                className="tokyo_tm_full_link"
                href="#"
                onClick={() => {
                  modalToggle(true);
                  setServiceModal(service);
                }}
              />
              {/* Service Popup Start */}
              <img
                className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                src={service.image}
                alt="image"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ServiceItems;
