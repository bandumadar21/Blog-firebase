import { addDoc,collection } from "firebase/firestore";
import { db,auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import useTitle from "./hooks/useTitle";
const CreatePost = () => {
    const postsRef=collection(db,"posts");
    const navigate=useNavigate();
     useTitle(" Create post")
    async function handlePost(event){
        event.preventDefault();
        console.log(event.currentTarget.title.value);
        const document={
            title:event.currentTarget.title.value,
           description:event.currentTarget.description.value,
            author:{
                name:auth.currentUser.displayName,
                id:auth.currentUser.uid
            }
        }
        await addDoc(postsRef,document);
        navigate("/");
    }
  return (
    <div className=" my-4">
        <main>
      <h4>Add New Post</h4>
      <div className="d-flex justify-content-center">
      <form className="d-flex flex-column w-50" onSubmit={handlePost}>
        <input type="text" name="title" className="my-4 p-2 rounded" autoComplete="off" placeholder="Title"/>
        <textarea rows="10" name="description" className="rounded" cols="50" autoComplete="off" placeholder="Enter Description"/>
        <div>
        <button className="btn btn-primary mt-1 w-25 text-center">Add</button>
        </div>
      </form>
      </div>
      </main>
    </div>
  )
};

export default CreatePost
