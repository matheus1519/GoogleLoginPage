import styled, { keyframes } from 'styled-components';
import colors from '../../styles/theme';

const apperOpacity = keyframes`
  from {
    opacity:0;
  }
  to{
    opacity:1;
  }
`;

const charger = keyframes`
  from {
    transform: translateX(-200px);
  }
  to{
    transform: translateX(500px);

  }
`;

export const Container = styled.div`
  animation: ${apperOpacity} 0.5s;
  width: 450px;
  height: 500px;
  border: 1px solid ${colors.border};
  border-radius: 8px;
  padding: 48px 40px 36px;
  font-size: 16px;
  position: relative;
  overflow: hidden;
  img {
    display: block;
    margin: 0 auto;
  }

  a {
    color: ${colors.primary};
    border-radius: 4px;
    font-size: 14px;
    font-weight: bold;
  }

  span {
    display: block;
    color: ${colors.text.primary};
    text-align: center;
    width: 100%;
  }
  h1 + span {
    padding-top: 12px;
  }

  span {
    div {
      margin: 0 auto;
      width: fit-content;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      color: ${colors.text.terc};
      font-size: 14px;
      border: 1px solid ${colors.border};
      border-radius: 16px;
      height: 32px;
      display: flex;
      align-items: center;
      padding: 5px 7px 5px 5px;
    }
    div:hover {
      background: rgba(60, 64, 67, 0.039);
      cursor: pointer;
    }
    small {
      font-size: 14px;
      margin: 0 8px;
    }
  }

  h1 {
    font-weight: normal;
    font-size: 24px;
    padding-top: 16px;
  }

  footer {
    display: block;
    margin-top: 50px;

    small {
      display: block;
      margin-top: auto;
      font-size: 14px;
      color: ${colors.text.secondary};
      padding: 9px 0 3px;
    }
  }
`;

export const InputData = styled.div`
  width: 100%;
  ${(props) => props.password && 'padding-top: 8px;'}

  div {
    position: relative;
    padding-top: 8px;
    color: rgba(0, 0, 0, 0.651);

    div {
      position: absolute;
      right: 4px;
      top: 11px;
      border-radius: 50%;
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;

      &:hover {
        cursor: pointer;
      }
      &:active {
        background: ${colors.border};
        box-shadow: inset 0px 0px 0px 2px #eee;
      }
    }
    svg {
      animation: none;
    }
  }

  input {
    width: 100%;
    padding: 16px;
    border: 1px solid
      ${(props) => (!props.error ? colors.border : colors.error)};
    border-radius: 5px;
    font-size: 16px;
  }
  input:focus {
    border: 2px solid
      ${(props) => (!props.error ? colors.primary : colors.error)};
    margin-bottom: -2px;
  }

  input:focus + label {
    top: 0px;
    left: 10px;
    padding: 0 4px;
    color: ${(props) => (!props.error ? colors.primary : colors.error)};
    font-size: 12px;
  }

  input:valid + label {
    top: 0px;
    left: 10px;

    padding: 0 4px;
    font-size: 12px;
  }

  label {
    color: ${(props) => (!props.error ? colors.text.label : colors.error)};
    position: absolute;
    top: 24px;
    left: 18px;
    background: ${colors.background};
    transition: all 0.2s;
  }
  span {
    display: block;
    padding: 9px 0 3px;
    text-align: left;
  }

  > small {
    padding-top: 6px;
    font-size: 12px;
    color: ${colors.error};
    svg {
      margin-right: 8px;
      transform: translateY(3px);
    }
  }
`;

export const FooterActions = styled.div`
  margin: 32px 0 20px;
  display: flex;
  justify-content: space-between;

  .btn-secondary {
    margin-left: -8px;
  }
`;

export const FooterOut = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  select:hover {
    border: none;
  }

  select,
  a {
    color: ${colors.text.footer.text};
    font-size: 12px;
  }
  ul {
    list-style: none;
    display: flex;
    margin-right: -16px;
  }
  a {
    padding: 6px 16px;
    border-radius: 2px;
  }
  a:hover {
    cursor: pointer;
  }
  a:active {
    background: ${colors.text.footer.active};
  }
`;

export const FunctionalBox = styled.div`
  padding-top: 24px;
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 4px;
  background: ${colors.border};

  &::before {
    content: '';
    border-radius: 8px;
    display: block;
    width: 200px;
    height: 4px;
    background: ${colors.primary};
    animation: ${charger} 1.5s ease-in-out infinite;
  }
`;

export const ContainerOut = styled.div``;
