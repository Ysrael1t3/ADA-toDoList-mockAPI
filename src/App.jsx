import { useEffect } from 'react'
import { useState } from 'react'


const tarefas = [
  {id:1, title: ' minha primeira tarefa'},
  {id:1, title: ' minha segunda tarefa'},
  {id:1, title: ' minha terceira tarefa'},
  {id:1, title: ' minha 4ª  tarefa :P'},
]

export default function App() {

  const [tarefas,setTarefas] = useState([])

  useEffect(() =>{
    async function buscarDados() {
      const resultado = await fetch ('https://jsonplaceholder.typicode.com/todos')
      const resultadoFinal = await resultado.json()
      return resultadoFinal
    }
    buscarDados()
    .then (res  => setTarefas(res))
  }, [])


  return (
    <>
      <h1>Buscando dados</h1>
      <ol> 
      {tarefas.map ((tarefa) => {
        return(
          
          <li key={tarefa.id}>
            {tarefa.title}
            {tarefa.completed ? tarefa.title =  <h4>Completed</h4> : null }
          </li>

        )
      })}
      </ol>
    </>
  )
}
