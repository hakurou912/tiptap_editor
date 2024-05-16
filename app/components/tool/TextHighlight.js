export default function TextHighlightButton({ editor }) {

    const HighlightColorList = ['#ced4da', '#F7A4A4','#FFDCA9','#FDCEDF','#DEAC80','#fff3cd','#d1e7dd','#d2f4ea','#cfe2ff','#cff4fc', '#E5B0EA','#B9BBDF','#e9ecef','#fff'];

    return(
        <table className="table">
            <tbody>
                <tr>
                <td className="text-nowrap" style={{width:'80px'}}><div className="mx-2 mt-1" style={{width:'80px'}}>ハイライト</div></td>
                    {HighlightColorList.map((color, index) => (
                    <td key={index} >
                        <button className="btn colorpalette border" style={{backgroundColor:`${color}`}} 
                            onClick={() => editor.chain().focus().toggleHighlight({ color: `${color}` }).run()}></button>
                    </td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}
