import axios from "axios"

export async function deleteTodo(todoId) {
  const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'YouYoungMi'
    }
  })
  // console.log(data)
  //return data
}