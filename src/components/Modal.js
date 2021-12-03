function Modal (props){
  function cancleHandler(){
     props.onCancle();
  }
  function confirmHandler(){
    props.onConfirm();
  }
  return(
      <div className="modal">
          <p>are u sure?</p>
          <button className="btn btn--alt" onClick={cancleHandler}>cancle</button>
          <button className="btn" onClick={confirmHandler}>confirm</button>
      </div>
  );
}
export default Modal;