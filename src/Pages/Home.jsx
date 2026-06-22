import React from 'react'
import Hero from '../Components/Hero'

import TopProducts from '../Components/TopProducts'
import PopularCards from '../Components/PopularCards'

export default function Home() {
  return (
    <>
        <Hero/>
        <PopularCards/>
        <TopProducts/>
    </>
  )
}
