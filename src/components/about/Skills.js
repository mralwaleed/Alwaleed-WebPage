const languages = [
  { id: 1, name: "C#", value: 95 },
  { id: 2, name: "PHP", value: 95 },
  { id: 3, name: "Java", value: 85 },
  { id: 4, name: "Python", value: 80 },
  { id: 5, name: "TypeScript", value: 80 },
];
const frameworks = [
  { id: 1, name: ".NET", value: 90 },
  { id: 2, name: "Laravel", value: 95 },
  { id: 3, name: "Angular", value: 90 },
  { id: 4, name: "Spring Boot", value: 80 },
  { id: 5, name: "Flask", value: 75 },
];
const databasesTools = [
  { id: 1, name: "SQL Server", value: 90 },
  { id: 2, name: "PostgreSQL", value: 85 },
  { id: 3, name: "SSMS", value: 80 },
  { id: 4, name: "Git", value: 95 },
  { id: 5, name: "Nginx", value: 85 },
  { id: 6, name: "Hangfire", value: 80 },
  { id: 7, name: "RabbitMQ", value: 80 },
];
const professionalSkills = {
  languages: [
    { id: 1, name: "English", value: 90 },
    { id: 2, name: "Arabic", value: 95 },
  ],
  softSkills: [
    { id: 3, name: "Leadership", value: 85 },
    { id: 4, name: "Teamwork", value: 90 },
    { id: 5, name: "Communication", value: 90 },
    { id: 6, name: "Problem Solving", value: 95 },
    { id: 7, name: "Critical Thinking", value: 90 },
    { id: 8, name: "Fast Learning", value: 95 },
    { id: 9, name: "Mentoring", value: 85 },
  ],
  workplaceSkills: [
    { id: 10, name: "Project Management", value: 85 },
    { id: 11, name: "Agile Methodologies", value: 85 },
    { id: 12, name: "Time Management", value: 90 },
  ],
};
const Skills = () => {
  return (
    <div className="tokyo_tm_progressbox w-full h-auto clear-both float-left bg-white pt-[93px] pr-[0px] pb-[100px] pl-[0px]">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Programming Skills</h3>
            </div>
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Languages</h4>
            </div>
            <div className="tokyo_progress mb-[20px]">
              {languages.map((skill) => (
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
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Frameworks & Libraries</h4>
            </div>
            <div className="tokyo_progress mb-[20px]">
              {frameworks.map((skill) => (
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
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Databases & Tools</h4>
            </div>
            <div className="tokyo_progress">
              {databasesTools.map((skill) => (
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
              <h3 className="text-[20px] font-bold">Professional Skills</h3>
            </div>
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Languages</h4>
            </div>
            <div className="tokyo_progress mb-[20px]">
              {professionalSkills.languages.map((skill) => (
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
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Soft Skills</h4>
            </div>
            <div className="tokyo_progress mb-[20px]">
              {professionalSkills.softSkills.map((skill) => (
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
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[20px]">
              <h4 className="text-[16px] font-semibold">Workplace Skills</h4>
            </div>
            <div className="tokyo_progress">
              {professionalSkills.workplaceSkills.map((skill) => (
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
