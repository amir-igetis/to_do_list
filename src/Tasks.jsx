

function Tasks(props) {

    function handleClick(props) {
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.task}</p>
            <button onClick={handleClick}>Done</button>
        </div>
    )
}

export default Tasks