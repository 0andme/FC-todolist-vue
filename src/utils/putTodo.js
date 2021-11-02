import axios from "axios"


export async function putTodo({id,title,done,order}) {
  const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'YouYoungMi'
    },
    data: {
      title,
      done,
      order
    }
  })
  
  console.log(data)
}