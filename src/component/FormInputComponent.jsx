import React from 'react'

export const FormInputComponent = ({ submitHandler, inputHandler }) => {

    return (
        <div>
            <form onSubmit={submitHandler} action="">
                {/* Title */}
                <div className="mb-6">
                    <label htmlFor="title" className="block mb-2 text-sm  text-gray-900 font-bold ">Title</label>
                    <input onChange={inputHandler} name='title' type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sihaknou Ville" />
                </div>

                {/* Description */}
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-sm  text-gray-900 font-bold ">Description</label>
                    <input onChange={inputHandler} name='description' type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Happy place with beautiful beach" />
                </div>

                <div className="mb-6">
                    <label htmlFor="peopleGoing" className="block mb-2 text-sm  text-gray-900 font-bold ">People going</label>
                    <input onChange={inputHandler} name='peopleGoing' type="text" id="peopleGoing" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3200" />
                </div>

                <div className="mb-6">

                    <label htmlFor="status" className="block mb-2 text-sm font-bold text-gray-900">Type of adventure</label>
                    <select onChange={inputHandler} name='status' id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option  selected disabled>---- Choose any option ----</option>
                        <option value="beach">Beach</option>
                        <option value="forest">Forest</option>
                        <option value="mountain">Mountain</option>
                    </select>
                </div>
                <div className='flex flex-row justify-between'>
                    <button type='submit'  >
                        <label htmlFor="form-input" className="btn btn-primary">Submit</label>
                    </button>

                    <label htmlFor="form-input" className="btn bg-grey-300">Cancel</label>
                </div>




            </form>
        </div>
    )
}
