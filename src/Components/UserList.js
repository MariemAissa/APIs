import React,{useState,useEffect} from 'react'
import axios from "axios";

const UserList=()=> {
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
          );
          setData({hits:result.data});
        };
        fetchData();
      }, []);
    return (
        <div>
            <ul>
                 {
                     data.hits.map((item,i)=>(
                         <li key={i}>{item.title}</li>
                     ))
                 }
            </ul>  
        </div>
    )
}

export default UserList
