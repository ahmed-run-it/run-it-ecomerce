
import { CategoryCarde } from "./categoryCard/CategoryCad"
import Clothe from "../../../../images/clothe.png";
import Cat2 from "../../../../images/cat2.png";
import laptop from "../../../../images/labtop.png";
import Sale from "../../../../images/sale.png";
import { Section } from "../subTitle/section";
import { SubTitle } from "../subTitle/sbTitle";
export const Category=()=>{
return <Section>
      <Section.Header>
        <SubTitle>
          <SubTitle.Title title="التصنيفات"/>
          <SubTitle.BtnTitle title="المزيد" />
        </SubTitle>
      </Section.Header>
      <Section.Body className="grid grid-cols-2 gap-24  md:grid-cols-4 place-items-center">
       <CategoryCarde title="أجهزة منزلية" img={Clothe} background="#F4DBA4" />
       <CategoryCarde title="أجهزة منزلية" img={Cat2} background="#FF6262" />
       <CategoryCarde title="أجهزة منزلية" img={laptop} background="#0034FF" />
       <CategoryCarde title="أجهزة منزلية" img={Sale} background="#FF6262" />
      </Section.Body>
     </Section>

}