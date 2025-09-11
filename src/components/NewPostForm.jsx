import { useState } from "react"
import "../styles/NewPostForm.css"
import { Button, Input, Select, Textarea } from "@headlessui/react";


export function NewPostForm({ setShow }) {
    const toggleShow = () => (
        setShow(false)
    )
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [image, setImage] = useState("");
    const [imageText, setImageText] = useState("");
    const [content, setContent] = useState("");


    const submit = () => {
        console.log(title);
        console.log(author);
        console.log(image);
        console.log(imageText);
        console.log(content);

    }

    return (
        <>
            <div id="darken-bg" onClick={toggleShow} className="h-full w-full bg-[rgba(0,0,0,0.8)] fixed"></div>
            <div className="formed">
                <h2>New Post</h2>
                <Input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                    name="author"
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
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
            </div>
        </>
    )
}