import React from "react";
import { Document } from 'mongodb';
import dbClient from "@/connect/connect";

interface Car {
  name: string;
  make: string;
  color: string;
  km: number;
  year: Date;
}

const getCars = async (): Promise<Car[]> => {
  const db = dbClient.db("cars");
  const results = db.collection("voiture").find();
  return (await results.toArray()).map((document) => {
    const {} = document;
    return{

  }});
}
 
export default async function Test() {
  const data: Car[] = await getCars();
  return (
    <>
      <h1>hello Mongo</h1>
      {data}
    </>
  );
};

