# ๐ ํ  ์ผ ๊ด๋ฆฌ(Todo) ํ๋ก์ ํธ

API ์ฌ์ฉ์ ๋ํด ๊ถ๊ธํ ์ ์ ์ฌ๋ '์ง์์๋ต' ์ฑ๋์ ์ง๋ฌธ ๋จ๊ฒจ์ฃผ์ธ์!

- ๊ณผ์  ๊ธฐ๊ฐ: 10์ 31์ผ(์ผ) ~ 11์ 5์ผ(๊ธ)
- ๋ฆฌ๋ทฐ ๊ธฐ๊ฐ: 11์ 5์ผ(๊ธ) ~ 11์ 10์ผ(์)

## ์๊ตฌ์ฌํญ

### ํ์ ์๊ตฌ์ฌํญ

- [ ] ํ  ์ผ ๋ชฉ๋ก์ ์กฐํ(Read)ํ  ์ ์์ด์ผ ํฉ๋๋ค.(3์ )
- [ ] ํ  ์ผ ํญ๋ชฉ์ ์ถ๊ฐ(Create)ํ  ์ ์์ด์ผ ํฉ๋๋ค.(3์ )
- [ ] ํ  ์ผ ํญ๋ชฉ์ ์์ (Update)ํ  ์ ์์ด์ผ ํฉ๋๋ค.(3์ )
- [ ] ํ  ์ผ ํญ๋ชฉ์ ์ญ์ (Delete)ํ  ํ  ์ ์์ด์ผ ํฉ๋๋ค.(3์ )
- [ ] VueJS๋ฅผ ํ์ฉํด ๋ง๋ค์ด์ผ ํฉ๋๋ค.(3์ )
- [ ] ์ค์  ์๋น์ค๋ก ๋ฐฐํฌํ๊ณ  ์ ๊ทผ ๊ฐ๋ฅํ ๋งํฌ๋ฅผ ์ถ๊ฐํด์ผ ํฉ๋๋ค.(3์ )

### ์ ํ ์๊ตฌ์ฌํญ

- [ ] ํ  ์ผ ํญ๋ชฉ์ ์์๋ฅผ ๋ฐ๊ฟ ์ ์๋๋ก ๋ง๋ค์ด ๋ณด์ธ์.(3์ )
- [ ] ํ  ์ผ์ ์๋ฃํ์ง ์์ ํญ๋ชฉ๊ณผ ์๋ฃํ ํญ๋ชฉ์ ๋ถ๋ฅํด์ ์ถ๋ ฅํด ๋ณด์ธ์.(2์ )
- [ ] ํ  ์ผ์ ์๋ฃํ ํญ๋ชฉ์ ํ๋ฒ์ ์ญ์ ํ  ์ ์๋๋ก ๋ง๋ค์ด ๋ณด์ธ์.(2์ )
- [ ] ํ  ์ผ ํญ๋ชฉ์ ์ต์  ์์ ์ผ์ ํ์ํด ๋ณด์ธ์.(1์ )
- [ ] ์ต์ด API ์์ฒญ(Request)์ ๋ํ ๋ก๋ฉ ์ ๋๋ฉ์ด์์ ์ถ๊ฐํด ๋ณด์ธ์.(2์ )
- [ ] SCSS, Bootstrap ๋ฑ์ ๊ตฌ์ฑํด ํ๋ก์ ํธ๋ฅผ ์ต๋ํ ์์๊ฒ(?) ๋ง๋ค์ด ๋ณด์ธ์.(2์ )

## API ์ฌ์ฉ๋ฒ

- ์์ฒญ ์ฃผ์(Endpoint): `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos`

๋ชจ๋  API ์์ฒญ(Request) `headers`์ ๋ค์ ์ ๋ณด๊ฐ ๊ผญ ํฌํจ๋์ด์ผ ํฉ๋๋ค.<br>
`username`์ ๋ค๋ฅธ ์ฌ๋๊ณผ ๊ฒน์น์ง ์๋๋ก ์ฃผ์ํ์ธ์!<br>
๋ณธ๋ช์ผ๋ก ๋ง๋ค๋ฉด ๋์ค์ ๋ฌธ์ ๊ฐ ๋ฐ์ํ์ ๋ ์ฐพ๊ธฐ๊ฐ ์ฌ์์.(E.g. `ParkYoungWoong`)

```json
{
  "content-type": "application/json",
  "apikey": "FcKdtJs202110",
  "username": "<YOUR_NAME>"
}
```

API ์ฌ์ฉ ์์:

```js
async function createTodo() {
  const { data } = await axios({
    url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'FcKdtJs202110',
      'username': 'ParkYoungWoong'
    },
    data: {
      "title": "ํ  ์ผ ๊ด๋ฆฌ ํ๋ก์ ํธ ๊ณผ์  PR ์์ฑ"
    }
  })
  console.log(data)
}
```

### ๋ชฉ๋ก ์กฐํ

์ ์ฒด ํ  ์ผ ๋ชฉ๋ก์ ์กฐํํฉ๋๋ค.

```curl
curl -X 'GET' \ 
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@return {Object[]} - ์กฐํ๋ ๋์ ํ  ์ผ ๋ชฉ๋ก
```

์์ฒญ ๋ฐ์ดํฐ ์์:

```js
undefined
```

์๋ต ๋ฐ์ดํฐ ์์:

```json
[
  {
    "id": "mnIwaAPIAE1ayQmqekiR",
    "order": 0,
    "title": "JS ๊ณต๋ถํ๊ธฐ",
    "done": false,
    "createdAt": "2021-10-28T05:18:51.868Z",
    "updatedAt": "2021-10-28T05:18:51.868Z"
  },
  {
    "id": "tMzPImGoWtRdJ6yyVv2y",
    "order": 1,
    "title": "๊ณผ์  PullRequest(PR) ์์ฑ",
    "done": true,
    "createdAt": "2021-10-28T04:16:53.980Z",
    "updatedAt": "2021-10-28T09:40:17.955Z"
  },
  {
    "id": "Rq8BebKihCgteHHhMIRS",
    "order": 2,
    "title": "API ์คํฐ๋",
    "done": false,
    "createdAt": "2021-10-28T04:17:02.510Z",
    "updatedAt": "2021-10-28T04:17:02.510Z"
  }
]
```

### ๋ชฉ๋ก ์์ ๋ณ๊ฒฝ

ํ  ์ผ ๋ชฉ๋ก์ ์์๋ฅผ ๋ณ๊ฒฝํฉ๋๋ค.

```curl
curl -X 'PUT' \ 
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/reorder
```

```plaintext
@param {String[]} todoIds - ๋ณ๊ฒฝํ  ์์์ ํ  ์ผ ํญ๋ชฉ์ ID ๋ฐฐ์ด (ํ์)
@return {Boolean} - ์์ ๋ณ๊ฒฝ ์ฌ๋ถ
```

์์ฒญ ๋ฐ์ดํฐ ์์:

```json
{
  "todoIds": [
    "mnIwaAPIAE1ayQmqekiR",
    "tMzPImGoWtRdJ6yyVv2y",
    "GHrvr3LaPx1g7y2sNuaC",
    "Rq8BebKihCgteHHhMIRS"
  ]
}
```

์๋ต ๋ฐ์ดํฐ ์์:

```json
true
```

### ํญ๋ชฉ ์ถ๊ฐ

ํ  ์ผ ํญ๋ชฉ์ ์๋กญ๊ฒ ์ถ๊ฐํฉ๋๋ค.

```curl
curl -X 'POST' \ 
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos
```

```plaintext
@param {String} title - ํ  ์ผ์ ์ ๋ชฉ (ํ์)
@param {Number} order - ํ  ์ผ์ ์์
@return {Object} - ์์ฑ๋ ํ  ์ผ ํญ๋ชฉ ๊ฐ์ฒด 
```

์์ฒญ ๋ฐ์ดํฐ ์์:

```json
{
  "title": "KDT ๊ณผ์  ์ค๊ณ ๋ฏธํ",
  "order": 2
}
```

์๋ต ๋ฐ์ดํฐ ์์:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "order": 0,
  "title": "KDT ๊ณผ์  ์ค๊ณ ๋ฏธํ",
  "done": false,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ํญ๋ชฉ ์์ 

ํน์  ํ  ์ผ ํญ๋ชฉ์ ์์ ํฉ๋๋ค.

```curl
curl -X 'PUT' \ 
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@param {String} title - ํ  ์ผ์ ์ ๋ชฉ (ํ์)
@param {Boolean} done - ํ  ์ผ์ ์๋ฃ ์ฌ๋ถ (ํ์)
@param {Number} order - ํ  ์ผ์ ์์ (ํ์)
@return {Object} - ์์ ๋ ํ  ์ผ ํญ๋ชฉ ๊ฐ์ฒด  
```

์์ฒญ ๋ฐ์ดํฐ ์์:

```json
{
  "title": "Bootstrap ์คํ์ผ ์ถ๊ฐ",
  "done": false,
  "order": 2
}
```

์๋ต ๋ฐ์ดํฐ ์์:

```json
{
  "id": "7P8dOM4voAv8a8cfoeKZ",
  "title": "Bootstrap ์คํ์ผ ์ถ๊ฐ",
  "done": false,
  "order": 2,
  "createdAt": "2021-10-29T07:20:02.749Z",
  "updatedAt": "2021-10-29T07:20:02.749Z"
}
```

### ํญ๋ชฉ ์ญ์ 

ํน์  ํ  ์ผ ํญ๋ชฉ์ ์ญ์ ํฉ๋๋ค.

```curl
curl -X 'DELETE' \ 
https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId
```

```plaintext
@return {Boolean} - ํ  ์ผ ํญ๋ชฉ์ ์ญ์  ์ฌ๋ถ  
```

์์ฒญ ๋ฐ์ดํฐ ์์:

```js
undefined
```

์๋ต ๋ฐ์ดํฐ ์์:

```json
true
```
