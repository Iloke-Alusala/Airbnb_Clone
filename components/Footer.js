import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 space-y-10 px-32
    py-14 bg-gray-100 text-gray-600 '>
        <div className='space-y-4 text-xs text-gray-800'> 
            <h5 className='font-bold'>ABOUT</h5>
            <p>How Airbnb works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'> 
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is an awesome</p>
            <p>Clone</p>
            <p>And Referals are</p>
            <p>Greatly Accepted</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'> 
            <h5 className='font-bold'>Host</h5>
            <p>Chini_evo</p>
            <p>Presents</p>
            <p>A</p>
            <p>Fully Reactive</p>
            <p>Airbnb Clone</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'> 
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Buy Me a Coffee</p>
            <p>And Let us Code</p>
            <p>Some More Websites</p>
        </div>

    </div>
  )
}

export default Footer