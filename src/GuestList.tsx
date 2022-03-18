import React, { useEffect, useState } from 'react';
import './GuestList.css';

export function GuestList(props:any) {
    let [guestList, setGuestList] = useState([])

    useEffect( () => { 
        fetch("https://marsbackend.azurewebsites.net/api/HttpTrigger2?code=dupaPHdBU5K97Plj4ipzEH2UwWHYSUqCZtNypcNxgEaa7rreLgmxiQ==")
        .then(response => response.json())
        .then(data => setGuestList(data))
        console.log("hei!")
        console.log(guestList)
    }, [])

    return (
        <div>
            <ul>
               {guestList.map((elem) => 
               <li key={elem['id']}>{elem['name']}</li>)}
            </ul>
        </div>
    );
}