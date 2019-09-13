import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

export const App = () => {
  return (
    <Container className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Container>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
