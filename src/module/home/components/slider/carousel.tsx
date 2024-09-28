import { Item } from "./item";
import { Navigation } from "./navigation";
import {Slider } from "./slider";
import sliderimg from "../../../../images/slider1.png";
import slider4 from "../../../../images/slider4.png";
import prod3 from "../../../../images/prod3.png";
import prod4 from "../../../../images/prod4.png";


export function Carousel() {
return <Slider >
        <Item className="flex items-center justify-center slider-background">
                    <img
                        style={{ 
                          height: "296px", width: "313.53px" ,textAlign:"center",            
                        }}
                        className=""
                        src={slider4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
        </Item>
        <Item className="slider-background2 flex items-center justify-center" >
        <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={sliderimg}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
        </Item>
        <Item className="flex items-center justify-center slider-background3">
    
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                
        </Item>
        <Item className="flex items-center justify-center slider-background4">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={prod4}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
        </Item>
      <Navigation />
      </Slider>
}