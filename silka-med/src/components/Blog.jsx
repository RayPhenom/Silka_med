import React from 'react'
import Button from '../layouts/Button'
import BlogCard from '../layouts/BlogCard'
import img1 from "../assets/img/onix.jpg"
import img2 from "../assets/img/isha.jpg"
import img3 from "../assets/img/berryl.jpg"
import img4 from "../assets/img/giddy.jpg"
import img5 from "../assets/img/onix.jpg"
import img6 from "../assets/img/isha.jpg"


const Blog = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24'>
        <div className='flex flex-col items-center lg:flex-row justify-between'>
          <div>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>Latest Post</h1>
            <p className='mt-2 text-center lg:text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatum harum totam suscipit repellendus rem culpa dolores, veniam sequi ratione.</p>
          </div>
          <div className='mt-4 lg:mt-0'>
            <Button title="Our Articles"/>
          </div>
           
        </div>
        <div className='my-8'>
          <div className='flex flex-wrap justify-center gap-10'>
            <BlogCard img={img1} headlines="Unraveling the mystery of good health"/>
            <BlogCard img={img2} headlines="The Heart-Healthy Diet"/>
            <BlogCard img={img3} headlines="Understanding Pediatric Vacinations"/>
            <BlogCard img={img4} headlines="Navigating Mental Health"/>
            <BlogCard img={img5} headlines="Importance of Regular Excirsise"/>
            <BlogCard img={img6} headlines="Skin Health 101"/>
            
          </div>

        </div>

    </div>
  )
}

export default Blog