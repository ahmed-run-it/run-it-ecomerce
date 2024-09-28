import classNames from "classnames";

interface ContainerProps {
  children:React.ReactNode;
  className?:string;
}

export const Container:React.FC<ContainerProps>=({children,className})=>{
  const combinedClassName = classNames('max-w-[1400px] mx-auto', className);

  return <div className={combinedClassName}>{children}</div>
}