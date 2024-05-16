export default function TextSizeButton({ editor }) {
    return(
        <div className="col-auto btn-group me-2 mb-2" role="group" aria-label="Basic outlined">
            <button className={`${editor.isActive('heading', { level: 1 }) ? 'btn-secondary' : 'btn-outline-secondary'} btn`} 
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}>
                <i className="bi bi-type-h1 fs-6"></i>
            </button>
            <button className={`${editor.isActive('heading', { level: 2 }) ? 'btn-secondary' : 'btn-outline-secondary'} btn`} 
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}>
                <i className="bi bi-type-h2 fs-6"></i>
            </button>
            <button className={`${editor.isActive('heading', { level: 3 }) ? 'btn-secondary' : 'btn-outline-secondary'} btn`} 
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}>
                <i className="bi bi-type-h3 fs-6"></i>
            </button>
        </div>
    )
}