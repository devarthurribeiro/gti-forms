import React, { useState, useEffect } from "react";

import db from "../services/firebase";

function usePcs(ref, limit) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [pcs, setPcs] = React.useState([]);

  useEffect(() => {
    const unsubscribe = db.forms
      .collection(ref)
      .limit(limit)
      .onSnapshot(
        snapshot => {
          const list = [];
          snapshot.forEach(doc => {
            list.push(doc.data());
          });
          console.log(list);
          setLoading(false);
          setPcs(list);
        },
        err => {
          setError(err);
        }
      );

    return () => unsubscribe();
  }, [limit, ref]);

  return {
    error,
    loading,
    pcs
  };
}

function Item() {
  return (
    <div className="flex">
      <div></div>
    </div>
  );
}

function ListItem() {
  const [ref, setRef] = useState("pc");
  const [limit, setLimit] = useState(10);
  const { pcs, loading } = usePcs(ref, limit);

  return (
    <nav className="panel">
      <p className="panel-heading">Equipamentos</p>
      <div className="panel-block">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Buscar" />
          <span className="icon is-left">
            <i className="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </div>
      <p className="panel-tabs">
        <a
          onClick={() => setRef("pc")}
          className={ref === "pc" ? "is-active" : ""}
        >
          Computador
        </a>
        <a
          onClick={() => setRef("monitor")}
          className={ref === "monitor" ? "is-active" : ""}
        >
          Monitor
        </a>
        <a
          onClick={() => setRef("power")}
          className={ref === "power" ? "is-active" : ""}
        >
          Estabilizador
        </a>
        <a
          onClick={() => setRef("printer")}
          className={ref === "printer" ? "is-active" : ""}
        >
          Impressora
        </a>
      </p>
      {loading ? (
        <div className="container">
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        </div>
      ) : (
        pcs.map((pc, index) => (
          <a key={index} className="panel-block is-active">
            <span className="panel-icon">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            Nome {pc.pcName} <br />
            Local {pc.location}
          </a>
        ))
      )}
      <div className="panel-block">
        <button
          onClick={() => setLimit(limit + 10)}
          className="button is-link is-outlined is-fullwidth"
        >
          Ver mais...
        </button>
      </div>
    </nav>
  );
}

export default ListItem;
