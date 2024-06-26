import React, { useState } from 'react';
// import './button.scss';
// import '../../sass/utils/_variables.scss';
import styled from 'styled-components';

import { ReactComponent as IconClose } from '../../Icons/icon-close.svg';
import Modal from '../Modal/Modal';

const HeroButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 18px 30px;
  border-radius: 10px;
  background-color: var(--color-brand-light);
  color: var(--color-primary-light);
  border: 1px solid var(--color-brand-light);

  &:focus,
  &:hover {
    background-color: var(--color-primary-light);
    color: var(--color-primary-dark);
    border: 1px solid black;
  }
`;

const Button = () => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <HeroButton
        aria-label="button open"
        className="hero__button open-btn"
        type="button"
        onClick={() => setModalActive(true)}
      >
        Замовити дзвінок
      </HeroButton>
      <Modal active={modalActive} setActive={setModalActive}>
        {/* <div class="backdrop is-hidden">
          <div class="modal"> */}
        <button
          aria-label="button close"
          className="modal-btn-close"
          type="button"
          onClick={() => setModalActive(false)}
        >
          <IconClose />
        </button>
        <h2 className="modal-title">Замовити дзвінок</h2>
        <p className="modal-text">
          Залишіть заявку та наш спеціаліст зв'яжеться з Вами!
        </p>
        <form className="form" name="modal-form" autocomplete="on">
          <div className="form__field">
            <label class="form-label visually-hidden" for="user-name">
              Ім’я
            </label>
            <input
              className="form__input"
              type="text"
              id="user-name"
              name="user-name"
              placeholder="Ім’я"
              minlength="3"
              maxlength="20"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label visually-hidden" for="user-tel">
              Телефон
            </label>
            <input
              className="form__input"
              type="tel"
              id="user-tel"
              name="user-tel"
              placeholder="Телефон"
              pattern="^+[0-9]{12}"
              required
            />
          </div>

          <div className="form__field">
            <label className="form__label visually-hidden" for="user-email">
              Електронна пошта
            </label>
            <input
              className="form__input"
              type="email"
              id="user-email"
              name="user-email"
              placeholder="Електронна пошта"
              required
            />
          </div>

          <button
            className="button form__button"
            type="submit"
            aria-label="button submit"
          >
            Відправити
          </button>

          <p className="form__terms">
            Натискаючи на кнопку я погоджуюсь з
            <a className="form__link" href="#" aria-label="link">
              політикою конфіденційності
            </a>
          </p>
        </form>
        {/* </div>
        </div> */}
      </Modal>
    </>
  );
};

export default Button;
