import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// componentes
import Header from "./components/Header";
import Footer from "./components/Footer";

// pages
import Home from "./pages/Home";
import PessoaUsuaria from "./pages/PessoaUsuaria";
import Profissional from "./pages/Profissional";


const theme = {
  colors: {
    header: 'rgb(238, 238, 238)',
    body: "#fff",
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
     <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
            <Route path="/profissional" element={<Profissional />} />
          </Routes>
          <Footer />
        </BrowserRouter>
     </>
    </ThemeProvider>
  );
}

export default App;
