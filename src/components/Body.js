import "./Body.css"

export default function Body(props){
    return(
        <body className="body">
            <h1 className="body__title">{props.title}</h1>
        </body>
    )
}