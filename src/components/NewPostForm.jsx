import { useState } from "react"
import "../styles/NewPostForm.css"
import { Button, Input, Select, Textarea } from "@headlessui/react";
import { FlagSelect } from "./FlagSelect";
import { Flag } from "../util/Flag.js";
import { isNullOrEmpty } from "../util/Util.js";
import { savePost } from "../api/posts.js";
import { postsStore } from "../App.jsx";


export function NewPostForm({ setShow }) {
    const toggleShow = () => (
        setShow(false)
    )
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [imageText, setImageText] = useState("");
    const [content, setContent] = useState("");

    const [flag, setFlag] = useState(Flag.WORLD);

    const addPost = postsStore((state) => state.addPost);


    const submit = (e) => {
        if (isNullOrEmpty(title, author, content, flag)) {
            return;
        }
        e.preventDefault();

        let id = crypto.randomUUID();
        let date = Date.now();

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

        savePost(post);
        addPost(post);
        toggleShow();
    }

    return (
        <>
            <div id="darken-bg" onClick={toggleShow} className="h-full w-full bg-[rgba(0,0,0,0.8)] fixed"></div>
            <form className="formed">
                <h2>New Post</h2>
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
                <FlagSelect setFlag={setFlag} />
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