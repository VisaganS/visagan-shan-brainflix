import './App.scss';
import HomePage from './pages/HomePage/HomePage.js';
import Upload from './pages/Upload/Upload.js';
import Header from './components/Header/Header.js'
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="/upload" element={<Upload/>}/>
    <Route path="/videos/:id" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;