 import {react} from 'react';
 import '../styles/createpost.css';
 import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 function CreatePost() {
    const navigate=useNavigate();
     const handlesubmit= (e)=>{
        e.preventDefault();
        const formdata= new FormData(e.target);
        axios.post("http://localhost:3000/create-post",formdata)
        .then((res)=>{
             navigate("/posts");
        })
        .catch((err)=>{
            console.log(err);
        })
     }
  return (
    <div>
<section className=' create-post-section'>
      <h1> Create Post</h1>
      <form onSubmit={handlesubmit}>
        <input type='file' name='image' accept='image/*'/>
        <input type='text' name='caption' placeholder='Enter caption' required/>
        <button type='submit'>Create Post</button>
      </form>
</section>
    </div>
  );
}   
export default CreatePost;