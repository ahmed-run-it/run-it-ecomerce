import { Container } from "../container/container"

export const Section=({children ,className}:any)=>{
 return <Container className={className}>
        {children}
      </Container>
}
const Header=({children}:any)=>{
  return <>{children}</>
}
const Footer=({children,className}:any)=>{
  return <div className={className}>{children}</div>
}
const Body=({children,className}:any)=>{
  return <div className={className}>{children}</div>
}

Section.Header=Header
Section.Body=Body;
Section.Footer=Footer;


