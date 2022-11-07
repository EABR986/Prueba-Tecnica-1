/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';

import Modal from './Modal';

const Card = (props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <motion.div
        className=" items-center cardDiv movieCard hoover:opacity-90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        key={props.title}
      >
        <img
          className="cardImg"
          src={props.url}
          alt="Character"
          onClick={() => setOpenModal(true)}
        />
        <p className=" justify-center text-gray-200">{props.title}</p>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          title={props.title}
          url={props.url}
          description={props.description}
        />
      </motion.div>
    </>
  );
};

export default Card;
