import { useNavigate } from "react-router";
import AddButton from "../../Images/add.png";
import BackButton from "../../Images/left-arrow.png";
import { StyledImgLogo, StyledLogo } from "./style";

const GoBackButton = ({add}) => {

    const navigate = useNavigate();

  return (
    <>
    { add?
      <StyledLogo onClick={() => navigate("/register")}>
        <StyledImgLogo src={AddButton} alt="Register" />
      </StyledLogo>:
      <StyledLogo onClick={() => navigate("/")}>
        <StyledImgLogo src={BackButton} alt="go back" />
      </StyledLogo>
    }
    </>
  );
};
export default GoBackButton;
