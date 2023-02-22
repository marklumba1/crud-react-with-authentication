import { useState } from "react";
import { useCreatePostMutation } from "../../app/features/postSlice";

const AddPost = ({user}) => {
    const [post, setPost] = useState("")
    const [createPost, result] = useCreatePostMutation()

    const handleSubmit = (e) => {
        e.preventDefault();
        setPost("")
        createPost({text: post, userId: user.id, date: (new Date()).toLocaleDateString()})
    }

    return ( 
        <form onSubmit={handleSubmit} className="add-post">
            <input type="text" value={post} onChange={e => setPost(e.target.value)} placeholder="What are you feeling?"/>
            <button disabled={result.isLoading || !post}>{'Post'}</button>
        </form>
     );
}
 
export default AddPost;