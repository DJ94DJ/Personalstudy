import { Suspense } from 'react';
import Link from 'next/link';

import MealsGrid from '@/components/meals/meals-grid';
import classes from './page.module.css';
import { getMeals } from '@/lib/meals';

// Meals 컴포넌트. 데이터를 가져오는 부분을 분리된 컴포넌트로 아웃소싱
async function Meals() {
  // 리액트 컴포넌트에서는 할 수 없었던 일이지만, 서버 컴포넌트에서는 함수들이 async 함수로 바뀔 수 있다
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipes and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipes</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <p className={classes.loading} style={{ marginBottom: '50px' }}>
              식사를 불러오는 중...
            </p>
          }
        >
          <Meals />
        </Suspense>
        {/* <MealsGrid meals={meals} /> */}
        {/* <h1 style={{ color: 'white', textAlign: 'center' }}>Meals Page</h1> */}
      </main>
    </>
  );
}
