import React from 'react'
import Layout from '../components/Layout'
import BeverageCard from '../components/BeverageCard'
import lunchItems from '../mockdata/lunchItems'

const Lunch = () => {
  return (
    <Layout>
    <h1 className="text-3xl font-bold mb-6 text-center">Lunch Items</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {lunchItems.map((snack) => (
        <BeverageCard key={snack.id} beverage={snack} />
      ))}
    </div>
  </Layout>
  )
}

export default Lunch