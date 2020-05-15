import axios from 'axios'

const add = async (task) => {
  return await axios.post(`https://${process.env.DOMAIN}/add`,{
    task: task
  },{
    headers:{
      'Content-Type':'application/json'
    }
  })
};

const del = async (id) => { 
  return await axios.post(`https://${process.env.DOMAIN}/delete`,{
    id: id
  },{
    headers:{
      'Content-Type':'application/json'
    }
  })
}

const getAll = async () => {
  return await axios.get(`https://${process.env.DOMAIN}/all`);
};

module.exports = {add,getAll,del};
