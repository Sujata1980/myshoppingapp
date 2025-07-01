// import React from 'react'
// import './Ourproduct.css';
// import Products from './Products'

// const Ourproduct = ({selectedCategories,selectedBrands,selectedPrice,selectedRam}) => {

//     const priceRangeMap = {
//     "Below Rs.10,000/-": [0, 10000],
//     "Rs.10,000/-Rs.20,000/-": [10000, 20000],
//     "Rs.20,000/-Rs.40,000/-": [20000, 40000],
//     "Rs.40,000/-Rs.60,000/-": [40000, 60000],
//     "Rs.60,000/-Rs.80,000/-": [60000, 80000],
//     "Rs.80,000/-Rs.1,00,000/-": [80000, 100000]
//   };

//   // Function to check if model is within any selected price range
//   const isWithinSelectedPrice = (price) => {
//     if (selectedPrice.length === 0) return true;
//     return selectedPrice.some(priceLabel => {
//       const [min, max] = priceRangeMap[priceLabel];
//       return price >= min && price <= max;
//     });
//   };

//   // Gather all matching models
//   //This array will hold all the models (mobiles, laptops, TVs) that match the filters selected by the user.

//   const filteredModels = [];


//   return (
//     <div className='product-container'>

//       {/* ✅ This part checks which categories to show:
//       selectedCategories is a list like ["Mobile", "Laptop"].
//       If no category is selected (selectedCategories.length === 0), it shows all categories.
//       If some categories are selected, it will only keep the ones that are in the selected list. */}
//          {
//             Products
//         .filter(categoryName => 
//           selectedCategories.length === 0 || selectedCategories.includes(categoryName.category)
//         )
        
        
        
//         // ✅ Now, it goes inside each category and checks its brands.
//         .map(category =>
//           category.brands
//           // ✅ This filters which brands to show:
//           // selectedBrands is a list like ["iPhone", "Samsung"].
//           // If no brand is selected, it shows all brands.
//           // If some brands are selected, it only shows those.
//             .filter(brandName => 
//               selectedBrands.length === 0 || selectedBrands.includes(brandName.brand)
//             )

//             // ✅ This part finally displays each product (model) as a card:
//             //     It shows the product image, name, and price.
//             //     key={index} is just used by React to track the list items.
//             .map(brand =>
              
//               brand.models
//               // filter for price of mobile
//               .filter(model => isWithinSelectedPrice(model.price) &&
//                (selectedRam.length === 0 || selectedRam.includes(model.ram))
//             )

          
//               .map((model, index) => (
//               <div key={index} className='card-container'>
//               <img src={model.image} alt={model.name} className='image-container' />
//               <h3>{model.name}</h3>
//               <p>Rs.{model.price}/-</p>
//               <p>{model.ram}</p>

//                 </div>
//               ))
//             )
//         )}

//     </div>
//   )
// }

// export default Ourproduct


import React from 'react';
import './Ourproduct.css';
import Products from './Products';

const Ourproduct = ({ selectedCategories, selectedBrands, selectedPrice, selectedRam }) => {
  const priceRangeMap = {
    "Below Rs.10,000/-": [0, 10000],
    "Rs.10,000/-Rs.20,000/-": [10000, 20000],
    "Rs.20,000/-Rs.40,000/-": [20000, 40000],
    "Rs.40,000/-Rs.60,000/-": [40000, 60000],
    "Rs.60,000/-Rs.80,000/-": [60000, 80000],
    "Rs.80,000/-Rs.1,00,000/-": [80000, 100000]
  };

  const isWithinSelectedPrice = (price) => {
    if (selectedPrice.length === 0) return true;
    return selectedPrice.some(priceLabel => {
      const [min, max] = priceRangeMap[priceLabel];
      return price >= min && price <= max;
    });
  };

  const filteredModels = [];

  Products
    .filter(category => selectedCategories.length === 0 || selectedCategories.includes(category.category))
    .forEach(category => {
      category.brands
        .filter(brand => selectedBrands.length === 0 || selectedBrands.includes(brand.brand))
        .forEach(brand => {
          brand.models
            .filter(model =>
              isWithinSelectedPrice(model.price) &&
              (selectedRam.length === 0 || selectedRam.includes(model.ram))
            )
            .forEach(model => {
              filteredModels.push({
                ...model,
                brand: brand.brand,
                category: category.category
              });
            });
        });
    });

  return (
    <div className='product-container'>
      {filteredModels.length === 0 ? (
        <h2 className='noProduct'>Sorry,No matching product found</h2> 
      ) : (
        filteredModels.map((model, index) => (
          <div key={index} className='card-container'>
            <img src={model.image} alt={model.name} className='image-container' />
            <h3>{model.name}</h3>
            <p><strong>Rs.{model.price}/-</strong></p>
            <p><strong>RAM:</strong> {model.ram}</p>
            <p><strong>Brand:</strong> {model.brand}</p>
            <p><strong>Category:</strong> {model.category}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Ourproduct;
