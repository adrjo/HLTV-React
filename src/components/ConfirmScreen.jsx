import { Button } from "@headlessui/react";
import { DarkBackground } from "./DarkBackground";

export function ConfirmScreen({ onSubmit, setShow, title}) {
    const toggleShow = () => setShow(false);

    return (
        <>
            <DarkBackground toggle={toggleShow} />
            <form className="formed">
                <h2>
                    Are you sure you want to delete "{title}"?
                </h2>

                <Button
                    onClick={toggleShow}
                    type="submit"
                    className="bg-red-400 text-black">
                    Cancel
                </Button>
                <Button
                    onClick={onSubmit}
                    type="submit"
                    className="bg-green-400 text-black">
                    Submit
                </Button>
            </form>
        </>
    )
}