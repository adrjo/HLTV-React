import "../styles/Navbar.css"

export function Navbar() {
    return (
        <nav className="flex">
            <ul className="links flex-1/2 flex gap-5">
                <li><a href="/">Home</a></li>
                <li><a href="/forum">Forum</a></li>
            </ul>
            <button>Admin Mode</button>
        </nav>
    )
}