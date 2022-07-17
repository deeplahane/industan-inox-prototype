import React from "react";
import { useState } from "react";

const ProductPage = () => {
  const [pCount, setPCount] = useState(1);

  const increment = () => {
    setPCount(pCount + 1);
  };

  const decrement = () => {
    if (pCount == 0) return;
    setPCount(pCount - 1);
  };

  return (
    <div className="pt-20">
      <div className="flex bg-gray-100 px-12">
        <div className="bg-white w-9/12 m-4 rounded-md">
          <div className="flex items-center justify-between		">
            <div className="w-4/12 mr-8 ml-12">
              <img
                className="p-4 "
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTRUOY_AVcBiAdAOhBBS4QmFV9lSIyuplC43WhtXtOnsFEjyeTe4ZGxDOF3vT9xsp_apWg_UEhe0d_5p1ctzxYULuQnyPnekIaskF_I8Lqk3wtMhyaKgOsDfOzw&usqp=CAE"
                alt=""
              />
            </div>
            <div className="w-8/12  rounded-md m-2">
              <h2 className="text-xl font-semibold pt-4">
                Rubber Sealed Ball Bearing
              </h2>
              <div className="flex flex-cols my-4 ">
                <p className="text-base text-gray-500">by</p>
                <p className="text-base pl-2 text-blue-900">
                  R.K. Engineering Corporation
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
        </div>
        <div className="bg-white w-3/12 m-4">
          <div className="flex items-center justify-center mt-4 m-2">
            <p className="text-3xl font-medium text-orange-500">₹ 189</p>
            <p className="text-xs pt-2 pl-2 font-semibold">
              (GST inclusive price)
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 m-2">
            <p className="text-3xl font-medium  pr-2 text-gray-600">₹ 149</p>
            <p className="text-xs pt-2 pr-7 font-semibold">(GST Extra price)</p>
          </div>
          <div className="flex items-center justify-center mr-16 mb-4 mt-4">
            <p className="text-sm text-green-600 border-green-600 rounded-md px-2 border-2 border-dotted">
              20% OFF
            </p>
            <p className=" pl-2">₹</p>
            <p className=" line-through pl-2">200</p>
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
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
