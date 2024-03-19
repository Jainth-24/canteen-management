import React from "react";
import Layout from "../components/Layout";
import { Card, Button } from "react-bootstrap";
import juices from "../mockdata/juices";
import BeverageCard from "../components/BeverageCard";



const Juices = () => {

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-center">Juices</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {juices.map((juice) => (
          <BeverageCard key={juice.id} beverage={juice} />
        ))}
      </div>
    </Layout>
  );
};

export default Juices;
