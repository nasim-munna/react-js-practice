import React,{useEffect, useState} from 'react'


const loadingMessage=<p>Todos is Loading</p>
const UseEffect = () => {
    const [todos,setTodos]= useState(null);
    const [isLoading,setIsLoading]=useState(true);
    const [error,setError]=useState(null);

  useEffect(()=>{
    fetch('')
    .then((res)=>{
      if (!res.ok){
        throw Error ('Fetching is not successfull');
      }else{
        return res.json();
      }
      
    })
    .then((data)=>{
      setTodos(data);
      setIsLoading(false);
      setError(null);
    })
    .catch((error)=>{
      setError(error.message);
      setIsLoading(false);
    });
},[])

  const todosElement= todos && todos.map((todo)=>{
    return <p key={todo.id}>{todo.title}</p>
  })
  return (
    <div>
      <h2>UseEffect</h2>
       {isLoading && {loadingMessage}}
       {error && <p>{error}</p>}
       {todosElement}
    </div>
   

  )
}

export default UseEffect