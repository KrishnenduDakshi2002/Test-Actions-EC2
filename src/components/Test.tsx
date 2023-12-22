import React from 'react';
import image from '../assets/images/current-events/CE1.jpg';
import styles from './CurrentEvent.module.scss';
interface Props {
  name: string;
}

const Test: React.FC<Props> = ({ name }) => {
  return (
    <div className={styles.carousel__slide__content}>
      <div>
        <img src={image} alt="current-event" />
      </div>
      <div>
        <h4>Event</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          voluptas doloribus non quaerat commodi voluptates ea tenetur,
          consequatur quasi veritatis totam a nulla assumenda architecto porro
          praesentium iste impedit id.
        </p>
        <a type="button" href={'#'}>
          Explore
        </a>
      </div>
    </div>
  );
};

export default Test;
