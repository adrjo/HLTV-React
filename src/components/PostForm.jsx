import { useEffect, useState } from "react"
import "../styles/NewPostForm.css"
import { Button, Input, Select, Textarea } from "@headlessui/react";
import { FlagSelect } from "./FlagSelect.jsx";
import { Flag } from "../util/Flag.js";
import { displayToast, isNullOrEmpty } from "../util/Util.js";
import { savePostLocalStorage, updatePostLocalStorage } from "../api/posts.js";
import { postsStore } from "../App.jsx";
import { DarkBackground } from "./DarkBackground.jsx";


export function NewPostForm({ setShow, post }) {
    const toggleShow = () => (
        setShow(false)
    )
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [imageText, setImageText] = useState("");
    const [content, setContent] = useState("");
    const [flag, setFlag] = useState(Flag.WORLD);

    const [editing, setEditing] = useState(false);
    let postId = null;
    let postDate = null;
    if (post != undefined) {
        postId = post.id;
        postDate = post.date;
    }

    const addPost = postsStore((state) => state.addPost);
    const updatePost = postsStore((state) => state.updatePost);

    useEffect(() => {
        if (post != undefined) {
            setTitle(post.title);
            setAuthor(post.author);
            setImage(post.img);
            setImageText(post.imgText);
            setContent(post.content);
            setFlag(post.flag);
            setEditing(true);
        }
    }, [])


    const submit = (e) => {
        if (isNullOrEmpty(title, author, content, flag)) {
            return;
        }
        e.preventDefault();

        let id = crypto.randomUUID();
        let date = Date.now();

        if (editing) {
            id = postId;
            date = postDate;
        }

        let post = {
            id: id,
            author: author,
            title: title,
            flag: flag,
            img: image,
            imgText: imageText,
            content: content,
            date: date
        }

        if (!editing) {
            savePostLocalStorage(post);
            addPost(post);
            displayToast(`"${post.title}" submitted`);
        } else {
            updatePostLocalStorage(post);
            updatePost(post.id, post);
            displayToast("Edit successful");
        }
        toggleShow();
    }


    return (
        <>
            <DarkBackground toggle={toggleShow} />
            <form className="formed">
                <h2>
                    {editing ? (<>Editing "{title}"</>) : (<>New Post</>)}
                </h2>
                <Input
                    name="title"
                    type="text"
                    placeholder="Title*"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    name="author"
                    type="text"
                    placeholder="Author*"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
                <FlagSelect flag={flag} setFlag={setFlag} />
                <Input
                    name="image"
                    type="text"
                    placeholder="Header Image Link"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
                <Input
                    name="image_text"
                    type="text"
                    placeholder="Image text"
                    value={imageText}
                    onChange={(e) => setImageText(e.target.value)}
                />

                <Textarea
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}>
                </Textarea>

                <Button
                    onClick={toggleShow}
                    type="submit"
                    className="bg-red-400 text-black">
                    Cancel
                </Button>
                <Button
                    onClick={submit}
                    type="submit"
                    className="bg-green-400 text-black">
                    Submit
                </Button>
            </form>
        </>
    )
}