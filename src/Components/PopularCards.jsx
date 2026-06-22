import React from 'react'
import ProductCards from './ProductCards'

export default function PopularCards() {
  return (
    <div>

          <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Popular Products</h2>
          <p className="mt-3 text-gray-600">Choose fresh products at the best prices.</p>

          <ProductCards/>
        </div>
    </div>
  )
}
