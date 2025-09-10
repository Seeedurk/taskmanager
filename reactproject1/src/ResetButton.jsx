import { useState } from 'react'

function ResetButton(props) {

    
    function ClickHandler() {
        props.setCards([]);
    }

    return (
      <>
            <button onClick={ClickHandler}>
                Press to reset list
            </button>
      </>
  );
}
export default ResetButton;