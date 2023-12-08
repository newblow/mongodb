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
  const results = db.collection<Car>("voiture").find();
  return (await results.toArray()).map((document) => {
    const { name, make, color, km, year } = document;
    return {
      name,
      make,
      color,
      km,
      year
  }});
}
 
export default async function Test() {
  const data: Car[] = await getCars();
  return (
    <>
      <h1>hello Mongo</h1>
      <ul>
      {
        data.map((car) => <li>{car.name} | {car.make} | {car.color} | {car.km} | {String(car.year)}</li>)
      }
      </ul>
    </>
  );
};

