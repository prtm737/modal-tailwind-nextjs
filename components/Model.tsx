import React , { Dispatch , SetStateAction } from 'react'

type Props = {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
  };
  

export default function Model({show , setShow }) {
    return (
        <>{show && 
        <div className='fixed flex items-center justify-center top-0 bottom-0 left-0 right-0 p-10 bg-black bg-opacity-25 z-40'>
            <div className='bg-white p-10 relative z-50 rounded-2xl max-w-2xl overflow-y-scroll '>
                <div className='absolute top-5 right-5 bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition-all cursor-pointer' onClick={() => setShow(false)}>
                     <img
                src="https://iconape.com/wp-content/png_logo_vector/cross-2.png"
                className="h-3 w-3"
              />   
                    </div>
                    <div className="font-bold text-2xl">Order placed successfully!</div>
                    <div className="mt-5 font-medium">
              Your order has been placed successfully! Our team will have a look
              at your order and we will be responsible to deliver the
              deliverables on or before the delivery date. If you have any
              questions about your order, feel free to contact our support team.
              You can also track your order to know the latest status.
                    </div>
                    <div className='mt-5 space-x-3'>
                        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Track order</button>
                        

                        <button  onClick={() => setShow(false)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Close</button>


                    </div>
            </div>
        </div>}
        </>
  )
}
