import React from "react";

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: 'tester', 
            name: 'tester', 
            image: 'https://nng-phinf.pstatic.net/MjAyNDExMjJfNyAg/MDAxNzMyMjAyMjc3Njc5.QRckoW0gxpRifIgWSy2YOB67wuMWPcfRgUdkXhGXgOMg.A87OuVc7pkHFAqXG9s8czNLFUZ_MyTQhjW370CleB0Mg.PNG/IMG_0254.png?type=f120_120_na', 
            places: 3
        }
    ];

    return <UsersList items={USERS} />;
};

export default Users;