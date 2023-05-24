import { useState } from "react";
import { useNavigate } from "react-router";
import image1 from "../../../Images/cart.png";
import api from "../../../Services/api";
import { AdminWallet, StyledAdminBody, StyledAdminData, StyledAdminImg, StyledAdminItem, StyledAdminTitle, StyledItens } from "./style";

function CardComponent({restaurant, Refresh}) {

  const [Name, setName] = useState(restaurant.name);
  const [Document, setDocument] = useState(restaurant.document);
  const [Type, setType] = useState(restaurant.type);



  const navigate = useNavigate();

  function handleChangeName(event) {
    setName(event.target.value);
    }

  function handleChangeDocument(event) {
    setDocument(event.target.value);
    }

  function handleChangeType(event) {
    setType(event.target.value);
    }

  function handleSubmit(event) {

    restaurant.name = Name;
    restaurant.document = Document;
    restaurant.type = Type;

      api
        .put(`restaurant/${restaurant.id}`, restaurant).then(() => {
          window.location.reload();
        })
        .catch((error) => {
          alert("Erro!")
        });
    };

    function handleDelete(event) {
    
          api
            .delete(`restaurant/${restaurant.id}`, restaurant).then(() => {
              window.location.reload();
            })
            .catch((error) => {
              alert("Erro!")
            });
        };


  return  (<>
    { restaurant && 
    <StyledAdminBody>
      <div  >
    <AdminWallet>
        <div>
        <StyledAdminImg src={image1} />
        <StyledAdminItem defaultValue={restaurant.document} onChange={(event) => handleChangeDocument(event)}/>
        <StyledAdminItem defaultValue={restaurant.type} onChange={(event) => handleChangeType(event)}/>
        </div>
        <StyledAdminData>
            
          <StyledItens >
            <StyledAdminTitle defaultValue={restaurant.name} onChange={(event) => handleChangeName(event)}/>
          </StyledItens >

          <button onClick={() => {navigate(`/schedule/${restaurant.id}`) } } >Gerenciar</button>

          <div>
            <button onClick={() => {handleSubmit() } } >Editar</button>
            <button onClick={() => {handleDelete() } } >Excluir</button>
          </div>
        </StyledAdminData>
      </AdminWallet>
      </div>
    </StyledAdminBody>
    }
    </>
  );
}

export default CardComponent;
