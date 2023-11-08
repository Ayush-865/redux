import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userID, setUserID]=useState("");
  const dispatch=useDispatch();

  const users = useSelector(selectAllUsers);

    const handleSaveClick=(e)=>{
        e.preventDefault()
        if(title && content){
            dispatch(
                postAdded(title,content,userID)
            )
            setTitle('');
            setContent('');
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userID);

    const usersOptions = users.map(user=>(
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))

  return (
    <>
      <div>
        <h1>Add Post</h1>
        <form onSubmit={handleSaveClick}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
          <select value={userID} onChange={e=>setUserID(e.target.value)}>
            <option value=""></option>
            {usersOptions}
          </select>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter Content"
          />
          <button type="submit" disabled={!canSave}>SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
