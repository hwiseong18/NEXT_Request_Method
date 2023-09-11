'use client'
export default function Home() {
  return (
    <>
    <h1>Request Method</h1>
    <h3> a 태그를 이용(GET) </h3>
    <a href="/api/qwer?name=kim&age=23">qwer호출하자</a>

    <h3>form 태그를 이용(GET, POST)</h3>
    <form action="/api/qwer" method='POST'>        
      <input name="name" type="text"/>
      <input name="age" type="number"/>
      <button type="submit">눌러라</button>
    </form>

    <h3>fetch 함수를 이용(GET, POST, PUT, PATCH, DELETE)</h3>
    <button onClick={()=>{
      fetch('/api/qwer',{
        'method':'PUT',
        'body': JSON.stringify({'name': 'lee', 'age': '18'}),
      })
      .then(res=>res.json())
      .then(json=>{
        document.querySelector('#result').value = json;
      })
    }}>fetch</button>
    <h3>결과</h3>
    <textarea id='result'></textarea>
    </>
  )
}
