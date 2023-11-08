import { createSlice, nanoid , createAsyncThunk } from "@reduxjs/toolkit";
import { Axios } from "axios";
import { sub } from "date-fns";

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState={
    posts:[],
    status: 'idle',
    error:null
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ()=>{
    const response = await axios.get(POST_URL);
    return response.data;
})

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        postAdded: {
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare(title,content, userID){
                return{
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userID,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            rocket:0,
                            coffee:0,
                        },
                    }
                }
            }
        },
        reactionAdded(state, action){
            const {postID, reaction} = action.payload
            const existingPost = state.posts.find(post=>post.id === postID)
            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder){

    }
})

export const selectAllPosts = (state)=>state.posts.posts;

export const {postAdded, reactionAdded} = postSlice.actions;

export default postSlice.reducer;