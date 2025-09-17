import { Field, Label, Switch } from "@headlessui/react";
import { adminStore } from "../store/stores";
import "../styles/Navbar.css"

export function Navbar() {
    const adminMode = adminStore((state) => state.adminModeToggled);
    const toggleAdminMode = adminStore((state) => state.toggleAdminMode);

    return (
        <nav className="flex sticky top-0">
            <ul className="links flex-1/2 flex">
                <li><a href="/">Home</a></li>
                <li><a href="/forum">Forum</a></li>
            </ul>

            <Field>
                <Label>Admin Mode </Label>
                <Switch
                    checked={adminMode}
                    onChange={toggleAdminMode}
                    className="group inline-flex h-6 w-11 items-center rounded-full bg-[var(--bg-primary)] hover:bg-gray-500 transition data-checked:bg-green-500"
                >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>
            </Field>
        </nav>
    )
}