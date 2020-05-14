import axios from 'axios'

const add = async (task) => {
  return await axios.post('http://localhost:8080/add',{
    task: task
  },{
    headers:{
      'Content-Type':'application/json'
    }
  })
};

const del = async (id) => {
  return await axios.post('http://localhost:8080/delete',{
    id: id
  },{
    headers:{
      'Content-Type':'application/json'
    }
  })
}

const getAll = async () => {
  return await axios.get('http://localhost:8080/all');
};

module.exports = {add,getAll,del};