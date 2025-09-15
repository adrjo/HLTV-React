import "../styles/Toasts.css"

export function Toasts({ toasts }) {
    if (toasts == undefined || toasts.length == 0) {
        return "";
    }
    console.log(toasts);

    return (
        <div className="toastsContainer">
            {toasts.map((toast) => (
                <div key={toast.id}>
                    <h2>{toast.isError ? "❌" : "✅"} {toast.message}</h2>
                </div>
            ))}

        </div>
    )
}