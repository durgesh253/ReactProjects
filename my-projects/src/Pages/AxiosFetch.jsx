import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosFetch() {
  const [myData, setMyData] = useState([]);
  const [errormsg, setError] = useState("");
  const [title , settitle] = useState("");
  const [body ,setBody] = useState("");

  const fetchdata = async () => {
    try {
     const rsp = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
     setMyData(rsp.data)
    } catch (error) {
        setError(error.message);
    }
  }

  const postData =  (e) => {
    e.preventDefault();
   axios.post('https://auth2-cf7e8-default-rtdb.firebaseio.com/Auth2.json' , {
    title,
    body
   }).then((rspe) => console.log("postData" , rspe)).catch((error) => setError(error.message));
  }

  useEffect(() => {
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/posts`)
    //   .then((rsp) => setMyData(rsp.data))
    //   .catch((error) => setError(error.message));
    fetchdata();
  }, []);



  return (
    <>
      {errormsg !== "" && <h2>{errormsg}</h2>}
       <h1>Title Pass :</h1>
      <input value={title} type='text' onChange={(e) => settitle(e.target.value)}/>
      <h1>body Pass :</h1>
      <input value={body} type='text' onChange={(e)  => setBody(e.target.value)}/> 

      <button className='btn btn-dark'onClick={postData}>Post data</button>
      <div className='row text-center'>
      <div className=' col-md-4'>
        {myData.map((item) => {
          const { userId, title, body } = item;
          return (
            <div className='card' key={item.id}>
              <h3>{userId}</h3>
              <h2>{title}</h2>
              <h3>{body}</h3>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default AxiosFetch;
