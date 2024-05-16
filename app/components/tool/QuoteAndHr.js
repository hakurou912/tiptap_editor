export default function QuoteAndHrButton({ editor }) {
    return(
        <div className="col-auto btn-group me-2 mb-2" role="group" aria-label="Basic outlined">
            <button className={`${editor.isActive('blockquote') ? 'btn-secondary' : 'btn-outline-secondary'} btn`} 
                onClick={() => editor.chain().focus().toggleBlockquote().run()}>
                <i className="bi bi-quote fs-6"></i>
            </button>
            <button className="btn btn-outline-secondary" 
                onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <i className="bi bi-dash-lg fs-6"></i>
            </button>
        </div>
    )
}