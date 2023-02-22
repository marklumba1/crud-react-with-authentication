import { useFetchPostsQuery } from "../../app/features/postSlice";
import Toast from "../toast/Toast";
import Post from "./Post";

const Posts = ({user}) => {
    const {data , isLoading, error} = useFetchPostsQuery(user.id)
   
    return ( 
        <div className="posts">
          
            {error && <Toast data={error} type={`error`}/>}
            {isLoading && <Toast data={`loading`} type={`loader`}/>}
            {data && data.map(post => <Post post={post} key={post.id} />)}
          
        </div>
     );
}
 
export default Posts;