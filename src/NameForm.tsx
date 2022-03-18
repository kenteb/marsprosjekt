import React, { useState } from 'react';
import './NameForm.css';

export function NameForm(props:any) {
    const [name, setName] = useState("");

    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        props.handleUpdateCount();
        postName()
        setName("")
    }

    
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
                    autoFocus
                />
            </label>
            <input type="submit" value="Submit" className="submitbutton"/>
        </form>
    );
}