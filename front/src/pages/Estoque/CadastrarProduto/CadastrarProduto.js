import React, { useState } from "react";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CadastrarProduto.css";

export default function CadastrarProduto() {
  const [body, setBody] = useState({});
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
  }
  return (
    <>
      <div className="content">
        <main>
          <div className="electron-back">
            <div href="#" className="titulo-page">
              <FaArrowAltCircleLeft className="icon-back" />
              CADASTRAR PRODUTO
            </div>

            <form className="container-inputs" onSubmit={handleSubmit}>
              <div className="nome-produto">
                <label className="label-name">Nome do Produto:</label>
                <br />
                <input
                  className="input-border"
                  type="text"
                  placeholder="Nome do Produto"
                  name="productName"
                />
              </div>

              <div className="ean-input">
                <label className="label-name">EAN: </label>
                <br />
                <input
                  name="EAN"
                  className="input-border"
                  type="text"
                  placeholder="Ean"
                />
              </div>

              <div className="estoque-input">
                <label className="label-name">Estoque:</label>
                <br />
                <input
                  name="Estoque"
                  className="input-border"
                  type="text"
                  placeholder="Estoque"
                />
              </div>

              <div className="preco-custo-input">
                <label className="label-name">Preço de custo:</label>
                <br />
                <input
                  name="PreçoDeCusto"
                  className="input-border"
                  type="money"
                  placeholder="Preço de custo"
                />
              </div>

              <div className="preco-venda-input">
                <label className="label-name">Preço de venda:</label>
                <br />
                <input
                  name="PreçoDeVenda"
                  className="input-border"
                  type="money"
                  placeholder="Preço de venda"
                />
              </div>

              <div className="categoria-input">
                <label className="label-name">Categoria: </label>
                <br />
                <select
                  name="Categoria"
                  id="categoria"
                  className="input-border"
                >
                  <option selected="true" disabled="disabled">
                    Escolha a opção
                  </option>
                  <option value="Medicamento"></option>
                  <option value="Perfumaria"></option>
                </select>
              </div>

              <div className="valor-maximo-desconto-input">
                <label className="label-name">Valor Máximo Desconto:</label>
                <br />
                <input
                  name="ValorMaximoDesconto"
                  className="input-border"
                  type="money"
                  placeholder="Valor Máximo Desconto"
                />
              </div>

              <div className="nome-produto">
                <label className="label-name">Percentual de Comissão:</label>
                <br />
                <input
                  name="PercentualDeComissão"
                  className="input-border"
                  type="text"
                  placeholder="Percentual de Comissão"
                />
              </div>

              <div className="nome-produto">
                <label className="label-name">Valor Fixo de Comissão:</label>
                <br />
                <input
                  name="ValorFixoDeComissão"
                  className="input-border"
                  type="text"
                  placeholder="Valor Fixo de Comissão"
                />
              </div>

              <div className="outline-button">
                <button className="cadastrar-produto-button" type="submit">
                  Cadastrar Produto
                </button>
                <button className="cancelar-button">Cancelar</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
