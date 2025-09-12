export function DarkBackground({ toggle }) {
    return (
        <div id="darken-bg" onClick={toggle} className="fixed inset-0 bg-[rgba(0,0,0,0.8)] z-50"></div>
    )
}