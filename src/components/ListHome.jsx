import { useReducer } from 'react';

import reducer, { initialState } from '../reducers';

import {addList} from '../actions'
import List from '../models/ListModel'


function ListHome() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const list = new List()


  return (
    <div className="List w-full h-screen bg-gradient-to-b from-white to-pink-300">
        <div>
            <button onClick={dispatch(addList(list))}>New List +</button>
            <button>Manage Lists</button>
            <div>

            </div>
        </div>

    </div>
  );
}

export default ListHome;
