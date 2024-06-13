import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  //throw new Error('Loading meals failed');
  return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
  // 하나만 구할거니 get 사용하게

  // return db.prepare('SELECT * FROM meals WHERE slug = ' + slug).all();
  //- 🔸 이렇게 쓰면 sql 인젝션 공격에 취약해지니 ?을 써야한다. 🔸
}
