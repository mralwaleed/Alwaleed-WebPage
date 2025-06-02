import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import FunFact from "./service/FunFact";
import Partners from "./service/Partners";
import Pricing from "./service/Pricing";
import ServiceItems from "./service/ServiceItems";

const Expertise = () => {
  return (
    <SectionContainer name={"expertise"}>
      <div className="container">
        <div className="tokyo_tm_services w-full h-auto clear-both float-left py-[100px] px-0">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle pageName={"Expertise"} title={"Expertise"} />
            </div>
          </div>
          <ServiceItems />
        </div>
      </div>
      <Partners />
      <FunFact />
      <Pricing />
    </SectionContainer>
  );
};
export default Expertise;
