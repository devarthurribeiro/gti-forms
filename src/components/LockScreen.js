import React, { useState } from "react";

function LockScreen() {
  const [locked, setLocked] = useState(true);
  const [password, setPassword] = useState("");

  function unlock(e) {
    e.preventDefault();
    if (password === "2123") {
      setLocked(false);
    }
  }

  window.lockScreen = () => {
    setLocked(true);
    setPassword("");
  };

  return locked ? (
    <div className="lockscreen">
      <div className="title">Insira o PIN</div>
      <br />
      <br />
      <div className="flex flex-center flex-wrap">
        <img
          src="https://image.flaticon.com/icons/png/512/891/891403.png"
          width="120px"
          alt=""
        />
        <div className="input-lock">
          <form onSubmit={unlock}>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              type="password"
              className="input"
            />
          </form>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default LockScreen;
