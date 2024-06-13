import MealItem from './meal-item';
import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return (
    <>
      <ul className={classes.meals}>
        {meals.map((meal) => (
          <li key={meal.id}>
            <MealItem {...meal} />
            {/* // 🟠 임포트를 했으면 넣읍시다... */}
          </li>
        ))}
      </ul>
    </>
  );
}
