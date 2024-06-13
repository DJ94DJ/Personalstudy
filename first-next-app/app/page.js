// page.js 파일은 페이지의 내용을 지정한다.
// 참고로 프로젝트 시작할때는 npm run dev를 쓴다.
// npx create-next-app@latest로 생성한다.

import Link from 'next/link';
// import Header from '../components/header';
import Header from '@/components/header';
//- 🔸 Nextjs의 기능! @ -- 골벵이를 파일 위치 앞에 쓰면 App 폴더 바깥인, root 프로젝트를 조회 할 수 있다.
//- 이는 jsconfig.json에서 설정한 가명으로, import 경로도 단순화 할 수 있다.

export default function Home() {
  console.log('Executing...🏉');
  //- 🔸 여기에 적는 콘솔은 백엔드에서 볼수 있다! 프론트 콘솔에선 안뜬다! 🔸
  // 즉 일반적인 리액트 컴포넌트이지만 서버 컴포넌트로 취급받는다.
  return (
    <main>
      {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1> */}
      {/* // 💫 Misson! : 만약 위의 이미지, 헤더를 리액트-컴포넌트화 시킨다면? */}
      <Header />

      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href="/about">About Us</Link>
      </p>
      {/* 🔸 하지만 일반 앵커(<a></a>)를 활용하는 방법은 좋은 방법이 아니다. 새로 다운받게 되기에 불편하다.
        이렇게 되면 리액트의 장점인 단일 페이지 형식을 벗어나게 됨. */}
      {/* ✨_Solution is: Link를 import 해오자! */}
    </main>
  );
}

// 💫 Misson! : 만약 두번째 페이지를 추가하려면? Next.js에선 파일 이름과 app 디렉토리 구성이 중요하게 파악된다.. 예를 들어, /about 이란 주소로 이동하는 페이지(라우트)를 추가하고 싶다면... -
// ✨_Solution is: about 폴더를 추가한다!

/* 🥋 learn more.. : 보호된 파일명
배우신 것과 같이 NextJS에는 일부 보호된 파일명이 있습니다.
중요: 이 파일명들은 app/폴더(부 폴더 포함) 내부에서 생성될 때만 보호됩니다. app/폴더 외부에서 생성될 경우 이 파일명들을 특별한 방식으로 처리하지 않습니다.

다음 목록은 NextJS에서 보호된 파일명이며 이 섹션에서 중요한 파일명을 배울 것입니다:

page.js => 신규 페이지 생성 (예: app/about/page.js은 <your-domain>/about page을 생성)
layout.js => 형제 및 중첩 페이지를 감싸는 신규 레이아웃 생성
not-found.js => ‘Not Found’ 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)
error.js => 기타 오류에 대한 폴백 페이지(형제 또는 중첩 페이지 또는 레이아웃에서 전달된)
loading.js => 형제 또는 중첩 페이지(또는 레이아웃)가 데이터를 가져오는 동안 표시되는 폴백 페이지
route.js => API 경로 생성(즉, JSX 코드가 아닌 데이터를 반환하는 페이지, 예: JSON 형식)

공식 문서에 지원되는 모든 파일 이름과 자세한 설명이 포함된 목록을 찾을 수 있습니다: 
https://nextjs.org/docs/app/api-reference/file-conventions
 */
