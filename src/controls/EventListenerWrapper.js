
export function EventListenerWrapper(props){
    function eventHandler(event){
    console.log(event.key);
    }
    return (
        <div onKeyDown={eventHandler}>
            {props.children}
        </div> 
    )
}
