
import laptops from '../../../../images/laptops.png'
import { Container } from '../container/container'
const DiscountSection = () => {
    return (
        <Container>
            <div className="discount-backcolor my-10  py-20 flex text-center items-center justify-around ">
                    <div className="discount-title">
                        خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
                    </div>
            
                    <img className="dicount-img" src={laptops} alt="dicount img" />
            </div>
        </Container>
    )
}

export default DiscountSection