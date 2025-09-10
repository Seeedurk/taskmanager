import { useState } from 'react'

function DeleteButton(props) {

    function ClickHandler() {
        props.setCards((prevList) => prevList.slice(0, prevList.length - 1));
    }

    return (
      <>
            <button onClick={ClickHandler}>
                Press to delete last task
            </button>
      </>
  );
}
export default DeleteButton;