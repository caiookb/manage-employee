import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, TextInput, Icon, Button, Grid } from "./components";
import Main from "./views/Main/Main";

function App() {
  return <Main />;
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
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <TextInput label={"Name *"} />
    <TextInput label={"Team"} />
    <br></br>
    <br></br>
    <br></br>
    <br></br>

    <Grid columns={[2]} display={[5, 1]}>
      <TextInput icon={"search"} placeholder={"Search by name or team... "} />
      <Button title={"Add new employee"} color={"green"} icon={"plus"} />
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Grid columns={[1, 2, 4]}>
      <TextInput label={"Name *"} />
      <TextInput label={"Email *"} type={"email"} />
      <TextInput label={"CPF *"} />
      <TextInput label={"Gender *"} type={"date"} />
      <TextInput label={"Birthdate *"} type={"date"} />
      <TextInput label={"Start date *"} type={"month"} />
      <TextInput label={"Team "} />
    </Grid>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Card />
  </div>;
}

export default App;
