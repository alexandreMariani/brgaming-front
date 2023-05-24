import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import * as yup from "yup";
import api from "../../Services/api";
import GoBackButton from "../Button";
import {
  Box, Container,
  Header, Input,
  RegisterButton,
  RegisterFormContainer,
  StyledBody,
  TextInput
} from "./style";

const RegisterComponent = () => {
  const navigate = useNavigate();
  
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    type: yup
      .string()
      .required("Campo Obrigatório")
      .min(4, "Mínimo de 4 caracteres"),
    document: yup
    .string()
    .required("Campo obrigatorio")
    .min(11, "Minimo de 11 caracteres")
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const redirectToHome = () => {
    navigate("/")
  };

  const onSubmit = (data) => {
    api
      .post("/restaurant/create", data)
      .then((response) => {
        redirectToHome();
      })
      .catch((error) => {
        alert("Erro ao criar restaurnate!")
      });
  };

  return (
    <StyledBody>
    <RegisterFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container>
          <Header>Registro</Header>
          <Box>
            <TextInput error={!!errors.name}>Nome:</TextInput>
            <Input {...register("name")} error={!!errors.name} />
            <p>{errors.mail?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.type}>Tipo:</TextInput>
            <Input
              {...register("type")}
              error={!!errors.type}
            />
            <p>{errors.type?.message}</p>
          </Box>
          <Box>
            <TextInput error={!!errors.document}>Documento:</TextInput>
            <Input
              {...register("document")}
              error={!!errors.document}
            />
            <p>{errors.document?.message}</p>
          </Box>
          <RegisterButton type="submit">Registrar</RegisterButton>
        </Container>
      </form>
    </RegisterFormContainer>
    <GoBackButton />
    </StyledBody>
  );
};

export default RegisterComponent;
