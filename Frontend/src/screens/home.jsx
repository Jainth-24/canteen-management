import React from "react";
import Layout from "../components/Layout";
import BeverageCard from "../components/BeverageCard";
import CarouselSlider from "../components/Carosal";
import studentsChoice from "../mockdata/studentChoice";



function Home() {
  return (
    <Layout>
      <CarouselSlider />
      <div className="mt-10">
        <h1 className="text-3xl font-bold mb-2 text-left">Students Choice</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studentsChoice.map((beverage) => (
            <BeverageCard key={beverage.id} beverage={beverage} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Home;
