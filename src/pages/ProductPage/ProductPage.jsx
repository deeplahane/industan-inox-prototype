import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { industrialProducts } from "../../data/industrialProducts";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const [pCount, setPCount] = useState(1);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const [tabNo, setTabNo] = useState(1);

  const increment = () => {
    setPCount(pCount + 1);
  };

  const decrement = () => {
    if (pCount == 0) return;
    setPCount(pCount - 1);
  };

  useEffect(() => {
    setProduct(industrialProducts[id]);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="pt-20">
      <div className="flex bg-gray-100 px-12">
        <div className="bg-white w-9/12 m-4 rounded-md">
          <div>
            <div className="flex items-center justify-between		">
              <div className="w-4/12 mr-8 ml-12">
                <img className="p-4 " src={product.mainImage} alt="" />
              </div>
              <div className="w-8/12  rounded-md m-2">
                <h2 className="text-xl font-semibold pt-4">{product.name}</h2>
                <div className="flex flex-cols my-4 ">
                  <p className="text-base text-gray-500">by</p>
                  <p className="text-base pl-2 text-blue-900">
                    {product.vendor}
                  </p>
                </div>
                <hr />
                <div>
                  <h2 className="my-4">Features</h2>
                  <ul className="list-disc list-inside">
                    <li className="font-normal text-sm text-gray-500">
                      Type of Product : Ball Bearing
                    </li>
                    <li className="font-normal text-sm text-gray-500">
                      Inner Ring Bore Diameter (mm) : 50 mm
                    </li>
                    <li className="font-normal text-sm text-gray-500">
                      Outer Bore Diameter(mm) : 90 mm
                    </li>
                    <li className="font-normal text-sm text-gray-500">
                      Inner Ring Width(mm) : 20 mm
                    </li>
                    <li className="font-normal text-sm text-gray-500">
                      Model No. : 1210
                    </li>
                  </ul>

                  <button className="font-medium text-base text-blue-900">
                    More Details
                  </button>
                </div>
                <div className="pt-4">
                  <p className="text-base font-medium">Available offers</p>
                  <div className="flex">
                    <p className="text-sm">IB BNPL , No Cost EMI</p>
                    <button className="text-sm pl-1 text-blue-800">
                      View Plans
                    </button>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm font-medium">
                    Check serviceability at your Pincode:
                  </p>
                  <input
                    placeholder="Enter your Pincode"
                    type="text"
                    class="mt-2 border-2 text-sm transition duration-500 placeholder-gray-400 focus:placeholder-transparent border-gray-400 w-6/12 py-2 text-center text-black bg-transparent rounded-none focus:outline-none "
                  ></input>
                  <button className="text-sm bg-gray-200 text-gray-600 h-10 border-y-2 border-r-2 w-2/12 border-gray-400">
                    CHECK
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white rounded p-3 m-3">
                <div className="">
                  <button
                    onClick={(e) => setTabNo(1)}
                    className={`${
                      tabNo === 1 ? "bg-gray-200" : "bg-white"
                    } px-3.5 py-2 border border-gray-300  text-black capitalize text-sm`}
                  >
                    DISCRIPTION
                  </button>
                  <button
                    onClick={(e) => setTabNo(2)}
                    className={`${
                      tabNo === 2 ? "bg-gray-200" : "bg-white"
                    } px-3.5 py-2 border border-gray-300 text-black capitalize text-sm`}
                  >
                    SPECIFICATION
                  </button>
                </div>
                <div>
                  {tabNo === 1 && (
                    <p className="p-2 text-sm border border-gray-200 mt-2 rounded shadow">
                      Buy NBC Ball Bearing 1210 online in India at wholesale
                      rates. If you have been looking for NBC Ball Bearing 1210
                      dealers, your search ends here as you can get the best NBC
                      Ball Bearing 1210 distributors in top cities such as Delhi
                      NCR, Mumbai, Chennai, Bengaluru, Kolkata, Chennai, Pune,
                      Jaipur, Hyderabad and Ahmedabad. You can purchase NBC Ball
                      Bearing 1210 of the finest quality and rest assured to get
                      the best in terms of both durability and performance. If
                      you are bothered about the NBC Ball Bearing 1210 prices,
                      you can be totally sure to get the best rates as
                      Industrybuying brings you genuine NBC Ball Bearing 1210
                      rates and quality assured products only from the best of
                      brands with exclusive brand discounts you won’t find
                      anywhere else. Procure NBC Ball Bearing 1210 today and
                      avail the best offers on your purchase.
                    </p>
                  )}
                  {tabNo === 2 && (
                    <div>
                      <div class="">
                        <div class="py-0">
                          {/* <div>
                            <h2 class="text-2xl font-semibold leading-tight">
                              Invoices
                            </h2>
                          </div> */}
                          <div class="py-2 overflow-x-auto">
                            <div class="inline-block min-w-full shadow-md  border border-gray-300 rounded-lg overflow-hidden">
                              <table class="min-w-full leading-normal">
                                {/* <thead>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                      Amount
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                      Issued / Due
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                      Status
                                    </th>
                                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                                  </tr>
                                </thead> */}
                                <tbody>
                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            SKU
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : BEA.RAD.21239440
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Type of Product
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : Ball Bearing
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Inner Ring Bore Diameter (mm)
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : 50 mm
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Outer Bore Diameter(mm)
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : 90 mm
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Inner Ring Width(mm)
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : 20 mm
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Weight (Kg)
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : 0.55 Kg
                                      </p>
                                    </td>
                                  </tr>

                                  <tr>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <div class="flex">
                                        <div class="ml-3">
                                          <p class="text-gray-900 whitespace-no-wrap">
                                            Model No.
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    <td class="px-2.5 py-2 border-b border-gray-200 bg-white text-sm">
                                      <p class="text-gray-900 whitespace-no-wrap font-semibold">
                                        : 1210
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 pt-4 ">
          {" "}
          {/* fixed top-20 right-0 */}
          <div className="bg-white max-h-fit  p-4 rounded">
            <div className="flex items-center mt-4 m-2">
              <p className="text-3xl font-medium text-orange-500">
                ₹ {parseInt(product.price)} +{" "}
                <span className="text-lg text-black">18% GST</span>{" "}
              </p>
              {/* <p className="text-xs pt-2 pl-2 font-semibold">
                (GST inclusive price)
              </p> */}
            </div>
            {/* <div className="flex items-center  mt-4 m-2">
              <p className="text-3xl font-medium  pr-2 text-gray-600">₹ {product.price}</p>
              <p className="text-xs pt-2 pr-7 font-semibold">
                (GST Extra price)
              </p>
            </div> */}
            <div className="flex items-center justify-center mr-16 mb-4 mt-4">
              <p className="text-sm text-green-600 border-green-600 rounded-md px-2 border-2 border-dotted">
                20% OFF
              </p>
              <p className=" pl-2">₹</p>
              <p className=" line-through pl-2">
                {parseInt(product.price) + parseInt(100 - 20 / 100)}
              </p>
            </div>
            <hr />
            <div className="flex flex-col items-center justify-center">
              <p className=" mt-4 text-sm font-medium">Update Quantity</p>
              <div class="flex mt-2 justify-center w-1/5">
                <button
                  className="border-l-2 border-y-2 border-gray-200 w-16 p-2"
                  onClick={decrement}
                >
                  <svg
                    class="fill-current text-gray-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>

                <input
                  class=" border-2 text-center w-10"
                  type="text"
                  onChange={(e) => setPCount(e.target.value)}
                  value={pCount}
                />

                <button
                  className="border-r-2 border-y-2 border-gray-200 w-20 p-2 "
                  onClick={increment}
                >
                  <svg
                    class="fill-current text-gray-600 w-4"
                    viewBox="0 0 448 512"
                  >
                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-8 items-center justify-center">
              <hr />
              <button className="text-blue-900 underline items-center justify-center font-medium text-xs">
                Get customized price
              </button>
              <hr />
            </div>
            <div className="flex items-center justify-center flex-col mt-6">
              <button className="text-sm font-medium bg-green-500 text-white h-10  w-10/12 ">
                BUY NOW
              </button>
              <button className="text-sm font-medium bg-orange-500 mt-4 text-white h-10  w-10/12 ">
                <Link to={"/cart"} className="text-white">
                  <span className="text-white">ADD TO CART</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
