const knowledge = [
  { id: 1, text: ".NET, C#, PHP, Java, Python, TypeScript" },
  { id: 2, text: "Laravel, Angular, Spring Boot, Flask" },
  { id: 3, text: "SQL Server, PostgreSQL, SSMS" },
  { id: 4, text: "Git, Nginx, Hangfire, RabbitMQ" },
  { id: 5, text: "Clean Architecture, Microservices, REST APIs" },
];
const interests = [
  { id: 1, text: "Technical Leadership" },
  { id: 2, text: "Scalable System Design" },
  { id: 3, text: "Payment Gateway Solutions" },
  { id: 4, text: "Domain Registry Services" },
  { id: 5, text: "Continuous Learning & Mentoring" },
];

const KnowledgeInterests = () => {
  return (
    <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] pr-[0px] pb-[90px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Knowledge</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {knowledge.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Interests</h3>
            </div>
            <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none">
                {interests.map((item) => (
                  <li className="m-0 pl-[25px] relative" key={item.id}>
                    <span>
                      <img
                        className="svg text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KnowledgeInterests;
