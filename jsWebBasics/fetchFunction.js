fetch('https://www.google.com')//서버로 리퀘스트를 보내고 리스폰스를 받아옴. 괄안의 파라미터를 리퀘스트로 보냄
.then((response) => response.text())//then : fetch함수가 리턴하는 어떤 객체의 메소드. 프로미스 객체라고 함. 암튼 얘는 콜백을 등록해주는 역할을 함.
.then((result) => {console.log(result); }); //굳이  result로 쓸 필요 없음. response.text()를 받는 단어일 뿐. 다른 단어 써도 됨.
//이전 콜백의 리스폰스인 response.text()를 그 다음 then의 콜백이 넘겨받을 수 있음.
// result로 넘겨 받음. 근데 꼭 result로 받을 필요는 없고 다른 단어 써도 무방.
// 2번라인의 response는 여러가지 정보가 담긴 객체임. 그래서 내용을 보려면 response.text()로 불러와야 함.