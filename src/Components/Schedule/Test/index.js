import { useState } from "react";
import api from "../../../Services/api";
import { StyledButton, StyledDateInput, StyledDivTime, Styledheader, StyledLabel } from "./style";

const TestComponent = ({id}) => {

  const [time, setTime] = useState("");
  const [day, setDay] = useState("Domingo");

    const handleSubmit = () => {

      const data = {
        time: time.replace(":", ""),
        day: day
      }
      console.log("ok")
        api.post(`/restaurant/check/${id}`, data)
        .then((response) => {
          console.log(response)
          if(response.data === "open"){
            alert("Restaurante Aberto")
          }else{
            alert("Restaurante Fechado")
          }
          })
          .catch((error) => {
            alert("Error!")
          });
      };
    

    return (
      <div>
        <Styledheader>
          <StyledLabel>Horario</StyledLabel>
          <StyledLabel>Dia:</StyledLabel>
          <StyledLabel></StyledLabel>
        </Styledheader>
        <Styledheader>
                <StyledDivTime>
                    <StyledDateInput type="text" pattern="([01][0-9]|2[0-3]):[0-5][0-9]" placeholder="HH:MM" title="HH:MM" required onChange={(e) => setTime(e.target.value)} />
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
                  <StyledButton type="button" onClick={() => handleSubmit()}>Consultar Disponibilidade</StyledButton>
                </StyledDivTime>
        </Styledheader>
      </div>
      );
}

export default TestComponent