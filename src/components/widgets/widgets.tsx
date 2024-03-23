'use client';

import { useState } from 'react';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { IoIosCheckmark } from 'react-icons/io';
import styles from 'styles/components/widgets/widgets.module.scss';

export const RadioButton = ({ is_active = false, onClick = () => {} }) => {
  const activeRadio = {
    // backgroundColor: 'var(--shipam-primary-red)',
    border: `0.2rem solid var(--shipam-primary-red)`
    // border: `0.2rem solid #fff`,
    // outline: `0.2rem solid var(--shipam-primary-red)`,
    // right: '-.2rem'
  };

  const [active, setIsActive] = useState(is_active);

  const handle_click = () => {
    onClick();
    setIsActive(!active);
  };

  return (
    <span
      className={styles.radio}
      style={active ? activeRadio : {}}
      onClick={handle_click}
    >
      <span
        className={styles.inner_circle}
        style={active ? { opacity: '1' } : {}}
      ></span>
    </span>
  );
};

export const Checkbox = ({ is_active = false, onClick = (e?: any) => {} }) => {
  const activeCheckbox = {
    backgroundColor: 'var(--shipam-primary-red)',
    border: `0.2rem solid var(--shipam-primary-red)`
  };

  const handle_click = () => {
    onClick();
  };

  return (
    <span
      className={styles.checkbox}
      style={is_active ? activeCheckbox : {}}
      onClick={handle_click}
    >
      <IoIosCheckmark fontSize={'3rem'} />
    </span>
  );
};

export const StarRatings = ({ rating = 5 }) => {
  return (
    <>
      {/* <div style={{ display: 'flex', gap: '.3rem', color: '#FF9017' }}>
        {rating >= 1 ? <BsStarFill /> : <BsStar />}
        {rating >= 2 ? <BsStarFill /> : <BsStar />}
        {rating >= 3 ? <BsStarFill /> : <BsStar />}
        {rating >= 4 ? <BsStarFill /> : <BsStar />}
        {rating >= 5 ? <BsStarFill /> : <BsStar />}
      </div> */}
      <div style={{ display: 'flex', gap: '.3rem' }}>
        <BsStarFill color={rating >= 1 ? '#FF9017' : '#c4c4c4'} />
        <BsStarFill color={rating >= 2 ? '#FF9017' : '#c4c4c4'} />
        <BsStarFill color={rating >= 3 ? '#FF9017' : '#c4c4c4'} />
        <BsStarFill color={rating >= 4 ? '#FF9017' : '#c4c4c4'} />
        <BsStarFill color={rating >= 5 ? '#FF9017' : '#c4c4c4'} />
      </div>
    </>
  );
};
