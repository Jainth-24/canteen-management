import React from 'react'
import Layout from '../components/Layout'
import BeverageCard from '../components/BeverageCard'
import snacks from '../mockdata/snacks.js'

const Snacks = () => {
  return (
    <Layout>
    <h1 className="text-3xl font-bold mb-6 text-center">Snacks</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {snacks.map((snack) => (
        <BeverageCard key={snack.id} beverage={snack} />
      ))}
    </div>
  </Layout>
  )
}

export default Snacks