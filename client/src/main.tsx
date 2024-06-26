import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { AppContextProvider } from "./context/AppContext";
import { SearchContextProvider } from "./context/SearchContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    }
  }
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AppContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
    </AppContextProvider>
    </BrowserRouter>
  </QueryClientProvider>
  
);
