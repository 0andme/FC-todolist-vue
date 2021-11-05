# 📌 할 일 관리(Todo) 프로젝트

### 배포 주소

🔗 https://0andme-todo.netlify.app

### 질문 사항 
store를 사용하여 코드를 작성하지 않았을 때, CRUD를 하는 함수들에서는 dotenv를 사용하여 API key와 유저 네임을 가렸을 때 (process.env.를 사용) 401에러가 나타나지 않았는데 (src/utils폴더의 js파일들)

동일한 코드를 store를 사용하여 actions:부분의 메소드로 등록하고 사이트를 배포하니 401에러가 나서 최종 코드에서는 결국 API key와 유저 네임를 가리지 못했습니다(src/store폴더의 tododata.js)

코드 한번 봐주시고 해결법이나 왜 이런 현상이 나타나는지 참고할만한 사이트나 답변..부탁드리고 싶습니다. 

그리고 추가적으로 dev서버에서는 401에러가 뜨지 않았는데 배포한 사이트에서는 401에러가 나는 이유도 알고 싶어요. 아니면 찾아볼 만한 키워드정도..

### 필수 요구사항

- [x] 할 일 목록을 조회(Read)할 수 있어야 합니다.(3점)
- [x] 할 일 항목을 추가(Create)할 수 있어야 합니다.(3점)
- [x] 할 일 항목을 수정(Update)할 수 있어야 합니다.(3점)
- [x] 할 일 항목을 삭제(Delete)할 할 수 있어야 합니다.(3점)
- [x] VueJS를 활용해 만들어야 합니다.(3점)
- [x] 실제 서비스로 배포하고 접근 가능한 링크를 추가해야 합니다.(3점)

### 선택 요구사항

- [ ] 할 일 항목의 순서를 바꿀 수 있도록 만들어 보세요.(3점)
- [x] 할 일을 완료하지 않은 항목과 완료한 항목을 분류해서 출력해 보세요.(2점)
- [x] 할 일을 완료한 항목을 한번에 삭제할 수 있도록 만들어 보세요.(2점)
- [ ] 할 일 항목의 최신 수정일을 표시해 보세요.(1점)
- [ ] 최초 API 요청(Request)에 대한 로딩 애니메이션을 추가해 보세요.(2점)
- [x] SCSS, Bootstrap 등을 구성해 프로젝트를 최대한 예쁘게(?) 만들어 보세요.(2점)
