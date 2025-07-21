export function Button({text, onClickHandler}){
    return(
        <div>
            <button 
                onClick = {onClickHandler}>
                {text}
            </button>
        </div>
    )
}

// export function Button(props){
//     return(
//         <div>
//             <button>{props.text}</button>
//         </div>
//     )
// }

// mein props ko bhej raha haoon and ussko dynamicall access kar raha hoon but ek kam kar sakhta hoon mein instead of access the props like {props.text} i cam simply destructure it for example 

// export function Button({text})

// so now instead of using {props.text} i am samply use {text}
