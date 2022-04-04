import './image.css'
function Image ({src, text,style}){
    return (
        <div id='images'>
            <img src={src} alt={text} style={style}></img>
        </div>
    )
}

export default Image