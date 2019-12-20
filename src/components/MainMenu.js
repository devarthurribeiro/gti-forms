import React from "react";
import { Link } from "react-router-dom";

const menus = [
  {
    label: "Listar",
    path: "/list",
    img: "https://image.flaticon.com/icons/png/512/2312/2312410.png"
  },
  {
    label: "Cadastrar",
    path: "/forms",
    img: "https://image.flaticon.com/icons/png/512/2312/2312340.png"
  },
  {
    label: "Consultar",
    img: "https://image.flaticon.com/icons/png/512/2312/2312399.png"
  }
];

function MainMenu() {
  return (
    <div className="container">
      <div className="main-menu">
        <div className="flex flex-center flex-wrap">
          {menus.map(item => (
            <div key={item.label} className="card-menu">
              <Link to={item.path}>
                <div className="card-menu-section">
                  <div className="subtitle">
                    <b>{item.label}</b>
                  </div>
                  <img src={item.img} width="60px" alt="icon" />
                </div>
              </Link>
            </div>
          ))}
          <div className="card-menu">
            <div
              onClick={() => window.lockScreen()}
              className="card-menu-section"
            >
              <div className="subtitle">
                <b>Sair</b>
              </div>
              <img
                src="https://image.flaticon.com/icons/png/512/2312/2312263.png"
                width="60px"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
