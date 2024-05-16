import React, { useCallback } from 'react'

export default function EmbedImageButton({ editor }) {

    {/* ======== 画像追加時（ファイル選択ダイアログを起動 ========*/}
    const addImage = useCallback((e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader()
        reader.onload = async(event) => {
            const base64Text = event.currentTarget.result
            editor.chain().focus().setImage({ src: base64Text }).run();
        }
        reader.readAsDataURL(file)
    }, [editor])

    {/* ======== 画像追加時（URL入力 ========*/}
    const addImageUrl = useCallback(() => {
        const url = window.prompt('画像URLを入力してください。')
        const pattern = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/

        if (url === null || url === '') return
        if(!pattern.test(url)) {
            alert('URL形式が不正です。')
            return
        }
    
        if (url) {
          editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    return(
        <span className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fs-6">画像</span>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button type="button" onClick={addImageUrl} className={'btn btn-sm dropdown-item'}>
                        <span>URLで画像を追加</span>
                    </button>
                </li>
                <li>
                    <label className="btn btn-sm dropdown-item">
                        <span>ファイルを選択して画像を追加</span>
                        <input className="input d-none" type="file" accept="image/*" onChange={addImage} />
                    </label>
                </li>
            </ul>
        </span>
    )
}