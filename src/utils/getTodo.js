import axios from "axios"

export async function getTodo() {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username':  'YouYoungMi'
    }
  })
  return data
}

