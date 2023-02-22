import { useState } from "react";
import { useDeletePostMutation, useUpdatePostMutation } from "../../app/features/postSlice";
import Toast from "../toast/Toast";

const Post = ({post}) => {
    const [deletePost, {error: deleteError}] = useDeletePostMutation()
    const [updatePost, {error: updateError}] = useUpdatePostMutation()
    const [isEdit, setIsEdit] = useState(false)
    const [input, setInput] = useState(post.text)

    const handleDelete = () => {
        deletePost(post.id)
    }

    const handleUpdate = () => {
        setIsEdit(!isEdit)
        if (isEdit) {
            updatePost(
                { id: post.id,
                 text: input,
                 date: (new Date()).toLocaleDateString()
                 }
             )
        }
    }

    
    return ( 
        <div className="post">
            <span className="date">{post.date}</span>
            <p>{!isEdit ? post.text : <input type="text" value={input} onChange={e => setInput(e.target.value)}/>}</p>
            <button onClick={handleUpdate}>{isEdit ? 'Save' : 'Update'}</button>
            <button onClick={handleDelete}>Delete</button>
            {deleteError || updateError && <Toast type={`error`}/>}
        </div>
     );
}
 
export default Post;