// ✅ Data Structure Overview
// Your Products array contains:

// Categories (Mobile, Laptop, TV)

// Each category has:

// A list of brands (iPhone, Samsung, OnePlus, etc.)

// Each brand has:

// A list of models, each with:

// name

// image (URL)

// price

// ram

// storage

// This nested structure is perfect for filtering or displaying products in a dynamic UI.



const Products = [
  {
    category: "Mobile",
    brands: [
      {
        brand: "iPhone",
        models: [
          {
            name: "iPhone 14",
            image: "https://www.shutterstock.com/image-photo/madrid-spain-september-20-2022-260nw-2204280729.jpg",
            price: 9000,
            ram: "6GB",
            storage: "128GB"
          },
          {
            name: "iPhone 14 Plus",
            image: "https://www.dxomark.com/wp-content/uploads/medias/post-132367/Apple-iPhone-14_Plus_FINAL_featured-image-packshot-review.jpg",
            price:18000,
            ram: "4GB",
            storage: "128GB"
          },
          {
            name: "iPhone 14 Pro",
            image: "https://www.imagineonline.store/cdn/shop/files/iPhone_14_Pro_Space_Black_PDP_Image_Position-1a__WWEN.jpg?v=1692349757",
            price: 15000,
            ram: "4GB",
            storage: "128GB"
          },
          {
            name: "iPhone 14 Pro Max",
            image: "https://www.dxomark.com/wp-content/uploads/medias/post-125428/Apple-iPhone-14-Pro-Max_FINAL_featured-image-packshot-review-1.jpg",
            price: 35000,
            ram: "4GB",
            storage: "128GB"
          },
          {
            name: "iPhone 13",
            image: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_hero_09142021_inline.jpg.slideshow-xlarge_2x.jpg",
            price: 42000,
            ram: "6GB",
            storage: "128GB"
          },
          {
            name: "iPhone 13 Mini",
            image: "https://res.cloudinary.com/mozillion/image/upload/f_auto,q_auto/v1632494478/exd8ii9xs6y2mieu6bqm.png",
            price: 5000,
            ram: "4GB",
            storage: "128GB"
          },
          {
            name: "iPhone 13 Pro",
            image: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-large_2x.jpg",
            price: 19000,
            ram: "4GB",
            storage: "128GB"
          },
          {
            name: "iPhone 13 Pro Max",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiRLik0UKRy0FuSrWtdQ0raWaVwsjWH0o-io8Qw2hNS_fx7u7GJQup_deJp5vy7q2z2Y4&usqp=CAU",
            price: 50000,
            ram: "4GB",
            storage: "128GB"
          }
        ]
      },
      {
        brand: "Samsung",
        models: [
          {
            name: "Samsung Galaxy S23",
            image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-ultra-5g-1.jpg",
            price: 21000,
            ram: "8GB",
            storage: "128GB"
          },
          {
            name: "Samsung Galaxy S23+",
            image: "https://m.media-amazon.com/images/I/61bM8Mojf6L.jpg",
            price: 25000,
            ram: "8GB",
            storage: "128GB"
          },
          {
            name: "Samsung Galaxy S23 Ultra",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTts2YNLpcuIEHLmMcT4-EhdjoUKRg3hiBma5blG-Eo97ZGIs2lZheVP1pcrIti15yjVWbSr0eeE5aHbNofJtVG37CkfJ2G4zj8WwqTINjY7UHUehZ5VIqZdyU",
            price: 7000,
            ram: "6GB",
            storage: "128GB"
          }
        ]
      },
      {
        brand: "OnePlus",
        models: [
          {
            name: "OnePlus 11 (Base)",
            image: "https://m.media-amazon.com/images/I/61amb0CfMGL.jpg",
            price: 9500,
            ram: "6GB",
            storage: "128GB"
          },
          {
            name: "OnePlus 11 (Top)",
            image: "https://www.91-img.com/gallery_images_uploads/8/c/8c0419c8aba28726ed41b755161d584a6ceafae1.jpg?tr=h-630,c-at_max,q-70",
            price: 28000,
            ram: "8GB",
            storage: "128GB"
          }
        ]
      }
    ]
  },
  {
    category: "Laptop",
    brands: [
      {
        brand: "Apple",
        models: [
          {
            name: "MacBook Air",
            image: "https://www.shutterstock.com/image-illustration/macbook-pro-2023-m2-chip-260nw-2328203513.jpg",
            price: 50000,
            ram: "6GB",
            storage: "256GB"
          },
          {
            name: "MacBook Pro",
            image: "https://media.istockphoto.com/id/471604920/photo/apple-15-inch-macbook-pro-retina-with-os-x-yosemite.jpg?s=612x612&w=0&k=20&c=7AXwje39nckM-TIUz1OKXFrPLN5FkH-X9SQ4gMlrag4=",
            price: 100000,
            ram: "8GB",
            storage: "256GB"
          }
        ]
      },
      {
        brand: "Dell",
        models: [
          {
            name: "XPS 13",
            image: "https://www.dell.com/wp-uploads/2024/01/Tributo-Platinum-v2.jpg",
            price: 55500,
            ram: "8GB",
            storage: "512GB"
          },
          {
            name: "Inspiron 15",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokBxKDGeB2KWpI4G9RmE5pcweafn8REb5cQ&s",
            price: 75000,
            ram: "8GB",
            storage: "512GB"
          }
        ]
      },
      {
        brand: "HP",
        models: [
          {
            name: "Pavilion",
            image: "https://www.dell.com/wp-uploads/2024/01/XPS-9640-laptops-back-to-back-1280x800-1-440x440.jpg",
            price: 60000,
            ram: "8GB",
            storage: "512GB"
          },
          {
            name: "Spectre x360",
            image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9350/media-gallery/platinum/notebook-xps-13-9350-t-oled-sl-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&hei=320&wid=557&qlt=100,1&resMode=sharp2&size=557,320&chrss=full",
            price: 85000,
            ram: "8GB",
            storage: "512GB"
          }
        ]
      }
    ]
  },
  {
    category: "TV",
    brands: [
      {
        brand: "Sony",
        models: [
          {
            name: 'Bravia 32"',
            image: "https://m.media-amazon.com/images/I/71oG3K9GssL._UF1000,1000_QL80_.jpg",
            price: 45000,
            ram: "6GB",
            storage: "512GB"

          },
          {
            name: 'Bravia 43"',
            image: "https://m.media-amazon.com/images/I/81K-Qxuy5EL.jpg",
            price: 53000,
            ram: "8GB",
            storage: "512GB"
          },
          {
            name: 'Bravia 55"',
            image: "https://sharptronics.in/cdn/shop/products/81P7iSxFzzS._SL1500.jpg?v=1635746856",
            price: 60000,
            ram: "8GB",
            storage: "512GB"

          }
        ]
      },
      {
        brand: "Samsung TV",
        models: [
          {
            name: "Crystal UHD",
            image: "https://rukminim2.flixcart.com/image/750/900/ko1smfk0/television/y/t/k/ua43aue60aklxl-ua43aue60aklxl-samsung-original-imag2hg7xtzfakh7.jpeg?q=90&crop=false",
            price: 40000,
            ram: "8GB",
            storage: "512GB"
          },
          {
            name: "Smart LED",
            image: "https://images.samsung.com/is/image/samsung/p6pim/in/ua55du7700klxl/gallery/in-crystal-uhd-du7000-502838-ua55du7700klxl-540822315?$684_547_PNG$",
            price: 47000,
            ram: "8GB",
            storage: "512GB"

          },
          {
            name: "QLED",
            image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTVuKTCFEAQvCigJcRyCeg_A4Y-WKqSex0jZvg_dJ5O5PWcirCtNptMJqvGEqL6IOjR8v560jI3GFrQLn64cjKbAgOtFjv0KBMaOvXk4UZdXOcbacYUkOIPrA",
            price: 50000,
            ram: "8GB",
            storage: "512GB"
          }
        ]
      }
    ]
  }
];

export default Products;

