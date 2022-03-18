import React, { useEffect, useState } from 'react';
import './GuestList.css';

export function GuestList(props:any) {
    let [guestList, setGuestList] = useState(null)

    useEffect( () => { 
        fetch("https://marsbackend.azurewebsites.net/api/HttpTrigger2?code=dupaPHdBU5K97Plj4ipzEH2UwWHYSUqCZtNypcNxgEaa7rreLgmxiQ==")
        .then(response => response.json())
        .then(data => setGuestList(data.message));
        console.log(guestList)
    })

    return (
        <div></div>
    );
}