import { Section } from "../subTitle/section"
import { SubTitle } from "../subTitle/sbTitle"
import Brand1 from "../../../../images/brand1.png";
import { Card } from "../product/productCard";
export const BrandFeature=()=>{
return <Section className="mt-20">
      <Section.Header>
        <SubTitle>
          <SubTitle.Title title="اشهر الماركات"/>
          <SubTitle.BtnTitle title="المزيد" />
        </SubTitle>
      </Section.Header>
      <Section.Body className="grid grid-cols-2 gap-24  md:grid-cols-6 place-items-center">
       
      <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={Brand1} />
        </Card>
      </Section.Body>
     </Section>

}