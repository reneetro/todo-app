import { useReducer, useState } from 'react';
import uuid from 'react-uuid'
import Modal from 'react-modal';

import reducer, { initialState } from '../reducers';

import {addList} from '../actions'
import {List} from '../models/ListModel'

Modal.setAppElement('body')

function ListHome() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const list = new List(uuid(), 'yahoo', ['walk dog', 'water plants'])
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
     top:'10%',
     bottom: '10%',
     left:'20%',
     right: '20%',
    },
  };


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }



  return (
    <div >
      <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
      >
        <form>
          <label>
            LIST NAME:
          <input type='text'/>
          </label>

        </form>
      </Modal>
      <div className="List w-full h-screen bg-gradient-to-b from-white to-pink-300">
          <div>
              <button onClick={() => openModal()}>New List +</button>
              <button>Manage Lists</button>
              <div>

              </div>
          </div>

      </div>
    </div>

  );
}

export default ListHome;
