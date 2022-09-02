import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import CleanType from './Components/Pages/CleanTypes/CleanType';
import HomeCleaning from './Components/Pages/Services/Home Cleaning/HomeCleaning';
import OfficeCLeaning from './Components/Pages/Services/Office Cleaning/OfficeCLeaning';
function App() {
  return (
    <div>
      <Router>
      <Header />

        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/clean-types' exact element={<CleanType />} />
        </Routes>
        <Routes>
          <Route path='/home-cleaning' exact element={<HomeCleaning />} />
        </Routes>
        <Routes>
          <Route path='/office-cleaning' exact element={<OfficeCLeaning />} />
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
