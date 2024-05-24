import { StackContainer } from "./styles";
import stackIcon from "../../../assets/stack-icons/bootstrap5.svg"

export function StackCard(){
  return(
    <StackContainer>
      <img src={stackIcon} alt="" />
    </StackContainer>
  )
}