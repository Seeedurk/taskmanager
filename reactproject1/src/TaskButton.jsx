import { useState } from 'react'

function TaskButton(props) {

    const [inputValue, setInputValue] = useState("Type Something");
    
    function ClickHandler() {

        props.setCards((prevList) => [...prevList, { text: inputValue, number: prevList.length+1 },
        ]);
    }
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
      <>

            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={ClickHandler}>
                Press to finizalize task
            </button>
      </>
  );
}
export default TaskButton;