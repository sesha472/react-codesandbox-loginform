import { useState } from "react";
import "./styles.css";

export default function App() {
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const userdataHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitHanlder = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="App">
      <form onSubmit={submitHanlder}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={userdataHandler}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={userdataHandler}
        />
        <input type="submit" name="submit" />
      </form>
    </div>
  );
}
