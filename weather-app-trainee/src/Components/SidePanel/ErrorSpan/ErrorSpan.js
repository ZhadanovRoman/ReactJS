import './error-span.css'

function ErrorSpan( props){

    return(
<span className="search-error-span">{props.errorText}</span>
    )
}

export default ErrorSpan;