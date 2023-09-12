import React from 'react'
import CardComponent from './CardComponent'
import { FormInputComponent } from './FormInputComponent'

export default function ContentComponent({ data, inputHandler, submitHandler, changeStatus  }) {

  

  return (
    <div>
      <div className='w-wc h-h-x bg-[#F9F7F7] relative p-8 overflow-y-auto'>
        <div className='flex flex-row justify-between items-center pt-12'>
          <p className=' text-black text-3xl font-inconsolata font-bold flex-item '>Good Evening Team!</p>
          <div className=' justify-end '>
            {/* Show more popup */}
            <label htmlFor="form-input" className="btn w-30 bg-[#112D4E]">Add new trip</label>

            <input type="checkbox" id="form-input" className="modal-toggle" />
            <div className="modal ">
              <div className="modal-box  relative bg-white">
                <FormInputComponent inputHandler={inputHandler} submitHandler={submitHandler} />
              </div>
            </div>
          </div>
        </div>

        <CardComponent data={data} changeStatus={changeStatus} />
      </div>
    </div>
  )
}
