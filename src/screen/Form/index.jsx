import React, { useState } from 'react';
import Input, { CheckInput, SelectInput } from '../../components/Input';
import Button from '../../components/Button';
import { Wrapper } from './style';
import Summary from '../Summary';
import ErrorPage from '../ErrorPage';

const Form = ({ view, setView }) => {
  const [data, setData] = useState({
    package: 'standard',
    age: '',
    name: '',
    currency: '',
    country: '',
  });
  const countries = [
    { label: 'Hong Kong', currency: 'HKD', rate: 1 },
    { label: 'USA', currency: 'USD', rate: 2 },
    { label: 'Australia', currency: 'AUD', rate: 3 },
  ];
  const premium = 10 * Number(data?.age) * data?.rate;

  const handlePremium = () => {
    if (data?.package === 'standard') {
      return premium;
    }
    if (data?.package === 'standard') {
      return premium;
    }
    if (data?.package === 'safe') {
      return 1.5 * premium;
    }
    if (data?.package === 'super') {
      return 1.75 * premium;
    }
  };

  const handleAgeOnChange = (e) => {
    const isNumber = /^[0-9\b]+$/;
    if (e.target.value === '' || isNumber.test(e.target.value)) {
      setData({ ...data, age: e.target.value });
    }
  };

  return (
    <Wrapper>
      <h1>
        {view === 'form'
          ? 'Tell us about yourself'
          : view === 'summary'
          ? 'Summary'
          : 'Oooops'}
      </h1>

      {view === 'form' ? (
        <div className='input-wrap'>
          <div className='inputCont'>
            <Input
              label='Name'
              value={data?.name}
              placeholder='Add text'
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>
          <div className='inputCont'>
            <Input
              label='Age'
              placeholder='Add age'
              value={data?.age}
              onChange={handleAgeOnChange}
            />
          </div>
          <div className='inputCont'>
            <SelectInput
              label='Where do you live'
              options={countries}
              optionValue='currency'
              value={data?.currency}
              placeholder='select country'
              onChange={(value) => {
                setData({
                  ...data,
                  currency: value,
                  rate: countries.find((country) => country.currency === value)
                    ?.rate,
                  country: countries.find(
                    (country) => country.currency === value
                  )?.label,
                });
              }}
            />
          </div>

          <CheckInput
            checked={data?.package === 'standard'}
            label='Standard'
            onChange={(e) => setData({ ...data, package: 'standard' })}
          />

          <CheckInput
            checked={data?.package === 'safe'}
            label='Safe'
            onChange={() => setData({ ...data, package: 'safe' })}
          />

          <CheckInput
            checked={data?.package === 'super'}
            label='Super Safe'
            onChange={() => setData({ ...data, package: 'super' })}
          />

          <h3>
            Your Premium is:{' '}
            {!premium ? 0 : `${handlePremium()} ${data?.currency}`}
          </h3>
        </div>
      ) : (
        ''
      )}

      {view === 'summary' ? (
        <Summary data={data} premium={premium} handlePremium={handlePremium} />
      ) : (
        ''
      )}
      {view === 'error' ? <ErrorPage /> : ''}

      {view !== 'error' ? (
        <div className='nav-div'>
          <Button
            content='Back'
            onClick={() =>
              view === 'summary' ? setView('form') : setView('welcome')
            }
            background='#fff'
            color='#000'
            outline='#000'
          />
          <Button
            content={view === 'summary' ? 'Buy' : 'Next'}
            onClick={() =>
              data?.age > 100 ? setView('error') : setView('summary')
            }
          />
        </div>
      ) : (
        ''
      )}
      {view === 'error' ? (
        <div className='btn-div'>
          <Button
            content='Ok :('
            padding='10px '
            background='#000'
            style={{
              fontWeight: 'normal',
              fontSize: '1.5rem',
              fontFamily: 'system-ui',
              minWidth: '200px',
            }}
            onClick={() => {
              setData({});
              setView('welcome');
            }}
          />
        </div>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default Form;
