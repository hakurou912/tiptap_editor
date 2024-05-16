import Tiptap from '@/app/components/Tiptap'

export default function Home() {
  return (
    <>
      <section className="p-2">
        <h1 className="mb-2">Tiptap Editor</h1>
        <p className="mb-2">Tiptap Editorというフレームワークを使ってWYSIWYGエディターを実装しました。</p>
      </section>
      <Tiptap />
    </>
  );
}
