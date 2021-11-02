// 하나의 아이템을 통채로 가져와 객체 분해
// 받아온 아이디를 가진 아이템을 가져온 제목,체크여부,순서로 내용 변경
// 수정된 객체를 반환
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
  
  //console.log(data)
}