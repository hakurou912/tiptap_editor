export default function TextColorButton({ editor }) {

    const textColorList = ['#212529', '#dc3545','#fd7e14','#d63384','#653208','#ffcf00','#00ab00','#90e200','#0062c6','#00b2d4', 'purple','#7f00ff','#c4c4c4','#fff'];

    return(
        <table className="table">
            <tbody>
                <tr>
                    <td className="text-nowrap" style={{width:'80px'}}><div className="mx-2 mt-1" style={{width:'80px'}}>テキストカラー</div></td>
                    {textColorList.map((color, index) => (
                        <td key={index} >
                            <button className="btn colorpalette border" style={{backgroundColor:`${color}`}} 
                                onClick={() => editor.chain().focus().setColor(`${color}`).run()}></button>
                        </td>
                    ))}
                </tr>
            </tbody>
        </table>
    )
}