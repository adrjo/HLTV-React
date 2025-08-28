import "../styles/Navbar.css"

export function Navbar() {
    return (
        <nav>
            <ul className="links">
                <li><a href="/home">Home</a></li>
                <li><a href="/forum">Forum</a></li>
            </ul>
            <button>Admin Mode</button>
        </nav>
    )
}