import React from 'react';
import FRONT from '../../assets/merchandise/front-design.png';
import BACK from '../../assets/merchandise/rear-design.png';
import styles from './style.module.scss';
function MerchadiseSection() {
  return (
    <section className={styles.merchandise__section}>
      {/* heading */}
      <div className={styles.merchandise__section__content__wrapper}>
        <article className={styles.merchandise__caption__article}>
          <blockquote>
            Your time is limited, so don’t waste it living someone else’s life.
            Don’t be trapped by dogma
          </blockquote>
        </article>
        <article className={styles.merchandise__image__article}>
          <div className={styles.merchandise__image__article__image__wrapper}>
            <img src={FRONT} alt="" />
          </div>
          <div
            className={styles.merchandise__image__article__thumbnail__wrapper}
          >
            <div>
              <img src={FRONT} alt="" />
            </div>
            <div>
              <img src={BACK} alt="" />
            </div>
          </div>
        </article>
        <article>price</article>
      </div>
    </section>
  );
}

export default MerchadiseSection;
