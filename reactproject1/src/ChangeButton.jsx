import { useState } from 'react'

function ChangeButton(props) {
    const [taskToChange, setTaskToChange] = useState("Type the number");
    const [newTask, setNewTask] = useState("Type the task to switch to");

    const onChangeHandler = (event) => {
        setTaskToChange(event.target.value);
        
    };
    const onNameChanger = (event) => {
        setNewTask(event.target.value);
    }
    const onClickHandler = () => {

        if (taskToChange != null && newTask != null) {
            props.setCards(prevList => prevList.map((item) => item.number == taskToChange ? { ...item, text: newTask} : item));
        }
        
    };
    return (
      <>
            <input type="text" value={taskToChange} onChange={onChangeHandler} />
            <input type="text" value={newTask} onChange={onNameChanger} />
            <button onClick={onClickHandler}>
                Change a certain Task
            </button>
      </>
  );
}
export default ChangeButton;