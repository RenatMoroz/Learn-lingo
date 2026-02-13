import css from './Home.module.css';
import HomeDetalis from './HomeDetalis/HomeDetalis';
import HomeImage from './HomeImage/HomeImage';

import HomeStats from './HomeStats/HomeStats';

const Home = () => {
  return (
    <section className={css['home']}>
      <div className={css['container-img']}>
        <HomeDetalis />
        <HomeImage />
      </div>
      <HomeStats />
    </section>
  );
};

export default Home;
