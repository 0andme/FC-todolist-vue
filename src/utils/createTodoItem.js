import axios from "axios"

export async function createTodoItem(title,order) {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'YouYoungMi'
    },
    data: {
      title,
      order
    }
  })
  //console.log(data)
  return data
}