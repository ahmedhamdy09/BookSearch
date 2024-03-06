import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./Context";
import Home from "./Pages/Home/Home";
import About from "./Pages/Abouts/About";
import BookList from "./Components/BookList/BookList";
import BookDetails from "./Components/BookDetails/BooksDetails";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
