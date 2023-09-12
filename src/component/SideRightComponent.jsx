import React from 'react'
import notification from "../image/notification.png";
import comment from "../image/comment.png";
import nonamesontheway from '../image/nonamesontheway.jpg';
import lachlan from '../image/lachlan.jpg';
import christina from '../image/christina.jpg';
import raamin from '../image/raamin.jpg';
import bg from '../image/bg5.jpg'

export default function SideRightComponent() {
  return (
    <div style={{ backgroundImage: 'url(' + bg + ')', backgroundSize: 'cover' }}>
      <div className='w-w-x2 h-h-x  relative p-4'>
        <div className='absolute right-8 mt-8 '>
          <div className='w-auto flex flex-row ml-16 items-center'>
            <img className='w-6 h-6 mr-4' src={notification} alt="" />
            <img className='w-6 h-6 mr-4' src={comment} alt="" />

            <img className='mb-2 w-8 h-8 rounded-full' src={lachlan} alt="" />

          </div>
          <div className=" mt-8 bg-yellow-100 text-black font-bold py-2 px-8 rounded-md">My amazing trip</div>
        </div>


        <div className='absolute top-40 '>
          <p className='mt-8 text-2xl font-serif font-bold text-white'>I like laying down on the sand and looking at the moon</p>
        </div>

        <div className='absolute top-80 pt-14'>
          <p className='text-4 font-serif font-bold text-white'>27 People are going there</p>
        </div>

        <div className='w-auto absolute flex flex-row top-80 pt-24 items-center'>
          <img className='w-12 h-12 mb-2 mr-4  rounded-full ' src={lachlan} alt="" />
          <img className='w-10 h-10 mb-2 mr-4 rounded-full ring-4 ring-gray-50 ' src={raamin} alt="" />
          <img className='w-10 h-10 mb-2 mr-4 rounded-full ring-4 ring-orange-600' src={nonamesontheway} alt="" />
          <img className='w-10 h-10 mb-2 mr-4 rounded-full ring-4 ring-gray-50' src={christina} alt="" />
          <label className="mb-2 flex items-center justify-center w-12 h-12 text-xs font-medium text-yellow-300 bg-yellow-50 border-4 border-yellow-400 border-dotted  rounded-full hover:bg-yellow-100 "  >23+</label>
        </div>

      </div>
    </div>
  )
}
