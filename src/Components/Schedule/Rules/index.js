import api from "../../../Services/api";
import { StyledButton, StyledLabel, Styledheader } from "./style";

const RuleComponent = ({rule, get}) => {

    const Delete = () => {
        api.delete(`/rule/${rule.id}`)
        .then(() => {
            get();
          })
          .catch((error) => {
            alert("Erro ao deletar regra")
          });
    }

    return (
        <Styledheader>
            <StyledLabel>{rule.start.substr(0, 2)}:{rule.start.substr(-2)}/{rule.end.substr(0, 2)}:{rule.end.substr(-2)}</StyledLabel>
            <StyledLabel>{rule.day}</StyledLabel>
            <StyledLabel>
              <StyledButton onClick={() => Delete()}>delete</StyledButton>
            </StyledLabel>
        </Styledheader>
    
      );
}

export default RuleComponent