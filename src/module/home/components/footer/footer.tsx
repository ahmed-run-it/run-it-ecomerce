
import facebook from "../../../../images/facebook.png";
import instagram from "../../../../images/instagram.png";
import twitter from "../../../../images/twitter.png";
import phone from "../../../../images/phone.png";
import { Container } from '../container/container';
const Footer = () => {
    return (
        <div className="footer-background footer mt-3 pt-2" style={{ maxHeight: "50px" }}>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="footer-shroot ">الشروط والاحكام</div>
                        <div className="footer-shroot mx-2">سيايه الخصوصيه</div>
                        <div className="footer-shroot mx-2">اتصل بنا</div>
                    </div>
                    <div
                        
                        className="flex justify-between items-center ">
                        <div className="flex mx-2 items-center">
                            <img width="20px" height="20px" src={phone} alt="" />
                            <p className="footer-phone">0122455346356</p>
                        </div>
                        <div style={{ cursor: "pointer" }}>
                            <img width="20px" height="20px" src={facebook} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={instagram} alt="" />
                        </div>
                        <div style={{ cursor: "pointer" }} className="">
                            <img width="20px" height="20px" src={twitter} alt="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer