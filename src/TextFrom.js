import React, {useState}  from 'react'

export default function TextFrom(props) {

const [text, setText] = useState("");
const changehandler=(event)=>{
    setText(event.target.value);
}
const clickhandler=()=>{
    let a =text.toUpperCase();
    setText(a);
}
const lowclickhandler=()=>{
    let a =text.toLowerCase();
    setText(a);
}



    return (
<>
<div>
           <h1>{props.heading}</h1>
           <div>

<textarea className="form-control" value={text} onChange={changehandler} id="myBox" rows="6" ></textarea>

    

        </div>
        <button className="btn" onClick={clickhandler}>UPPER CASE</button>
        <button className="btn" onClick={lowclickhandler}>Lower Case</button>
        </div>
        <div className='Container my-5'>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} Characters</p>
        </div>
        </>

    )
}

