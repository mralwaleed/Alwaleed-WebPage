const techStack = [
  { id: 1,  image: "/assets/img/tech/dotnet.png" },
  { id: 2,  image: "../assets/img/tech/dotnet.svg" },
  { id: 3,  image: "assets/img/tech/dotnet.png" },
  { id: 4, name: "Spring Boot", image: "assets/img/tech/dotnet.png" },
  { id: 5, name: "Flask", image: "assets/img/tech/flask.png" },
  { id: 6, name: "SQL Server", image: "assets/img/tech/sqlserver.png" },
  { id: 7, name: "PostgreSQL", image: "assets/img/tech/postgresql.png" },
  { id: 8, name: "Git", image: "assets/img/tech/git.png" },
  { id: 9, name: "Nginx", image: "assets/img/tech/nginx.png" },
  { id: 10, name: "Hangfire", image: "assets/img/tech/hangfire.png" },
  { id: 11, name: "RabbitMQ", image: "assets/img/tech/rabbitmq.png" },
];

const TechnologiesTools = () => {
  return (
    <div className="tokyo_tm_partners w-full h-auto clear-both float-left bg-white py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Technologies & Tools</h3>
        </div>
        <div className="partners_inner w-full h-auto clear-both float-left">
          <ul className="mt-[-2px] mr-[-10px] mb-[-2px] ml-[-2px] list-none pt-[2px] float-left pl-[2px]">
            {techStack.map((tech) => (
              <li
                key={tech.id}
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] leading-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden"
              >
                <div className="list_inner w-full h-full clear-both float-left opacity-80 transition-all duration-300 hover:opacity-100 flex flex-col items-center justify-center">
                  <img
                    className="max-w-[50%] max-h-[70px] inline-block mb-2"
                    src={tech.image}
                    alt={tech.name}
                  />
                  <span className="block text-[15px] font-semibold text-black">{tech.name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default TechnologiesTools;
