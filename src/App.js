import { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import EditUserForm from "./components/EditUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];
  //state
  const [users, setUsers] = useState(usersData);
  // Editar usuarios
  const [editing,setEditing]= useState(false)
  
  // Agregar usuarios
  const addUser = user =>{
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }
  //Eliminar usuarios
  const deleteUser=id=>{
    const arraFiltrado = users.filter(user=> user.id !== id)
    setUsers(arraFiltrado)
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          [
            editing?
            <div>
             <h2>Edit User</h2>
             <EditUserForm></EditUserForm>
            </div>
          ]
          <h2>Add user</h2>
          <AddUserForm addUser={addUser}/>
          {
        <div className="flex-large">
          <h2>Edit user</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>

          }
        </div>
        <div className="flex-large">
          <h2>View user</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
