import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: "One of the most famous sky scrapers in the world!",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10118, United States',
        location: {
            lat: 40.7484405,
            len: -73.9878531
        },
        creator: 'tester'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: "One of the most famous sky scrapers in the world!",
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg',
        address: '20 W 34th St, New York, NY 10118, United States',
        location: {
            lat: 40.7484405,
            len: -73.9878531
        },
        creator: 'tester2'
    }
]

const UserPlaces = () => {

    return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;