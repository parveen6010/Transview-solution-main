import React from 'react';


const Pdffill = () => {
    
    const eway = () => {
       
        window.location.href ="/e-way-bill.pdf";
      }

    const CnmtNo = () => {
        window.location.href ="/CnmtNo-CNCTK090967.pdf";
      }
    
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <div className='pt-20 w-1/2 border-5 border-solid border-gray-200 shadow-md rounded-lg flex justify-around bg-green-500 h-1/2'>
                <div className='ewaybill'>
                    <div className='mt-2 mb-2 font-bold'>
                        E-Way Bill
                    </div>
                    
                    <div className=' shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500  p-2 pl-19 text-xl'
                    onClick={eway}
                    >
                        <button>BIll</button>
                    </div>
                </div>
                <div className='Doucoment'>
                    <div className='mt-2 mb-2 font-bold'>
                        Doucoment
                    </div>
                  
                    <div className='shadow-md rounded-lg mt-2 border border-solid border-black text-white bg-gray-500  p-2 pl-19 text-xl'
                     onClick={CnmtNo}
                    >
                        <button>Doucoment</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pdffill;
