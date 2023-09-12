import React from 'react';
import categoryIcon from "../image/category_icon.png";
import cube from '../image/cube.png';
import christina from '../image/christina.jpg';
import list from '../image/list.png';
import messenger from '../image/messenger.png';
import success from '../image/success.png';
import security from '../image/security.png';
import users from '../image/messenger.png';
import nonamesontheway from '../image/nonamesontheway.jpg';
import lachlan from '../image/lachlan.jpg';
import plus from '../image/plus.png';

const SideLeftComponent = () => {
    return (
        <div>

            <div className='w-w-x h-h-x bg-[#DBE2EF] flex flex-col items-center justify-evenly'>
                {/* First Div */}
                <div className='w-auto'>
                    <img className='w-6 h-6' src={categoryIcon} alt="" />
                </div>
                {/* Second Div */}
                <div className='w-auto'>
                    <img className='w-6 h-6 mb-6' src={cube} alt="" />
                    {/*  */}
                    <div class="relative">
                        <img class="w-6 h-6 mb-6 rounded" src={list} alt="" />
                        <span class="absolute top-1 left-4  transform -translate-y-1/2 w-2.5 h-2.5 bg-red-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    <div class="relative">
                        <img class="w-6 h-6 mb-6 rounded" src={messenger} alt="" />
                        <span class="absolute top-1 left-4  transform -translate-y-1/2 w-2.5 h-2.5 bg-red-600 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                    
                    
                    <img className='w-6 h-6 mb-6' src={list} alt="" />
                </div>
                {/* Third Div */}
                <div className='w-auto'>
                    <img className='w-6 h-6 mb-4' src={success} alt="" />
                    <img className='w-6 h-6 mb-4' src={security} alt="" />
                    <img className='w-6 h-6 mb-4' src={users} alt="" />
                </div>

                {/* Fourth Div */}
                <div className='w-auto'>

                    <img className='w-6 h-6 rounded-full mb-4' src={christina} alt="" />
                    <img className='w-6 h-6 rounded-full mb-4' src={lachlan} alt="" />
                    <img className='w-6 h-6 rounded-full mb-4' src={nonamesontheway} alt="" />
                    <img className='w-6 h-6 rounded-full mb-4' src={plus} alt="" />
                </div>
            </div>
        </div>
    )
}

export default SideLeftComponent