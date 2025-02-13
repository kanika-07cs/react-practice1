import React, { useState ,useEffect} from 'react';

export default function Addmarks() {
    const [sub1, setsub1] = useState("");  
    const [sub2, setsub2] = useState("");
    const [sub3, setsub3] = useState("");
    const [sub4, setsub4] = useState("");
    const [sub5, setsub5] = useState("");
    const [mark, setMarks]= useState([]);
    
    const handleSubmit = async() => {
        try {
            const res = await fetch("http://localhost:8000/add-data",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({sub1,sub2,sub3,sub4,sub5})
            })
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error("HTTP error");
            }
            console.log("Added successfully");
        }
        catch (err) {
            console.error(err)
        }
    }

    const fetchMarks = async() => {
        try {
            const res = await fetch("http://localhost:8000/fetch-marks",{
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },
                
            })
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error("HTTP error");
            }
            console.log("Fetched successfully");
        }
        catch (err) {
            console.error(err)
        }
    }

    useEffect(()=>{
        fetchMarks();
    },[]);

    return (
        <div>
            <h3>Add Marks</h3>
            
            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 1' 
                    value={sub1} 
                    onChange={(e) => setsub1(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 2' 
                    value={sub2} 
                    onChange={(e) => setsub2(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 3' 
                    value={sub3} 
                    onChange={(e) => setsub3(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 4' 
                    value={sub4} 
                    onChange={(e) => setsub4(e.target.value)}
                />
            </div>

            <div>
                <input 
                    type="text" 
                    placeholder='Enter mark 5' 
                    value={sub5} 
                    onChange={(e) => setsub5(e.target.value)}
                />
            </div>

            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
}