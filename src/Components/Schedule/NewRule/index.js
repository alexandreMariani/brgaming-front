import { useState } from "react";
import api from "../../../Services/api";
import { StyledButton, StyledDateInput, StyledDivTime, StyledForm, StyledLabel, Styledheader } from "./style";

const NewRuleComponent = ({id, get}) => {

    const [startData, setStart] = useState("")
    const [endData, setEnd] = useState("")
    const [dayData, setDay] = useState("Domingo")

    const handleSubmit = () => {
        let Data = {
            start: startData.replace(":", ""),
            end: endData.replace(":", ""),
            day: dayData,
            restaurantId: id
        }
        console.log(Data)
        console.log("ok")
        
        api.post("rule/create", Data)
        .then((response) => {
            get();
          })
          .catch((error) => {
            alert("Erro ao criar nova regra, verifique os campos e tente novamente!")
          });
      };
    

    return (
        <div>
            <Styledheader>
                <StyledLabel>Abertura/Fechamento</StyledLabel>
                <StyledLabel>Dia:</StyledLabel>
                <StyledLabel></StyledLabel>
            </Styledheader>
           <StyledForm >
                <StyledDivTime>
                    <StyledDateInput type="text" pattern="([01][0-9]|2[0-3]):[0-5][0-9]" placeholder="HH:MM" title="HH:MM" required onChange={(e) => setStart(e.target.value)} />/
                    <StyledDateInput type="text" pattern="([01][0-9]|2[0-3]):[0-5][0-9]" placeholder="HH:MM" title="HH:MM" required onChange={(e) => setEnd(e.target.value)} />
                </StyledDivTime>

                <StyledDivTime>
                <select name="viagem" onChange={(e) => setDay(e.target.value)} required>
                    <option value="Domingo">Domingo</option>
                    <option value="Segunda-feira">Segunda-feira</option>
                    <option value="Terça-feira">Terça-feira</option>
                    <option value="Quarta-feira">Quarta-feira</option>
                    <option value="Quinta-feira">Quinta-feira</option>
                    <option value="Sexta-feira">Sexta-feira</option>
                    <option value="Sábado">Sábado</option>
                </select>
                </StyledDivTime>

                <StyledDivTime>
                <StyledButton type="button" onClick={() => handleSubmit()}>adicionar</StyledButton>
                </StyledDivTime>
            </StyledForm>
        </div>
    
      );
}

export default NewRuleComponent