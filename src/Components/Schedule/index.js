import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import GoBackButton from "../Button";
import NewRuleComponent from "./NewRule";
import RuleComponent from "./Rules";
import TestComponent from "./Test";
import { StyledDivRules, StyledH1, StyledRulesBoard, StyledRulesBody } from "./style";

const ScheduleComponent = (props) => {
    const [restaurant, setRestaurant] = useState({})
    const { id } = useParams()

    const getRestaurant = () => {
      api
      .get(`/restaurant/${id}`)
        .then((response) => {
          setRestaurant(response.data);
        })
        .catch((e) => console.log(e));
    }

    useEffect(() => {
      getRestaurant()
    }, []);

    return (
        <StyledRulesBody>
        <StyledRulesBoard>
          <StyledH1>{restaurant.name}</StyledH1>
          <NewRuleComponent id={restaurant.id} get={getRestaurant} />
          <StyledDivRules>
          { restaurant.rule && 
          restaurant.rule.map((value,key)=>
          <RuleComponent rule={value} get={getRestaurant} key={key} />
          )}
          </StyledDivRules>
        <TestComponent id={restaurant.id} />
        </StyledRulesBoard>

        <GoBackButton add={false} />
        </StyledRulesBody>
    
      );
}

export default ScheduleComponent