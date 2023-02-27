import { useState } from 'react';
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id:1, name: 'Terminar de editar o vídeo para o TikTok', done: false },
    { id:2, name: 'Terminar de escrever um artigo técnico', done: false }
  ])

  const handleAddTask = (taskName:string) => {
      let newList = [...list]
      newList.push({
        id: list.length+1,
        name: taskName,
        done: false
      })
      setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefa</C.Header>

        <AddArea onEnter={handleAddTask}/>  

        {list.map((item, index) => (
          <ListItem key={index} item={item}/>            
        ))}

      </C.Area>
    </C.Container>
  )
}

export default App;
