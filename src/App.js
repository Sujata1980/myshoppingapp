import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Ourproduct from './components/Ourproduct';

function App() {
  const[selectedCategories,setSelectedCategories] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([]);
  const[selectedPrice,setSelectedPrice] = useState([]);
  const[selectedRam,setSelectedRam] = useState([]);

  


  const handleCategoryClick = (category) => {
    setSelectedCategories([category]); // Only one category selected at a time
  };
  return (
    <div>
      <Navbar onCategoryClick={handleCategoryClick}/>
      <div className="main-content">
        <Sidebar 
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedRam={selectedRam}
        setSelectedRam={setSelectedRam}

        />      
        <Ourproduct 
        selectedCategories={selectedCategories}
        selectedBrands={selectedBrands}
        selectedPrice={selectedPrice}
        selectedRam={selectedRam}
        />
      </div>  
    </div>
  );
}

export default App;
