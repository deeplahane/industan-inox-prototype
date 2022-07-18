import React from 'react'
import {Link} from 'react-router-dom'
const ProductCard = ({name, vendor, price, image, dept, index}) => {
    return (
       <Link to={`/product/${index}`}>
        <div class="w-full min-w-fit sm:max-w-20 md:w-1/2 lg:w-1/4 ">
            <div class="drop-shadow-2xl bg-white sm:max-w-20 rounded-lg m-h-64 p-2  border border-gray-200 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure class="mb-2 bg-white">
                    {/* <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" class="h-64 ml-auto mr-auto" /> */}
                    {/* <img src="https://www.skf.com/binaries/pub12/Images/0901d1968056488f-Group-FPCBB_SRACBB_DRACBB_14_214_794_664_tcm_12-496134.png" alt="" class="w-64 h-64 ml-auto mr-auto" /> */}
                    <img src={image} alt="" class=" w-28 h-28 ml-auto mr-auto" />
                </figure>
                <div class="rounded-lg p-2 flex flex-col ">
                    <div className="flex flex-col justify-center items-center">
                        <h5 class="text-black mb-2 text-xs font-medium leading-none line-clamp	">
                            {name}
                        </h5>
                        <span class="text-xs mb-1 text-gray-600 leading-none">By {vendor}</span>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="text-sm text-green-600 font-normal ">
                        ₹ {price}
                        </div>
                        {/* <button href="javascript:;" class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
       </Link>
    )
}

export default ProductCard