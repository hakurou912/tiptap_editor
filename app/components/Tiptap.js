'use client'

/* --------------------------- Tiptap --------------------------- */
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Blockquote from '@tiptap/extension-blockquote';
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Placeholder from '@tiptap/extension-placeholder'

/* ---------------------- custom components ---------------------- */
import OgpImageNode from '@/app/components/customNode/OgpImageNode'
import TwitterNode from '@/app/components/customNode/TwitterNode'

/* ---------------------- 編集用パネル ---------------------- */
import EditPanel from '@/app/components/EditPanel'

const extensions = [
    StarterKit.configure({ heading: { levels: [1, 2, 3] } }),
    Link.configure({
        openOnClick: false,
    }),
    Image.configure({
        allowBase64: true,
    }),
    Blockquote,
    HorizontalRule,
    Highlight.configure({ multicolor: true }),
    Link.configure({
      validate: href => /^https?:\/\//.test(href),
      openOnClick: false,
    }),
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Italic,
    Underline,
    TextStyle,
    Color,
    OgpImageNode,
    TwitterNode,
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === 'heading') {
          return 'What’s the title?'
        }
        if (node.type.name === 'blockquote') {
          return '引用句？'
        }
        return 'コンテンツを追加する...'
      },
    })
];
const content = ``;

const Tiptap = () => {
  const editor = useEditor({
    extensions,
    content,
    /*
    onTransaction: ({ editor }) => {
      const cursorLine = editor.view.state.selection.$anchor.path[1]
      console.log('cursorLine:', cursorLine) //編集行を取得
    },
    */
});

const getHTML = () => {
  if (editor) {
      const content = editor.getHTML();
      document.getElementById("html_text").textContent=JSON.stringify(content);
  }
};
const getJSON = () => {
  if (editor) {
      const content = editor.getJSON();
      document.getElementById("json_text").textContent=JSON.stringify(content);
  }
};

if (!editor) {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary" type="button" disabled>
        <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
        Loading...
      </button>
    </div>
  )
}
  return (
    <div className="position-relative">
      {/* ======== Tool Menu ========*/}
      <div className="btn-toolbar border p-2 mb-3 w-100 sticky-top overflow-x-scroll" role="toolbar" aria-label="Toolbar with button groups">
            <EditPanel editor={editor}/>
      </div>
      <div className="btn-group position-absolute end-0" role="group">
          {/* ======== ひとつ前の状態に戻す ========*/}
          <button className="btn btn-outline-secondary btn-sm" type="button"
              onClick={() => editor.chain().focus().undo().run()}>
              <i className="bi bi-arrow-counterclockwise"></i>
          </button>
          {/* ======== ひとつ後の状態に進む ========*/}
          <button className="btn btn-outline-secondary btn-sm" type="button"
              onClick={() => editor.chain().focus().redo().run()}>
              <i className="bi bi-arrow-clockwise"></i>
          </button>
      </div>
      {/* タブ切り替え */}
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="editor-tab" data-bs-toggle="tab" data-bs-target="#editor-tab-pane" type="button" role="tab" aria-controls="editor-tab-pane" aria-selected="true">EditorTool</button>
        </li>
        <li className="nav-item" role="presentation">
          <button onClick={getHTML} className="nav-link" id="html-tab" data-bs-toggle="tab" data-bs-target="#html-tab-pane" type="button" role="tab" aria-controls="html-tab-pane" aria-selected="false">getHTML</button>
        </li>
        <li className="nav-item" role="presentation">
          <button onClick={getJSON} className="nav-link" id="json-tab" data-bs-toggle="tab" data-bs-target="#json-tab-pane" type="button" role="tab" aria-controls="json-tab-pane" aria-selected="false">getJSON</button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        {/* エディター */}
        <div className="tab-pane fade show active" id="editor-tab-pane" role="tabpanel" aria-labelledby="editor-tab" tabIndex="0">
          
          <div id="editor_div" className="result container border border-top-0 mb-2 overflow-y-scroll text-break">
              <EditorContent editor={editor} />
          </div>
          
        </div>
        {/* HTML出力 */}
        <div className="tab-pane fade" id="html-tab-pane" role="tabpanel" aria-labelledby="html-tab" tabIndex="0">
          <div className="result container border border-top-0 mb-2 overflow-y-scroll text-break">
            <p id="html_text"></p>
          </div>
        </div>
        {/* JSON出力 */}
        <div className="tab-pane fade" id="json-tab-pane" role="tabpanel" aria-labelledby="json-tab" tabIndex="0">
          <div className="result container border border-top-0 mb-2 overflow-y-scroll text-break">
            <p id="json_text"></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tiptap