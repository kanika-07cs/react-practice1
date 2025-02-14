import React, { useState ,useEffect} from 'react';
import "../styles/Addmarks.css"

export default function Addmarks() {
    const [sub1, setsub1] = useState("");  
    const [sub2, setsub2] = useState("");
    const [sub3, setsub3] = useState("");
    const [sub4, setsub4] = useState("");
    const [sub5, setsub5] = useState("");
    const [mark, setMarks]= useState([]);
    const [editId,setEditId]=useState(null);
    
    const handleSubmit = async() => {
            try {
                const res = await fetch(editId ? `http://localhost:5000/update-mark/${editId}` : "http://localhost:5000/add-data", {
                    method: editId ? "PUT" : "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ sub1, sub2, sub3, sub4, sub5 })
                });
            const data = await res.json();
            console.log(data);
            if(!res.ok){
                throw new Error("HTTP error");
            }
            fetchMarks();
            resetForm();
            setsub1("");
            setsub2("");
            setsub3("");
            setsub4("");
            setsub5("");
            setEditId(null);
            console.log(editId ? "Updated successfully" : "Added successfully");
        }
        catch (err) {
            console.error(err)
        }
    }

    const fetchMarks = async() => {
        try {
            const res = await fetch("http://localhost:5000/fetch-marks",{
                method: "GET",
                headers:{
                    "Content-Type":"application/json"
                },

            })
            const data = await res.json();
            setMarks(data.marks)
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


    const handleDelete=async(Id)=>{
        console.log("Delete ID",Id);
        try {
            const res = await fetch(`http://localhost:5000/delete-mark/${Id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
    
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.error || "Failed to delete mark");
            }

            //setMarks(mark.filter((item) => item.id !== Id));

            const updatedMarks = mark.filter((item) => item.id !== Id).map((item, index) => ({
                ...item,
                id: index + 1 
            }));

            setMarks(updatedMarks);
            console.log("Deleted successfully", data);
        } catch (err) {
            console.error(err);
        }
    }

    const handleEdit = (mark) => {
        setEditId(mark.id);
        setsub1(mark.sub1);
        setsub2(mark.sub2);
        setsub3(mark.sub3);
        setsub4(mark.sub4);
        setsub5(mark.sub5);
    }

    const resetForm = () => {
        setEditId(null);
        setsub1("");
        setsub2("");
        setsub3("");
        setsub4("");
        setsub5("");
    }

    useEffect(()=>{
        fetchMarks();
    },[]);

    return (
        <div>
            <div className='marks'>
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
            
            <button className="submit" onClick={handleSubmit}>Submit</button>
            </div>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Subject1</th>
                    <th>Subject2</th>
                    <th>Subject3</th>
                    <th>Subject4</th>
                    <th>Subject5</th>
                </tr>
                {mark.map((key,index)=>(
                    <tr key={index}>
                        <td>{key.id}</td>
                        <td>{key.sub1}</td>
                        <td>{key.sub2}</td>
                        <td>{key.sub3}</td>
                        <td>{key.sub4}</td>
                        <td>{key.sub5}</td>
                        <td><button className="edit" onClick={()=>handleEdit(key)}>Edit</button></td>
                        <td><button className="delete" onClick={()=>handleDelete(key.id)}>Delete</button></td>
                    </tr>
                ))}
            </table>
        </div>
        
    );
}