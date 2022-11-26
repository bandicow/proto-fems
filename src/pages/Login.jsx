import React, { useState, useContext } from "react";
// import ErrorMessage from "./ErrorMessage";
import { ContextProvider } from "../contexts/ContextProvider";

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(ContextProvider);

  // https://jw910911.tistory.com/117
  // /차이점은 application/json은 {key: value}의 형태로 전송되지만 application/x-www-form-urlencoded는 key=value&key=value의 형태로 전달된다는 점입니다.

  // const submitLogin = async () => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: JSON.stringify(
  //       `grant_type=&username=${id}&password=${password}&scope=&client_id=&client_secret=`
  //     ),
  //   };
  //   const response = await fetch("/Token", requestOptions);
  //   const data = await response.json();

  //   if (!response.ok) {
  //     setErrorMessage(data.detail);
  //   } else {
  //     setToken(data.access_token);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submitLogin();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>Email Address</label>
          <div>
            <input
              type="text"
              placeholder="Enter id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control">
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
        </div>
        {/* <ErrorMessage message={errorMessage} /> */}
        <br />
        <button className="button is-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
