import { useNavigate } from "react-router-dom";

import { ArrowLeft } from "phosphor-react";

import { Button } from "../../components/Button";

import { NotFoundBody } from "./styles";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundBody>
      <h1>Ooops... Página não encontrada</h1>
      <h5>
        Está página não existe ou não pode ser carregada, clique no botão abaixo
        para voltar a página principal.
      </h5>
      <Button
        size={"lg"}
        rounded={"lg"}
        style={"solid"}
        icon={<ArrowLeft />}
        onClick={() => navigate("/")}
      >
        Voltar
      </Button>
    </NotFoundBody>
  );
};
