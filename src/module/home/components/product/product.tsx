import { Section } from "../subTitle/section"
import { SubTitle } from "../subTitle/sbTitle"
import Pro1 from "../../../../images/prod1.png";
import Pro3 from "../../../../images/prod3.png";
import Pro4 from "../../../../images/prod4.png";
import FavOff from "../../../../images/fav-off.png";
import Rate from "../../../../images/rate.png";
import { Card } from "./productCard";
export const Product=()=>{
return <Section className="mt-20">
      <Section.Header>
        <SubTitle>
          <SubTitle.Title title="الاكثر مبيعا"/>
          <SubTitle.BtnTitle title="المزيد" />
        </SubTitle>
      </Section.Header>
      <Section.Body className="grid grid-cols-2 gap-24  md:grid-cols-4 place-items-center">
       <Card className="w-full px-5 h-[300px] rounded-[8px] border-none bg-white shadow-[0_2px_2px_0_rgba(151,151,151,0.5)]">
       <Card.Img src={Pro1} className="w-full h-56"/>
       <div className="flex justify-end mx-2"><img  className="text-center" 
          style={{
            height:"24px",
            width:"26px"
          }} src={FavOff} 
          alt="fav off"
          /></div>
          <Card.Body>
            <Card.Title className="card-title">
            ساعة يد ذكية
            </Card.Title>
            <Card.Text>
            <div className="flex justify-between items-center">
                            <div className="flex">
                                <img
                                    className=""
                                    src={Rate}
                                    alt=""
                                    height="12px"
                                    width="12px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="flex">
                                <p className="card-price">8080</p>
                                <p className="card-currency mx-1">جنيه</p>
                            </div>
                        </div> 
            </Card.Text>
          </Card.Body>
       </Card>
       <Card className="w-full px-5 h-[300px] rounded-[8px] border-none bg-white shadow-[0_2px_2px_0_rgba(151,151,151,0.5)]">
       <Card.Img src={Pro4} className="w-full h-56"/>
       <div className="flex justify-end mx-2"><img alt="Fav off" className="text-center" 
          style={{
            height:"24px",
            width:"26px"
          }} src={FavOff} /></div>
          <Card.Body>
            <Card.Title className="card-title">
            ساعة يد ذكية
            </Card.Title>
            <Card.Text>
            <div className="flex justify-between items-center">
                            <div className="flex">
                                <img
                                    className=""
                                    src={Rate}
                                    alt=""
                                    height="12px"
                                    width="12px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="flex">
                                <p className="card-price">8080</p>
                                <p className="card-currency mx-1">جنيه</p>
                            </div>
                        </div> 
            </Card.Text>
          </Card.Body>
       </Card>
       <Card className="w-full px-5 h-[300px] rounded-[8px] border-none bg-white shadow-[0_2px_2px_0_rgba(151,151,151,0.5)]">
       <Card.Img src={Pro1} className="w-full h-56"/>
       <div className="flex justify-end mx-2"><img className="text-center" 
          style={{
            height:"24px",
            width:"26px"
          }} src={FavOff} 
          alt="fav off"
          /></div>
          <Card.Body>
            <Card.Title className="card-title">
            ساعة يد ذكية
            </Card.Title>
            <Card.Text>
            <div className="flex justify-between items-center">
                            <div className="flex">
                                <img
                                    className=""
                                    src={Rate}
                                    alt=""
                                    height="12px"
                                    width="12px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="flex">
                                <p className="card-price">8080</p>
                                <p className="card-currency mx-1">جنيه</p>
                            </div>
                        </div> 
            </Card.Text>
          </Card.Body>
       </Card>
       <Card className="w-full px-5 h-[300px] rounded-[8px] border-none bg-white shadow-[0_2px_2px_0_rgba(151,151,151,0.5)]">
       <Card.Img src={Pro3} className="w-full h-56"/>
       <div className="flex justify-end mx-2"><img className="text-center" 
          style={{
            height:"24px",
            width:"26px"
          }} src={FavOff} 
          alt="fav off"
          /></div>
          <Card.Body>
            <Card.Title className="card-title">
            ساعة يد ذكية
            </Card.Title>
            <Card.Text>
            <div className="flex justify-between items-center">
                            <div className="flex">
                                <img
                                    className=""
                                    src={Rate}
                                    alt=""
                                    height="12px"
                                    width="12px"
                                />
                                <div className="card-rate mx-2">4.5</div>
                            </div>
                            <div className="flex">
                                <p className="card-price">8080</p>
                                <p className="card-currency mx-1">جنيه</p>
                            </div>
                        </div> 
            </Card.Text>
          </Card.Body>
       </Card>
      </Section.Body>
     </Section>

}