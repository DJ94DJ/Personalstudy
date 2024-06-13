export default function Header() {
  return (
    <>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
    </>
  );
}

// 지금 이 파일은 components 폴더에 적용되어 있다. 그러면 Netx.js는 폴더로 라우터를 구성할 수 있으니 프론트에서 /components 치면 들어가질까?
/*- 🌎_안된다! why?: 
왜나하면 해당 폴더에 page.js 파일이 없기 때문에 라우터로 인식이 되지 않는거임.
*/
//- 🔸 강의에 의하면 컴포넌트를 App 폴더 바깥에 두는 것이 좋다고 한다. :그렇게 하면 app 폴더를 라우팅에만 사용할 수 있기 때문이다.  🔸
