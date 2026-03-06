import React from 'react'

export default function MapLocation() {

    return (
        <>
            <div className=" max-w-[1200px] mx-auto text-center ">


                <iframe
                 className='w-full h-[400px] border-0' 
                   
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.8931411776507!2d73.01603487520217!3d26.29818827701875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418db7f5a4e8d5%3A0x91c3eb1d93338906!2sMehrangarh%20Fort!5e1!3m2!1sen!2sin!4v1770975290779!5m2!1sen!2sin" 
                 loading="lazy" 
              >

                 </iframe>

            </div>
        </>
    )
}

