import Link from 'next/link';

import classes from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

//- 🔸 렌더링 되는 기본 페이지  🔸

/* 🟠 중요 : 서버 컴포넌트(SC), 리액트 서버 컴포넌트(RSC), 클라이언트 컴포넌트(CC)를 NextJs는 구분한다.  
기본적으로 바닐라 리액트 엡에서 생성하는 컴포넌트(Vite의 도움을 받는다든지)는 기본적으로 클라이언트 컴포넌트를 활용한다.
= 이는 곧 눈에 보이는 모든 요소는 클라이언트 사이드에서'만' 생성된다는 뜻이다. 
이유는 react.js는 순수한 클라이언트 사이드 라이브러리기 때문이다.

그러나, NextJs는 풀스택 클라이언트 라이브러리로 백엔드와 프론트엔드가 동시에 적용되기에 해당 부분이 달라진다. 

결과적으로 리액트를 NextJs와 작업시 리액트 코드(컴포넌트)는 클라이언트(브라우저) 쪽이 아니라. 기본적으로 백엔드(서버)에서 실행된다. -> 이래서 이 부분을 RSC(리액트 서버 컴포넌트)라고 따로 부르는 이유다! 

이를 단적으로 확인하는 방법: 컴포넌트에 콘솔을 찍으면 브라우저에 콘솔이 뜨지 않고 백엔드 터미널에 뜬다.

이는 곧 브라우저가 로드되는 코드를 가볍게하여 사이트의 성능을 향상시킬 수 있는 것이다.

*/
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
      </main>
    </>

    // <main>
    //   <h1 style={{ color: 'white', textAlign: 'center' }}>Time to get started!</h1>
    //   <p>
    //     <Link href="/meals">Meals</Link>
    //   </p>
    //   <p>
    //     <Link href="/meals/share">Share Meals</Link>
    //   </p>
    //   <p>
    //     <Link href="/community">Community</Link>
    //   </p>
    // </main>
  );
}
