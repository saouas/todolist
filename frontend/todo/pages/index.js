import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import {add, getAll, del} from './api/routes'

export default function Home(props) {

  const styles = {
    container : {
      borderRadius:"10px",
      backgroundColor:"#EDEDF4",
      diplay:"flex",
      justifyContent:"center",
      textAlign:"center",
      maxWidth:"700px",
      margin:"0 auto"
    },
    label_task:{
      color:"#555358",
      fontFamily:"Verdana",
      fontSize:"15px"

    },
    input_task:{
      height:"30px",
      maxWidth:"500px",
      border:"1px solid #eee",
      borderRadius:"5px"
    },
    button:{
      height:"30px",
      width:"80px",
      marginLeft:"5px",
      border:"1px solid",
      borderRadius:"3px"     
   },
    task:{
    
    },
    footer:{
      textAlign:"center",
      color:"white"
    },
    container_tasks:{
      display:"flex",
      flexDirection:"column"
    },
    ul:{
      listStyleType:"none",
      paddingInlineStart:"0px"
    },
    container_task:{
      position:"relative",
      backgroundColor:"#FFFFFA",
      marginBottom:"10px",
      marginRight:"10px",
      marginLeft:"10px",
      minHeight:"50px",
      borderRadius:"5px",
      textAlign:"center",
      paddingTop:"40px"
    },
    cross:{
      position:"absolute",
      height:"10px",
      width:"10px",
      top:"10%",
      left:"95%"
    }
  }
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(()=> {
    (async () => {
      const result = await getAll()
      .then((result)=>{
        setTasks(result.data);
      })
    })();
  }, [tasks]);

  const handleTask = async (e) => {
    e.preventDefault();
    if(task.length != ""){
      await add(task)
      let result = await getAll()
      .then((result)=>{
        setTask('')
        setTasks(result.data)
      })
    }
  }

  const handleDelete = async (e) =>{
    let id = e.target.id;
    await del(id)
    let result = await getAll()
    .then((result)=>{
      setTasks(result.data)
    })
    
  }

  return (<div>
      <div className="container" style={styles.container} >
      <Head>
        <title>Todo List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <br></br>

      <form>
        <label htmlFor="task" style={styles.label_task}>Tache </label>
        <input type="text" id="task" style={styles.input_task} value={task} onChange={e => setTask(e.target.value)}>

        </input>


        <button onClick={handleTask} style={styles.button}>Ajouter</button>
      </form>
        <br></br>
        <br></br>
        <div style={styles.container_tasks}>
          <ul style={styles.ul}>
            
              {tasks.map((item) => {
                return<div style={styles.container_task} key={`container-${item.id}`}>
                <img src="images/cross.png" style={styles.cross} id={item.id} key={`cross-${item.id}`} onClick={e => handleDelete(e)} ></img>
                <li key={item.id} id={item.id} style={styles.task}>{item.task}</li></div>
              })}
            
          </ul>
          
        </div>
       
      </main>

    </div>

    <footer style={styles.footer}>Made with ❤️ by <a href="https://salimaouas.dev/">Salim Aouas</a></footer>

 </div>    
  )
}
