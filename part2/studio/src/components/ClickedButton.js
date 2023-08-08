function ClickedButton() {
  function handleClicked() {
    alert("Your pin has been saved!")
  }
  return (
    <button id="clickedButton" onClick={handleClicked}>
      Saved
    </button>
  );
}

export default ClickedButton;

//create alert to inform user that the pin has been saved
//create button 
//import styling and assign correct className clickedButton
