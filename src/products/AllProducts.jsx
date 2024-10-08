import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import Modal from "../components/Modal";


const AllProducts = () => {
  // usestates
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState([])

  // fucntion to fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:8000/products`);
      if (!response.ok) {
        throw new Error("Error occured while fetching data");
      }
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.log("error occured", error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // function to filter items based on food type
  const filterCategory = (category) => {
    const filter =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    setCategory(filter);
    setFilteredProducts(filter);
  };

  // function to showall products
  const showAllProducts = () => {
    setCategory("all");
    setFilteredProducts(products);
  };

  // function to handle sortoption
  const handleSortOption = (option) => {
    setSortOption(option);

    const sortedItems = [...products];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localCompare(a.title));
        break;
      case "high-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "low-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;

      default:
        "default";
        break;
    }

    setFilteredProducts(sortedItems);
  };

  // function to handlesearch value
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtererd = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtererd);
  };

  const handleOpenModal = (id) => {
    setSelectedProduct(id);   // Set the ID of the product to display
    setIsModalOpen(true);       // Open the modal
  };

  

  if (!products) return <div>{error}</div>;

  return (
    <>
      <div className="w-full text-center mb-5 p-4 bg-primaryColor ">
        <p className="text-lg">Most Popular Items</p>
      </div>

      <div className="md:px-20 px-5  py-20"> 
        <Products filteredProducts={filteredProducts} isModalOpen={isModalOpen} onProductClick={handleOpenModal} setIsModalOpen={setIsModalOpen}/>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} productID={selectedProduct}/>
    </>
  );
};

export default AllProducts;
