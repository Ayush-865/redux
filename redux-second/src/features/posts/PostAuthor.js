import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({userID}) => {
    const users = useSelector(selectAllUsers);

    const author = users.find(user=> user.id === userID)
  
    return <span>by {author ? author.name : 'Unknown Author'}</span>
}

export default PostAuthor
