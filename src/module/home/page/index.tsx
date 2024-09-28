
import { BrandFeature } from "../components/brand/brandFeature";
import { Category } from "../components/category/category";
import DiscountSection from "../components/discountSection/discountSection";
import { Product } from "../components/product/product";
import { Carousel } from "../components/slider/carousel"


export const HomePage=()=>{

  return <>
    <Carousel />
    <Category />
    <Product />
    <DiscountSection />
    <Product />
    <Product />
    <BrandFeature />
     </>
}