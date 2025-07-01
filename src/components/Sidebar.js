import React,{useState} from'react';
import Products from './Products'
import './Sidebar.css'

const Sidebar = ({ 
  selectedCategories, 
  setSelectedCategories,
  selectedBrands,
  setSelectedBrands,
  selectedPrice,
  setSelectedPrice,
  selectedRam,
  setSelectedRam,
 }) => {
    
    // Toggle category checkbox
      const handleCategoryToggle = (categoryName) => {
    setSelectedCategories(prev =>
      prev.includes(categoryName)
        ? prev.filter(cat => cat !== categoryName) // Remove if already selected
        : [...prev, categoryName] // Add new
    );
  };

  // for selecting brandname, then only that mobile will appear
    const handleBrandToggle = (brandName) => {
    setSelectedBrands(prev =>
      prev.includes(brandName)
        ? prev.filter(brand => brand !== brandName)
        : [...prev, brandName]
    );
  };


    // If no category is selected, return all brands from all categories
  const getBrandsToDisplay = () => {
    const relevantProducts =
      selectedCategories.length === 0
        ? Products
        : Products.filter(product => selectedCategories.includes(product.category));

    return relevantProducts.flatMap(product => product.brands);
  };

  const displayBrands = getBrandsToDisplay();


  const priceOptions = [
    "Below Rs.10,000/-",
    "Rs.10,000/-Rs.20,000/-",
    "Rs.20,000/-Rs.40,000/-",
    "Rs.40,000/-Rs.60,000/-",
    "Rs.60,000/-Rs.80,000/-",
    "Rs.80,000/-Rs.1,00,000/-"
  ];

    const handlePriceToggle = (priceLabel) => {
    setSelectedPrice(prev =>
      prev.includes(priceLabel)
        ? prev.filter(price => !price === priceLabel) // Remove if already selected
        : [...prev, priceLabel] // Add New
    );
  };

  

  const ramOptions = ['4GB','6GB','8GB']

  const handleRamToggle = (ramLabel) =>{
    setSelectedRam(prev=>
      prev.includes(ramLabel)
      ? prev.filter(ram => !ram === ramLabel) // Remove if already selected
      :[...prev,ramLabel] // Add New
    )
  }
 

  return (
    <div className='sidebar'>
        <h2>Category</h2>
        <ul className='sidebar-list'>
            {
            Products.map((category,index)=>(
                <li key={index}>
                  <label>
                    <input
                    type='checkbox'
                    checked={selectedCategories.includes(category.category)}
                    onChange={()=>handleCategoryToggle(category.category)}                    
                    />&nbsp;&nbsp;&nbsp;&nbsp;
                    {category.category}
                  </label>  
                </li>
            ))
            }

        </ul>
        <h2>Brand</h2>
        <ul className="brand-list">
            {displayBrands.map((brandItem, index) => (
          <li key={index}>
            <label className='label'>
              <input type="checkbox" 
                checked={selectedBrands.includes(brandItem.brand)}
                onChange={() => handleBrandToggle(brandItem.brand)}

              />&nbsp;&nbsp;&nbsp;&nbsp;
                <p> {brandItem.brand}</p>
            </label>
          </li>
        ))}

        </ul>


        <ul>
                         {/* ✅ Price Filters */}
                <h4>Price</h4>
                {priceOptions.map((price, pIndex) => (
                  <label key={pIndex} className="filter-label">
                    <input
                      type="checkbox"
                      checked={selectedPrice.includes(price)}
                      onChange={() => handlePriceToggle(price)}
                    />
                    &nbsp;&nbsp;&nbsp;
                    {price}<br/>
                  </label>
                ))}
 
                
        </ul><br/>

        <ul>
          {/* ram filters */}
          <h4>RAM</h4>
          {
          ramOptions.map((ram,rIndex)=>(
            <li key={rIndex} style={{listStyle:'none'}}>
              <label>
                <input
                type='checkbox' 
                checked={selectedRam.includes(ram)}
                onChange={()=>handleRamToggle(ram)}
                />
              </label>
              &nbsp;&nbsp;&nbsp;
               {ram}
           </li>

          )
          )
          }
        </ul>
      
    </div>
  )
}

export default Sidebar
