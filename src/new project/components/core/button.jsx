import "../style/button.scss"
import WithBordered from "../../Lesson/Lesson"
function Button({type, mode, content}){
    return(
        <div className={`button ${mode==="light"?"light":"dark"}`}>
        <button type={type} >{content}</button>
    </div>
    )
}
export default Button