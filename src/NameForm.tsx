import React, { useState } from 'react';
import './NameForm.css';

export function NameForm(props:any) {
    const [name, setName] = useState("");

    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        postName()
    }

    /*
    const postName = () => {
        var request:any = require('request');
        request.post(
            'https://marsbackend.azurewebsites.net/api/HttpTrigger1?code=RjrNM4fE4YfoRTPe0e9xO2CE83zdf3u9rKt2vIyeIrVo5UTXBjammA==',
            { json: { name: name, task: "hvorfortrengerjegdenne" } },
            function (error:any, response:any, body:any) {
                if (!error && response.statusCode == 200) {
                    console.log(body);
                }
            }
        );
    }
    */

    
    const postName = () => {
        const requestOptions = {
            method: 'POST',
            //query: JSON.stringify( { name: name }),
            //headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( { name: name })
        };
        fetch('https://marsbackend.azurewebsites.net/api/HttpTrigger1?code=RjrNM4fE4YfoRTPe0e9xO2CE83zdf3u9rKt2vIyeIrVo5UTXBjammA==', requestOptions)
            .then(response => response.json());
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input className="inputform"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" className="submitbutton"/>
        </form>
    );
}