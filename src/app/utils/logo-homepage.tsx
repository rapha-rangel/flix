import { SiNetflix, SiHbo, SiParamountplus, SiPrime, SiAppletv } from "react-icons/si";
import { TbBrandDisney } from "react-icons/tb";

export function logoHomepage(url: string){
  switch (true){
    case  url.includes("amazon"):
      return <SiPrime className="text-3xl"/>
      break;
    case  url.includes("netflix"):
      return <SiNetflix className="text-lg"/>
      break;
    case  url.includes("hbo"):
      return <SiHbo className="text-lg"/>
      break;
    case  url.includes("paramount"):
      return <SiParamountplus className="text-lg"/>
      break;
    case  url.includes("apple"):
      return <SiAppletv className="text-3xl mb-1"/>
      break;
    case  url.includes("disney"):
      return <TbBrandDisney className="text-lg"/>
      break;
      default:
  }
}