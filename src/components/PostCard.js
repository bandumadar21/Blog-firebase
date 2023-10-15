import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase/config";

const PostCard = ({post}) => {
    const isAuth=JSON.parse(localStorage.getItem("isAuth"));
    async function handleDelete()

    {
        const document=doc(db,"posts",post.id);
        await deleteDoc(document);
    }
  
  return (
    <div className="d-flex justify-content-center">
       <div className='card w-75 mb-3'>
            <h4 className="title pt-4 ps-4" style={{textAlign:'justify',marginBottom:'-10px'}}>{post.title}</h4>
            <p  className='description p-4' style={{textAlign:'justify'}}>

                {post.description}
                </p>
              <p className='footer d-flex flex-wrap justify-content-between px-4'>
                <span className="badge bg-success py-3">{post.author.name}</span>
                {isAuth && (post.author.id===auth.currentUser.uid) && <span onClick={handleDelete} className='btn bi bi-trash3 bg-danger p-2 rounded' ></span>}
                
                </p>  
          </div>
    </div>
  )
};

export default PostCard
