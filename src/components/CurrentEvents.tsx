import { Carousel } from 'antd';
import { CarouselRef } from 'antd/lib/carousel';
import React from 'react';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import CE1 from '../assets/images/current-events/CE1.jpg';
import CE2 from '../assets/images/current-events/CE2.jpg';
import CE3 from '../assets/images/current-events/CE3.jpg';
import CE4 from '../assets/images/current-events/CE4.jpg';

import styles from './CurrentEvent.module.scss';

function CurrentEvents() {
  return (
    <section className={styles.currentEvents__section}>
      <div>
        <h2 className={styles.currentEvents__heading}>This Year Events</h2>
      </div>
      <EventCarousel />
    </section>
  );
}

const EventCarousel: React.FC = () => {
  const carouselRef = React.useRef<CarouselRef>(null);
  return (
    <div className={styles.currentEvents__carousel__container}>
      <div
        className={styles.carousel__slide__button}
        onClick={() => carouselRef.current?.prev()}
      >
        <BiSolidLeftArrow />
      </div>
      <div
        className={styles.carousel__slide__button}
        onClick={() => carouselRef.current?.next()}
      >
        <BiSolidRightArrow />
      </div>
      <Carousel ref={carouselRef}>
        <Slide
          title="Event 1"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.sfadfadfa lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit."
          image={CE1}
          exploreLink="#"
        />
        <Slide
          title="Event 2"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          image={CE2}
          exploreLink="#"
        />
        <Slide
          title="Event 3"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          image={CE3}
          exploreLink="#"
        />
        <Slide
          title="Event 4"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
          image={CE4}
          exploreLink="#"
        />
      </Carousel>
    </div>
  );
};

function Slide({
  title,
  description,
  image,
  exploreLink,
}: {
  title: string;
  description: string;
  image: string;
  exploreLink: string;
}) {
  return (
    <div className={styles.carousel__slide__content}>
      <div>
        <img src={image} alt="current-event" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <a type="button" href={exploreLink}>
          Explore
        </a>
      </div>
    </div>
  );
}

export default CurrentEvents;
