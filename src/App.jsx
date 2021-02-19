import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import "./App.css";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
  <div className="App">
    <h1>Aprendendo React</h1>

    <div className="Cards">
      <Card titulo="#11 - Mega" color="#88d820">
        <Mega qtdeNumero={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#0c0c0c">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 - Comunicacao Input" color="#0c0c0c">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicacao Indireta" color="#925555">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicacao Direta" color="#f50d0d">
        <Pai sobrenome="Freitas"></Pai>
      </Card>
      <Card titulo="#06 - Condicional V2" color="#FA6900">
        <CondicionalComIf numero={10}></CondicionalComIf>
      </Card>
      <Card titulo="#05 - Condicional V1" color="#E94C6F">
        <Condicional numero={11}></Condicional>
      </Card>
      <Card titulo="#04 - Repeticao" color="#6be94c">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 - Componente com Filhos" color="#4cb7e9">
        <ComFilhos>
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente com Parametro" color="#644ce9">
        <ComParametro
          titulo="Esse é o título"
          subtitulo="Esse é o subtítulo"
        ></ComParametro>
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#4e0918">
        <Primeiro />
      </Card>
    </div>
  </div>
);
