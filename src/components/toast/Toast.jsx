const Toast = ({data, type}) => {
    let className
    let text
    switch (type) {
        case `error`:
            className = `error`
                text = data.data || "Error has occured. Please Try again" 
            break;
    
        default:
            className = `loading`
                text = `Loading...`
            break;
    }
    return ( 
        <div>
            <p className={className}>{text}</p>
        </div>
     );
}
 
export default Toast;