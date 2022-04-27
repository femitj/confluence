import React from 'react';

const Summary = ({ data, premium, handlePremium }) => {
  return (
    <div className='summary'>
      <h3>{data?.name},</h3>
      <p>Name : {data?.name}</p>
      <p>Age : {data?.age}</p>
      <p>Where do you live : {data?.country}</p>
      <p>Package : {data?.package}</p>
      <p>Premium : {!premium ? 0 : `${handlePremium()} ${data?.currency}`}</p>
    </div>
  );
};

export default Summary;
