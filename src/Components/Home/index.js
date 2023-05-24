import { useEffect, useState } from "react";
import api from "../../Services/api";
import GoBackButton from "../Button";
import CardComponent from "./Card";
import { StyledDiv, StyledTitle } from "./style";

function HomeComponent() {

    const [restaurants, setRestaurants] = useState();

    useEffect(() => {
    
        api
        .get(`/restaurant`)
          .then((response) => {
            setRestaurants(response.data);
          })
          .catch((e) => console.log(e));
    
    }, []);
    
  return (
    <>
    <StyledTitle>Gerenciador de Horarios</StyledTitle>
    <StyledDiv>
    { restaurants && 
        restaurants.map((value,key)=>
        <CardComponent restaurant={value} />
        )
    }
    <GoBackButton add={true} />
    </StyledDiv>
    </>
  );
}

export default HomeComponent;
