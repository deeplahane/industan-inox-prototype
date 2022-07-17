import React from 'react'

const ProductCard = ({name, vendor, price, image, dept}) => {
    return (
        <div class="w-full min-w-fit md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2  border border-gray-200 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure class="mb-2">
                    {/* <img src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png" alt="" class="h-64 ml-auto mr-auto" /> */}
                    {/* <img src="https://www.skf.com/binaries/pub12/Images/0901d1968056488f-Group-FPCBB_SRACBB_DRACBB_14_214_794_664_tcm_12-496134.png" alt="" class="w-64 h-64 ml-auto mr-auto" /> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw8qdaWPCxjpFa27RdeQ78vsu_jhOxa-UoQ0Xh_Z8l&s" alt="" class="w-64 h-64 ml-auto mr-auto" />
                </figure>
                <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
                    <div>
                        <h5 class="text-white text-2xl font-bold leading-none">
                            {name}
                        </h5>
                        <span class="text-xs text-gray-400 leading-none">By {vendor}</span>
                    </div>
                    <div class="flex items-center">
                        <div class="text-lg text-white font-light">
                            Rs. {price}
                        </div>
                        <button href="javascript:;" class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard