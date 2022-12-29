import { HeaderLeft, HeaderRight, Wrapper, LogIn, SignIn, HeaderItem, Logo, Dot, ServiceName } from './style';

import GitHubIcon from '../../../assets/github.svg';
import { Layout } from '../Layout';

const Header = () => {
  const isLogin = false;
  const username = false;

  return (
    <Layout>
      <Wrapper>
        <HeaderLeft>
          <Logo>
            <GitHubIcon />
            <ServiceName>BootMe</ServiceName>
          </Logo>
          <HeaderItem> 부트캠프 </HeaderItem>
          <HeaderItem> 회사 </HeaderItem>
          <HeaderItem> 커뮤니티 </HeaderItem>
        </HeaderLeft>
        <HeaderRight>
          {isLogin && username ? (
            <>로그인됨</>
          ) : (
            <>
              <LogIn>로그인</LogIn>
              <Dot
                width="4"
                height="4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="G0E1OVA5O87wEsrH564S"
                style={{ margin: '0 0.5rem' }}
              >
                <circle r="2" transform="matrix(1 0 0 -1 2 2)" fill="#C4C4C4"></circle>
              </Dot>
              <SignIn>회원가입</SignIn>
            </>
          )}
        </HeaderRight>
      </Wrapper>
    </Layout>
  );
};

export default Header;
