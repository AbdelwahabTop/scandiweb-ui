import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
