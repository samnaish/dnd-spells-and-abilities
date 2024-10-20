
export default function Point({ text, children }) {
    return (
        <p>
            <strong>{text}</strong>
            { children }
        </p>
    )
}
