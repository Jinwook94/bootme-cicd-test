import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  padding: 0 1.25rem;
  word-break: keep-all;
  border-bottom: 1px solid #f2f2f2;

  @media (max-width: 991px) {
    padding: 0;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;

  @media (min-width: 576px) and (max-width: 767px) {
    height: 3rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    height: 3.375rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  margin-right: 4.5rem;
`;

export const ServiceName = styled.span`
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  margin-left: 0.15rem;
`;

export const HeaderItem = styled.span`
  margin-right: 2rem;
  color: #000;
  font-size: 1.125rem;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  justify-content: space-between;
`;

export const NotiButton = styled.button`
  background: none;
  margin-top: 5px;
`;

export const MenuButton = styled.div`
  display: none;
  position: relative;
  cursor: pointer;
  height: 45px;
  @media (max-width: 768px) {
    display: inline-block;
  }
  &:hover {
    &:before {
      content: '';
      position: absolute;
      top: 6px;
      left: 6px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #f2f2f2;
    }
  }
`;

export const LogIn = styled.a`
  color: #6b6b6b;
  text-decoration: none;
  cursor: pointer;
`;

export const DotWrapper = styled.div`
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const SignIn = styled.a`
  color: #6b6b6b;
  text-decoration: none;
  cursor: pointer;
  @media (max-width: 1200px) {
    display: none;
  }
`;
