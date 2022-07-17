import React, { useState } from "react";
import ProductCard from "../../components/ProductCard";
import categories from '../../data/categories'
import { industrialProducts } from "../../data/industrialProducts";
const ProductsPage = () => {

  const [category, setCategory] = useState("All")
  const [products, setProducts] = useState(industrialProducts);

  return <div className="pt-24">
    <h1 className="text-3xl font-semibold text-blue-700 text-center">Products</h1>
    <div className="max-w-7xl mx-auto p-2">
      <div className="flex gap-5">
        <div>
          <div className="bg-gray-100 h-max py-8 px-5 rounded-md  w-60">
            <div>
              <div>Category</div>
              <select name="productCategory" id="productCategory" className="w-full p-1 text-semibold border-2 rounded border-gray-400">
                {
                  categories.map((category, index) =>
                    <option value={category} key={index}>{category}</option>
                  )
                }
              </select>
            </div>
            <br />
            <div>
              <div>Brand</div>
              <select name="productCategory" id="productCategory" className="w-full p-1 text-semibold border-2 rounded border-gray-400">
                {
                  categories.map((category, index) =>
                    <option value={category} key={index}>{category}</option>
                  )
                }
              </select>
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-wrap gap-3 mx-auto items-center">

            {
              products.map((product, index) =>
                <ProductCard key={index} name={product.name} category={product.category} price={product.price} vendor={product.vendor} image={product.mainImage} />
              )
            }

          </div>
        </div>
      </div>
    </div>



  </div>;
};

export default ProductsPage;
