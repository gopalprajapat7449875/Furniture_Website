'use client'

import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { TiMinus } from "react-icons/ti";

export default function Faq() {
    const [Faqopen, setFaqopen] = useState(0)

    let faqdata = [

        {
            'Question': 'Aenean elit orci, efficitur quis nisl at, accumsan?',
            'Answer': 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            'Question':'Donec mattis finibus elit ut tristique?',
            'Answer': 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            'Question': 'Where can i watch',
            'Answer': 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite shows with the iOS or Android app. Use downloads to watch while youre on the go and without an internet connection. Take Netflix with you anywhere.'
        },
         {
            'Question':'Donec mattis finibus elit ut tristique?',
            'Answer': 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            'Question': 'How do i cancle',
            'Answer': 'Netflix is flexible. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.'
        },
         {
            'Question':'Donec mattis finibus elit ut tristique?',
            'Answer': 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
        {
            'Question': 'What can i whtch on netflix?',
            'Answer': ' Netflix has an extensive library of feature films, documentaries, shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want. '
        },

        {
            'Question': 'Is Netflix good for kids?',
            'Answer': 'The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.'

        },
         {
            'Question':'Donec mattis finibus elit ut tristique?',
            'Answer': 'Donec mattis finibus elit ut tristique. Nullam tempus nunc eget arcu vulputate, eu porttitor tellus commodo. Aliquam erat volutpat. Aliquam consectetur lorem eu viverra lobortis. Morbi gravida, nisi id fringilla ultricies, elit lorem eleifend lorem'
        },
    ]


    let Toggle = (index) => {
        setFaqopen(Faqopen === index ? null : index)
    }


    return (
        <>
            <div className=" max-w-[1200px] mx-auto text-center ">

                {faqdata.map((value, index) => (
                    <div key={index} className={`bg-neutral-100    ${Faqopen === index ? ' border-1 border-yellow-600' : ' '}    my-3  hover:cursor-pointer `}>
                        <div className={`flex px-4 hover:text-yellow-600 rounded-xl justify-between item-center   ${Faqopen === index ? 'text-yellow-600' : 'text-neutral-900 '}  py-3 duration-300 ease-in-out  hover:cursor-pointer`} onClick={() => Toggle(index)} >

                            <h4 className=' text-[12px]   font-serif font-semibold'>{value.Question}</h4>

                            {Faqopen === index ? (
                                <span >
                                    <TiMinus className='text-[13px] ' />

                                 

                                </span>
                            ) : <span >
                                <FaPlus className='text-[11px] ' />
                            </span>}

                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-400 ease-in-out
                        ${Faqopen === index ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className='text-neutral-500 px-4  border-t border-yellow-600  bg-white text-left py-2 text-[12px]'>
                                {value.Answer}
                            </p>
                        </div>

                    </div>
                ))}


            </div>
        </>
    )
}
