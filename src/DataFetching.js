import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
const [posts, setPost] = useState([]);
useEffect(() => {
    // axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
    //  console.log(res);
    //  setPost(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // })
    const fetchItem = async ()=>{
     const datas = await axios(
        'https://jsonplaceholder.typicode.com/posts'
     )
     console.log(datas);
     setPost(datas.data)
    }
    fetchItem();
 }, [])
    return (
        <div>
        <ul>
            {
             posts.map(post=>(
            <li key={post.id}>{post.title}</li>
    ))
            }
        </ul>
        </div>
    )
}

export default DataFetching
