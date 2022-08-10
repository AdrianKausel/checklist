import { useState } from 'react';
import './App.css'
import { Container } from 'react-bootstrap';
import List1 from './Components/list';
import NewTask from './Components/submit';
import Swal from 'sweetalert2'

function App() {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({});

  const add = (obj) => {
    setData([...data, obj]);
  }
  const edit = (obj) => {
    if(obj.indice>=0){
      let arr = [...data];
      arr.splice(obj.indice, 1, obj);
      setData(arr);
    } else {
      Swal.fire('Edit', 'Cannot edit', 'error');
    }
  }

  const deleteTask = (task, indice) => {
    Swal.fire({
      title: 'Delete', 
      text: `Are you sure you want to delete the task: ${task}?`,
      icon:'question', 
      showCancelButton: true,
      confirmButtonText: 'Yes',

    }).then(resp => {
      if (resp.isConfirmed){
        setData(data.filter((d, i) => i !== indice))
      }
    })


  }
  const editTask = (dato, i) => {
    setNewData({...dato, indice: i});
  }
  const editTxt = (task, indice) => {
    Swal.fire({
      title: 'Complete', 
      text: `You completed the task: ${task}?`,
      icon:'question', 
      showCancelButton: true,
      confirmButtonText: 'Yes',

    }).then(resp => {
      if (resp.isConfirmed){
        data[indice].tachado = true;
        setData([...data]);
      }
    })
  }

  return (
    <div className="App">
      <Container>
      <NewTask addInfo={add} newInfo={newData} editFn={edit}/>
      <hr></hr>
      <List1 getData={data} deleteFn={deleteTask} goToEditFn={editTask} editTxtFn={editTxt}/>
      </Container>
    </div>
  );
}

export default App;