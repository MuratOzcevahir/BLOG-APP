import React, { useReducer } from "react";
import axios from "axios";

export const backContext = React.createContext();
const conURL = "http://localhost:1111/";

function reducer(state, action) {

    if (action.type === "ADD_BLOG") {
        axios.post(conURL + "BlogData", action.data).then(() => {
            action.completed();
        }).catch((err) => { console.log("hta" + err); })

    }
    else if (action.type === "GET_ALL_BLOG") {
        axios.get(conURL + "BlogData").then((response) => {
            action.callback(response);
        })

    }
    else if (action.type === "GET_BLOG") {
        axios.get(conURL + "BlogData/" + action.id).then((response) => {
            action.callback(response.data)
        }).catch(() => {
            window.location.href = "/admin/listblog"
        })

    } else if (action.type === "DELETE_BLOG") {
        axios.delete(conURL + "BlogData/" + action.id).then(() => {
            action.callback()
        })

    } else if (action.type === "UPDATE_BLOG") {
        axios.put(conURL + "BlogData/" + action.id, action.data).then(() => {
            action.completed();
        })

    } else if (action.type === "UPDATE_COMMENT") {
        axios.put(conURL + "BlogComment/" + action.id, action.data).then((res) => {

        }).catch((err) => {

            console.log(err)
        })

    } else if (action.type === "GET_ALL_COMMENT") {
        axios.get(conURL + "BlogComment").then((response) => {
            action.callback(response.data);
        })
    }

}

function commentTask(comment, action) {
    var foundComment = {}
    if (action.type === "ADD_COMMENT") {
        axios.post(conURL + "BlogComment", action.data).then(() => {
            action.completed();
        }).catch((err) => { console.log("hta" + err); })
    } else if (action.type === "ACCEPT_COMMENT") {
        axios.get(conURL + "BlogComment/" + action.id).then((response) => {
            foundComment = response.data;

        }).then(() => {
            foundComment.IsPublished = foundComment.IsPublished ? false : true
            axios.put(conURL + "BlogComment/" + action.id, foundComment)
        })



    }
    else if (action.type === "DELETE_COMMENT") {
        axios.delete(conURL + "BlogComment/" + action.id).then(() => {
         
        })

    } else if (action.type === "GET_COMMENT") {
        axios.get(conURL + "BlogComment/" + action.id).then((response) => {


            return response.data;

        }).catch(() => {
        })

    }

}

function BackContext(params) {

    const [state, dispatch] = useReducer(reducer, true)
    const [comment, dispatchComment] = useReducer(commentTask, {})
    return (
        <backContext.Provider value={{ commentData: comment, dispatcher: dispatch, CommentTask: dispatchComment }}>
            {params.children}
        </backContext.Provider>

    );
}

export default BackContext;

