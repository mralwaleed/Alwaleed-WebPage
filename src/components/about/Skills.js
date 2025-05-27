const programming = [
  { id: 1, name: "C#", value: 95 },
  { id: 2, name: "PHP", value: 95 },
  { id: 3, name: "Java", value: 85 },
  { id: 4, name: "Python", value: 80 },
  { id: 5, name: "TypeScript", value: 80 },
  { id: 6, name: ".NET", value: 90 },
  { id: 7, name: "Laravel", value: 95 },
  { id: 8, name: "Angular", value: 90 },
  { id: 9, name: "Spring Boot", value: 80 },
  { id: 10, name: "Flask", value: 75 },
  { id: 11, name: "SQL Server", value: 90 },
  { id: 12, name: "PostgreSQL", value: 85 },
  { id: 13, name: "SSMS", value: 80 },
  { id: 14, name: "Git", value: 95 },
  { id: 15, name: "Nginx", value: 85 },
  { id: 16, name: "Hangfire", value: 80 },
  { id: 17, name: "RabbitMQ", value: 80 },
];
const language = [
  { id: 1, name: "English", value: 90 },
  { id: 2, name: "Arabic", value: 95 },
];
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Skills</h3>
            </div>
            <div className="tokyo_progress">
              {programming.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Language Skills</h3>
            </div>
            <div className="tokyo_progress">
              {language.map((skill) => (
                <div className="progress_inner" key={skill.id}>
                  <span>
                    <span className="label">{skill.name}</span>
                    <span className="number">{skill.value}%</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div
                        className="bar_in"
                        style={{ width: `${skill.value}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
