import EmbedButton from '@/app/components/tool/EmbedLink'
import EmbedImageButton from '@/app/components/tool/EmbedImage'
import TextDecorationButton from '@/app/components/tool/TextDecoration'
import TextSizeButton from '@/app/components/tool/TextSize'
import TextAlignButton from '@/app/components/tool/TextAlign'
import QuoteAndHrButton from '@/app/components/tool/QuoteAndHr'
import TextColorButton from '@/app/components/tool/TextColor'
import TextHighlightButton from '@/app/components/tool/TextHighlight'

export default function Page({ editor }) {

    return(
    <>
        <table className="table">
            <tbody>
                <tr>
                    <td><TextDecorationButton editor={editor} /></td>
                    <td><TextSizeButton editor={editor} /></td>
                    <td><TextAlignButton editor={editor} /></td>
                    <td><QuoteAndHrButton editor={editor} /></td>
                    <td><EmbedButton editor={editor}/></td>
                    <td><EmbedImageButton  editor={editor}/></td>
                </tr>
            </tbody>
        </table>
        <TextColorButton editor={editor} />
        <TextHighlightButton editor={editor} />
    </>
    )
}