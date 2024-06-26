import React from 'react';
// import './form.scss';
import './form.css';
// import Button from './../Button/Button';

import styled from 'styled-components';

const Desktop = '1280px';
const Tablet = '768px';

const Title = styled.h2`
  margin: 0 auto 16px;
  font-size: 32px;
  width: 265px;

  @media screen and (min-width: ${Tablet}) {
    font-size: 64px;
    width: 605px;
  }
`;

const Text = styled.p`
  margin: 0 auto 24px;
  font-size: 14px;

  @media screen and (min-width: ${Desktop}) {
    margin-bottom: 42px;
    font-size: 18px;
  }
`;

const FormField = styled.div`
  /* margin-bottom: 16px; */

  @media screen and (min-width: ${Tablet}) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: ${Desktop}) {
    margin-bottom: 29px;
  }
`;

const Input = styled.input`
  padding: 8px 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #a18268;
  background-color: transparent;
  font-size: 16px;
  line-height: 1.17;

  @media screen and (max-width: ${Tablet}) {
    margin-bottom: 25px;
  }

  @media screen and (min-width: ${Desktop}) {
    padding: 16px 42px;
  }

  &:focus {
    border-color: var(--color-brand-light);
    outline: none;
  }

  &::placeholder {
    color: #a18268;
  }
`;

const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 18px 30px;
  border-radius: 10px;
  background-color: var(--color-brand-light);
  color: var(--color-primary-light);
  border: 1px solid var(--color-brand-light);

  &:focus,
  &:hover {
    color: black;
    border: 1px solid black;
    background-color: inherit;
  }
`;

const FormTerms = styled.p`
  font-size: 12px;
  text-align: center;
  @media screen and (max-width: ${Tablet}) {
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    width: 210px;
    text-align: center;
  }
  @media screen and (min-width: ${Desktop}) {
    display: block;
    margin: 0 auto;
    margin-top: 24px;
    width: 210px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.5;
    text-align: center;
  }
`;

const Link = styled.a`
  color: #31261a;
  text-underline-offset: 2px;
  margin-left: 6px;
`;

const Form = () => {
  return (
    <>
      <Title className=" section__title">Приєднуйся до мережі пекарень</Title>
      <Text>Заповни форму, щоб ми звʼязались з тобою!</Text>

      <form className="form" name="form" autocomplete="on">
        <FormField>
          <label className="visually-hidden" for="user-name">
            Ім’я
          </label>
          <Input
            type="text"
            id="user-name"
            name="user-name"
            placeholder="Ім’я"
            required
          />
        </FormField>

        <FormField>
          <label className=" visually-hidden" for="user-tel">
            Телефон
          </label>
          <Input
            type="tel"
            id="user-name"
            name="user-tel"
            placeholder="Телефон"
            required
          />
        </FormField>

        <FormField>
          <label className=" visually-hidden" for="user-email">
            Електронна пошта
          </label>
          <Input
            type="email"
            id="user-name"
            name="user-email"
            placeholder="Електронна пошта"
            required
          />
        </FormField>

        <FormButton className="button" type="submit">
          Замовити дзвінок
        </FormButton>

        <FormTerms>
          Натискаючи на кнопку я погоджуюсь з
          <Link href="#">політикою конфіденційності</Link>
        </FormTerms>
      </form>
    </>
  );
};

export default Form;
