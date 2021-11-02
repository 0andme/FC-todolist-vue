import axios from "axios"

export async function getTodoList() {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'YouYoungMi'
    }
  })
  // console.log(data)
  return data
}