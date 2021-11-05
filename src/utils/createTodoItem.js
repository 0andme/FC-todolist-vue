// 타이틀과 순서를 매개변수로 받아 todo리스트의 아이템을 생성
// 생성된 아이템 객체를 반환하는 함수
import axios from "axios"

export async function createTodoItem(title,order) {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey':  process.env.API_KEY,
      'username':  process.env.USER_NAME
    },
    data: {
      title,
      order
    }
  })
  //console.log(data)
  //return data
}