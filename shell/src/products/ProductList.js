import ProductCard from "./ProductCard";

function ProductList() {

  const products = [
    "Solar Pump",
    "Solar Controller",
    "Solar Motor"
  ];

  return (
    <div>
      <h2>Products</h2>

      {products.map((p,i)=>
        <ProductCard key={i} name={p}/>
      )}

    </div>
  );
}

export default ProductList;