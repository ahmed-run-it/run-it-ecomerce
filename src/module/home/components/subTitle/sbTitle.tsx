import React, { FC, ReactNode } from "react"



interface TitleProps {
  title:string
}

interface BtnTitleProps {
  title:string
}
interface ChildrenProps {
  children: ReactNode;
}
interface SubTitleProps {
  Title:FC<TitleProps>
  BtnTitle:FC<BtnTitleProps>
}

export const SubTitle:FC<ChildrenProps> & SubTitleProps=({children})=> {
 return <div className="flex justify-between my-10">
   {children}
</div>
}



const Title:React.FC<TitleProps>=({title})=> {
return <p className="sub-tile"> {title} </p> 
} 


const BtnTitle : React.FC<BtnTitleProps>= ({title})=>{
  return <p className="shopping-now">{ title }</p>
}

SubTitle.Title= Title;
SubTitle.BtnTitle=BtnTitle;
