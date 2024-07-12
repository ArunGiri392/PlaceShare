import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "one of the most famous sky scrapers in the world",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPIzh6fpHvFALWSVqS4RNF4h__GviXD6b80n01d=w408-h272-k-no",
    address: "Empire State Building, 20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire state building",
    description: "one of the most famous sky scrapers in the world",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPIzh6fpHvFALWSVqS4RNF4h__GviXD6b80n01d=w408-h272-k-no",
    address: "Empire State Building, 20 W 34th St., New York, NY 10001",
    location: {
      lat: 40.7484445,
      lng: -73.9882393,
    },
    creator: "u2",
  },
];
const UserPlaces = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter((place) => {
    return place.creator === userId;
  });

  return <PlaceList items={loadedPlaces}></PlaceList>;
};
export default UserPlaces;
