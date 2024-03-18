import { useState } from "react";


function NewTask(props) {
    const [task, setTask] = useState({
        title: "",
        task: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setTask(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        props.onAdd(task);
        setTask({
            title: "",
            task: ""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form action="">
                <input name="title" onChange={handleChange} value={task.title} placeholder="Title" type="text" />
                <textarea name="task" onChange={handleChange} value={task.task} placeholder="Task" id="" cols="30" rows="10"></textarea>
                <button onClick={submitNote}>ADD</button>
            </form>
        </div>
    )
}

export default NewTask;