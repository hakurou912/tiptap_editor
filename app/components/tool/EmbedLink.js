import React, { useCallback } from 'react'

export default function EmbedButton({ editor }) {

    const addIframe = useCallback((e) => {
        //document.getElementById('open_set_TextLink').click();
        const url = window.prompt('URLを入力してください。\nサムネイル画像が取得できればリンクカードになります。')
        const pattern = /^https?:\/\/[\w/:%#\$&\?\(\)~\.=\+\-]+$/
        //document.getElementById('open_button').click();

        if (url === null || url === '') return

        if(!pattern.test(url)) {
            alert('URL形式が不正です。')
            return
        }

        if (url) {
            editor.commands.insertContent(
                `<linkcard url="${url}"></linkcard>`
            );
        }
    }, [editor])

    const addTwitter = useCallback((e) => {
        const url = window.prompt('XのURLを入力してください。\n※「https://twitter.com/ユーザーID/status/xxxx…」の形式のURLです\n※鍵垢の場合、表示されません。')
        const pattern = /(https|http):\/\/(twitter.com)\/([A-Za-z0-9_]*)\/(status|statues)\/(\d+)/

        if (url === null || url === '') return

        if(!pattern.test(url)) {
            alert('URL形式が不正です。')
            return
        }

        if (url) {
            editor.commands.insertContent(
                `<twitter url="${url}"></twitter>`
            );
        }
    }, [editor]) 

    return(
        <span className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle me-2 mb-2" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="fs-6">URL</span>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button type="button" onClick={addTwitter} className="btn btn-sm dropdown-item">
                        <span>URLでXのポストを埋め込み</span>
                    </button>
                </li>
                <li>
                    <button type="button" onClick={addIframe} className="btn btn-sm dropdown-item">
                        <span>URLで外部リンクを埋め込み</span>
                    </button>
                </li>
            </ul>
        </span>
    )
}