import React, { useState, useEffect } from "react";

import db from "../services/firebase";
import tables from "../forms/tables";

const forms = [
  {
    ref: "pc",
    title: "Computadores"
  },
  {
    ref: "monitor",
    title: "Monitor"
  },
  {
    ref: "printer",
    title: "Impressora"
  },
  {
    ref: "power",
    title: "Estabilizador/Nobreak"
  }
];

function useCollection(ref, limit) {
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
          snapshot.forEach(doc => list.push(doc.data()));
          setLoading(false);
          setPcs(list);
        },
        err => setError(err)
      );

    return () => unsubscribe();
  }, [limit, ref]);

  return {
    error,
    loading,
    pcs
  };
}

function ListItem() {
  const [ref, setRef] = useState("pc");
  const [limit, setLimit] = useState(10);
  const { pcs, loading } = useCollection(ref, limit);

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
        {forms.map(item => (
          <a
            onClick={() => setRef(item.ref)}
            className={ref === item.ref ? "is-active" : ""}
          >
            {item.title}
          </a>
        ))}
      </p>
      {loading ? (
        <div className="container">
          <progress className="progress is-small is-primary" max="100">
            15%
          </progress>
        </div>
      ) : (
        <table className="table is-fullwidth">
          <thead>
            {tables[ref].map(t => (
              <th>{t.title}</th>
            ))}
          </thead>
          <tbody>
            {pcs.map(pc => (
              <tr>
                {tables[ref].map(f => (
                  <td>{pc[f.field]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
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
