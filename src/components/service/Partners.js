const techStack = [
  { id: 1, name: ".NET", image: "assets/img/tech/dotnet.png" },
  { id: 2, name: "Laravel", image: "assets/img/tech/laravel.png" },
  { id: 3, name: "Angular", image: "assets/img/tech/angular.png" },
  { id: 4, name: "SQL Server", image: "assets/img/tech/sqlserver.png" },
  { id: 5, name: "PostgreSQL", image: "assets/img/tech/postgresql.png" },
  { id: 6, name: "Git", image: "assets/img/tech/git.png" },
  { id: 7, name: "Nginx", image: "assets/img/tech/nginx.png" },
  { id: 8, name: "RabbitMQ", image: "assets/img/tech/rabbitmq.svg" },
  { id: 9, name: "Red Hat", image: "assets/img/tech/redhat.svg" },
  { id: 10, name: "Ubuntu", image: "assets/img/tech/ubuntu.svg" },
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
                className="m-0 float-left w-1/4 border-solid border-[#eee] border-2 text-center h-[145px] relative mt-[-2px] ml-[-2px] overflow-hidden transition-all duration-300 hover:border-[#ff6b6b] hover:shadow-lg cursor-pointer group hover:bg-[#ff6b6b]"
              >
                <div className="list_inner w-full h-full clear-both float-left transition-all duration-300 flex items-center justify-center relative">
                  <img
                    className="max-w-[50%] max-h-[70px] inline-block transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:filter group-hover:brightness-0 group-hover:invert"
                    src={tech.image}
                    alt={tech.name}
                  />
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
