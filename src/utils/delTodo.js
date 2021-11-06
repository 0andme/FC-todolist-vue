// 아이템 객체의 아이디를 전달받아 해당 아이템을 지우는 함수
// 아이템의 삭제 여부를 리턴

import axios from "axios"

export async function delTodo(todoId) {
  const { data } = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoId}`,
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'apikey':  process.env.API_KEY,
      'username':  process.env.USER_NAME
    }
  })
  // console.log(data)
  //return data
}