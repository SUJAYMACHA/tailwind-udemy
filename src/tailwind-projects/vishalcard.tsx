import React from 'react';
import { faArrowRight,faStar, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const vishalcard = () => {
  return (

        <div className='flex justify-center items-center bg-rose-50 h-screen '>

            <div className=' border-4 border-black rounded-xl '>
            <div className=' border-b-2 border-sky-400'>
                <div className='relative'>
            <img src='\images\boat.jpeg' className='h-56 w-auto'></img>
            <div className='flex flex-row items-center'>
            <img src='\images\lefticon.jpeg'className='absolute top-2 left-2 '></img>
            
            <div className='absolute border border-black left-14 top-3 rounded-lg bg-slate-800 w-14 flex justify-center text-white items-center gap-1'>
            <FontAwesomeIcon icon={faStar} className="text-blue-500 w-5" />
            <div>3.0</div>
            </div>
            </div>
             <div className='absolute text-2xl text-black font-bold bottom-5 left-5'>
                <div>crociera di whale watching con ricrcatore WWF a spassso tra la Sardegna e la corsica</div>
             </div>
            </div>
            </div>
            <div className='flex bg-sky-400 P-2 flex-row gap-12 border-b-2 border-white'>
                <img src='\images\cal.jpeg' className='w-12'></img>
                <div className='flex flex-col'>
                <div className='text-white text-sm'>da apr a sett</div>
                <div className='text-white text-sm font-bold'>7 Giorni-10 Notti</div>
                </div>
                <img src='\images\loc.jpeg' className='w-12'></img>
                <div className='flex flex-col'>
                <div className='text-white text-sm'>italia:</div>
                <div className='text-white text-sm font-bold'>Nord Sardegna</div>
                </div>
            </div>
            
            <div className='bg-white flex p-12 flex-row relative  '>
            <div className='flex flex-col'>
            <img src='\images\lefticon.jpeg' className='absolute left-16 top-1'></img>
            <img src='\images\lefticon.jpeg' className='absolute left-24 top-1'></img>
            <img src='\images\lefticon.jpeg' className='absolute left-32 top-1'></img>
            <div className='-translate-y-2 translate-x-2'>
            <div className='text-gray-600 text-lg  '>
                +340 travellers
            </div>
            <div className='text-gray-600 text-sm'>
            Hanna prenotato
            </div>
            </div>
            </div>
        
            <div className='flex flex-col items-end ml-28 -translate-y-10 -translate-x-10 '>
                A PATIRE DA
                <div className='flex flex-row items-center'>
                <div className='text-red-500 font-bold text-5xl'>22.350</div>
                <FontAwesomeIcon icon={faEuroSign} className="text-red-500 text-5xl " />
                
                </div>
                <div className='flex flex-col'> a persona</div>
            </div>
            </div>
            
           
            
           
            </div>
            
        </div>
      
    
  );
}

export default vishalcard;
