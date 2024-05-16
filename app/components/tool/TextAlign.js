export default function TextAlignButton({ editor }) {
    return(
        <div className="btn-group me-2 mb-2" role="group" aria-label="Basic outlined">
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('left').run()} className="btn btn-outline-secondary">
                <i className="bi bi-text-left fs-6"></i>
            </button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('center').run()} className="btn btn-outline-secondary">
                <i className="bi bi-text-center fs-6"></i>
            </button>
            <button type="button" onClick={() => editor.chain().focus().setTextAlign('right').run()} className="btn btn-outline-secondary">
                <i className="bi bi-text-right fs-6"></i>
            </button>
        </div>
    )
}