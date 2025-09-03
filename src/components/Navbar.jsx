import "../styles/Navbar.css"

export function Navbar({ adminModeToggled, setAdminMode }) {
    const toggleAdminMode = () => {
        setAdminMode(!adminModeToggled);
    }

    return (
        <nav className="flex">
            <ul className="links flex-1/2 flex">
                <li><a href="/">Home</a></li>
                <li><a href="/forum">Forum</a></li>
            </ul>
            <button
                style={{ backgroundColor: adminModeToggled ? "green" : "red" }}
                onClick={toggleAdminMode}>
                Admin Mode
            </button>
        </nav>
    )
}