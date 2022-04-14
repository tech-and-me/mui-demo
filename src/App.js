import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Tour from './pages/Tour';
import SearchAppBar from './components/AppBar';


function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route exact path="*" element={<Home />} />
        {/* <Route path="/:id" element={<Tour />} /> */}
        <Route path="/tour" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
