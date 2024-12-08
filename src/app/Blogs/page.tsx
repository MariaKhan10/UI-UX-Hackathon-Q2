import React from 'react'
import Navbar from '../components/Navbar'
import Stillyouneed from '../components/Stillyouneed'
import Footer from '../components/Footer'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <Navbar />

      <div className="relative">
        {/* First Image */}
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={410}
        />

        
        {/* Second Image (Centered) */}
        
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/pictures/bloglist.png"
            alt="ourmenu"
            width={219}
            height={104}
          />
        </div>
      </div>


      <div className='p-20 '>
        <Image src="/pictures/blogimg1.png" alt="blog" width={500} height={400}></Image>
        <br/>
        <h1 className='font-bold text-[24px] leading-8 text-[#333333]'>10 Reasons To Do A Digital Detox Challenge</h1>
        <br/>
      
        <p className='text-[#4F4F4F] font-normal text-[16px] leading-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <br/>
        <br/>

        <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded">
  Read More
</button>


      </div>




      <div className='p-20 '>
        <Image src="/pictures/blogimg2.png" alt="blog" width={500} height={400}></Image>
        <br/>
        <h1 className='font-bold text-[24px] leading-8 text-[#333333]'>Traditional Soft Pretzels with Sweet Beer Cheese</h1>
        <br/>
      
        <p className='text-[#4F4F4F] font-normal text-[16px] leading-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <br/>
        <br/>

        <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded">
  Read More
</button>


      </div>



      <div className='p-20 '>
        <Image src="/pictures/blogimg3.png" alt="blog" width={500} height={400}></Image>
        <br/>
        <h1 className='font-bold text-[24px] leading-8 text-[#333333]'>The Ultimate Hangover Burger: Egg in a Hole Burger</h1>
        <br/>
      
        <p className='text-[#4F4F4F] font-normal text-[16px] leading-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <br/>
        <br/>

        <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded">
  Read More
</button>


      </div>


      <div className='p-20 '>
        <Image src="/pictures/blogimg4.png" alt="blog" width={500} height={400}></Image>
        <br/>
        <h1 className='font-bold text-[24px] leading-8 text-[#333333]'>My Favorite Easy Black Pizza Toast Recipe</h1>
        <br/>
      
        <p className='text-[#4F4F4F] font-normal text-[16px] leading-6'>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
        <br/>
        <br/>

        <button className="text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 rounded">
  Read More
</button>


      </div>



      <Stillyouneed />
      <Footer />
    </div>
  )
}

export default page