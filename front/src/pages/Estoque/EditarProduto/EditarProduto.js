import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import "./EditarProduto.css";

function Estoque() {
  return (
    <>
      <div className="content">
        <main>
          <div className="sidebar">
            <ul>
              <li>
                <a>
                  <FaShoppingCart className="icon-sidebar" />
                </a>
              </li>
              <li>
                <a>
                  <FaCashRegister className="icon-sidebar" />
                </a>
              </li>
              <li>
                <a>
                  <FaBoxOpen className="icon-sidebar" />
                </a>
              </li>
              <li>
                <a>
                  <FaUserTie className="icon-sidebar" />
                </a>
              </li>
              <li>
                <a>
                  <FaChartLine className="icon-sidebar" />
                </a>
              </li>
              <li>
                <a>
                  <GoGear className="icon-sidebar" />
                </a>
              </li>
            </ul>
          </div>
          <div className="electron-back">
            <div className="titulo-page">
              <FaArrowAltCircleLeft className="icon-back" />
              EDITAR PRODUTO
            </div>

            <div className="container-inputs">
              <form className="nome-produto">
                <label className="label-name">Nome do Produto:</label>
                <br />
                <input
                  className="input-border"
                  type="text"
                  placeholder="Nome do Produto"
                />
              </form>

              <form className="ean-input">
                <label className="label-name">EAN: </label>
                <br />
                <input className="input-border" type="text" placeholder="Ean" />
              </form>

              <form className="estoque-input">
                <label className="label-name">Estoque:</label>
                <br />
                <input
                  className="input-border"
                  type="text"
                  placeholder="Estoque"
                />
              </form>

              <form className="preco-custo-input">
                <label className="label-name">Preço de custo:</label>
                <br />
                <input
                  className="input-border"
                  type="money"
                  placeholder="Preço de custo"
                />
              </form>

              <form className="preco-venda-input">
                <label className="label-name">Preço de venda:</label>
                <br />
                <input
                  className="input-border"
                  type="money"
                  placeholder="Preço de venda"
                />
              </form>

              <form className="categoria-input">
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
              </form>

              <form className="valor-maximo-desconto-input">
                <label className="label-name">Valor Máximo Desconto:</label>
                <br />
                <input
                  className="input-border"
                  type="money"
                  placeholder="Valor Máximo Desconto"
                />
              </form>

              <form className="nome-produto">
                <label className="label-name">Percentual de Comissão:</label>
                <br />
                <input
                  className="input-border"
                  type="text"
                  placeholder="Percentual de Comissão"
                />
              </form>

              <form className="nome-produto">
                <label className="label-name">Valor Fixo de Comissão:</label>
                <br />
                <input
                  className="input-border"
                  type="text"
                  placeholder="Valor Fixo de Comissão"
                />
              </form>
            </div>

            <div className="outline-button">
              <button className="salvar-produto-button">Salvar</button>
              <button className="excluir-button">Excluir</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Estoque;
