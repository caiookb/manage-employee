import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, TextInput, Icon, Button } from "./components";

function App() {
  return (
    <div className="App">
      <Button title={"Add new employee"} color={"green"} icon={"plus"} />
      <br></br>

      <Button size={"sm"} title={"Delete"} color={"red"} />
      <br></br>

      <Button size={"sm"} title={"Register"} color={"green"} />
      <br></br>

      <Button size={"sm"} title={"Cancel"} color={"green"} />
      <br></br>

      <Icon size={"sm"} icon={"email"} />
      <br></br>

      <TextInput icon={"search"} placeholder={"Search by name or team... "} />
      <br></br>
      <Card />
    </div>
  );
}

export default App;
