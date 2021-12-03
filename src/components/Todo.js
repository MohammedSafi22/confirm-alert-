import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
function Todo(props) {
   const [modalIsOpen,setModalIsOpen]=useState(false);
    function deleteHndler() {
        setModalIsOpen(true);
    }
    function closeModalHandler(){
        setModalIsOpen(false);
    }
    return (
     <div className="card">
      <h2>{props.text}</h2>
     <div className="actions">
       <button className="btn" onClick={deleteHndler}>Delete</button>
       </div>
       {modalIsOpen && (<Modal onCancle={closeModalHandler} onConfirm={closeModalHandler} />)}
       {modalIsOpen && <Backdrop onCancle={closeModalHandler} />}
    </div>
    );
}
export default Todo;