import React,{useState,useEffect} from 'react'
import axios from "axios";
import { Link,Route } from "react-router-dom";

import './UserList.css'

const UserList=(props)=> {
  console.log(props.match)
    const [data, setData] = useState({ hits: [] });
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setData({hits:result.data});
          console.log(result.data)
        };
        fetchData();
      }, []);
    return (
        <div>
            <section className="results" >
                 {
                     data.hits.map((item,i)=>(
                      <div className="result" key={i}  >
          
                      <h3>< Link to={{
                  pathname: `details/${item.id}`,
                  state: {
                    user: item
                  }
                }}>{item.name}</ Link></h3>
                  </div> 
                     ))
                 }
            </section>  
        </div>
    )
}

export default UserList
