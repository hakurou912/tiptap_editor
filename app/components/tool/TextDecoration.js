import React, { useCallback } from 'react'

export default function TextDecorationButton({ editor }) {

    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URLを入力してください。', previousUrl)
        const pattern = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/
               
        // cancelled
        if (url === null) return
    
        // empty
        if (url === '') {
          editor.chain().focus().extendMarkRange('link').unsetLink().run()
          return
        }

        if(!pattern.test(url)) {
            alert('URL形式が不正です。')
            return
        }
        
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    return(
        <div className="col-auto btn-group me-2 mb-2" role="group" aria-label="Basic outlined">
            <button className={`${editor.isActive('bold') ? 'btn-secondary' : 'btn-outline-secondary'} btn`}
                onClick={() => editor.chain().focus().toggleBold().run()}>
                <i className='bi bi-type-bold fs-6'></i>
            </button>
            <button className={`${editor.isActive('italic') ? 'btn-secondary' : 'btn-outline-secondary'} btn`}
                onClick={() => editor.chain().focus().toggleItalic().run()}>
                <i className="bi bi-type-italic fs-6"></i>
            </button>
            <button className={`${editor.isActive('underline') ? 'btn-secondary' : 'btn-outline-secondary'} btn`}
                onClick={() => editor.chain().focus().toggleUnderline().run()}>
                <i className="bi bi-type-underline fs-6"></i>
            </button>
            <button className={`${editor.isActive('strike') ? 'btn-secondary' : 'btn-outline-secondary'} btn`}
                onClick={() => editor.chain().focus().toggleStrike().run()}>
                <i className='bi bi-type-strikethrough fs-6'></i>
            </button>
            <button className={`${editor.isActive('link') ? 'btn-secondary' : 'btn-outline-secondary'} btn`}
                onClick={setLink}>
                <i className="bi bi-link-45deg fs-6"></i>
            </button>
        </div>
    )
}