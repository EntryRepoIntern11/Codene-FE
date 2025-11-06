import React from "react";
import Picture from "../assets/logo CODENE.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Body>
      <SecondBox>
        <Header>
          <SelectBox>
            <Subject>일반 주제</Subject>
            <hr />
            <Code>코드</Code>
          </SelectBox>
          <Link to="/">
            <img src={Picture} alt="로고" />
          </Link>
          <TextBox>
            <LoginText href="/login">Login</LoginText>
            <MyPageText href="/MyPage">MyPage</MyPageText>
          </TextBox>
        </Header>
        <hr />
        <Kategorie>
          <SelectKate>
            <CodeSpan>코드 게시판</CodeSpan>
            <CodeSpan>코드 찬반 선택</CodeSpan>
            <CodeSpan>전날의 우승</CodeSpan>
          </SelectKate>
        </Kategorie>
        <hr />
        <SignUpTotalBox>
          <SignUpBox>
            <SignUpTitle>회원가입</SignUpTitle>
            <hr />
            <NumberContainer>
              <SignUpSpan>학번</SignUpSpan>
              <SignUpInput type="text" placeholder="학번을 입력해주세요" />
            </NumberContainer>
            <PwdContainer>
              <SignUpSpan>비밀번호</SignUpSpan>
              <SignUpInput
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </PwdContainer>
            <CheckPwdContainer>
              <SignUpSpan>비밀번호 확인</SignUpSpan>
              <SignUpInput
                type="password"
                placeholder="비밀번호를 다시 입력해주세요"
              />
            </CheckPwdContainer>
            <SignUpButton>로그인</SignUpButton>
            <YesUser>
              계정이 있으신가요?
              <LoginUser href="/login">로그인</LoginUser>
            </YesUser>
          </SignUpBox>
        </SignUpTotalBox>
      </SecondBox>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100vh;
`;
const SecondBox = styled.div`
  hr {
    border-width: 2px;
    border-color: #5c6bc0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 14px;
  margin-bottom: 18px;

  img {
    width: 262px;
    height: 80px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 35px;

  hr {
    height: 45px;
  }
`;

const Subject = styled.span`
  font-size: 30px;
`;

const Code = styled.span`
  font-size: 30px;
  color: #777777;
`;

const TextBox = styled.div``;

const LoginText = styled.a`
  font-size: 30px;
  padding-right: 72px;
  text-decoration: none;
  color: black;
`;

const MyPageText = styled.a`
  font-size: 30px;
  text-decoration: none;
  color: black;
`;

const Kategorie = styled.div``;

const SelectKate = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px 0;
`;
const CodeSpan = styled.span`
  font-size: 25px;
`;

const SignUpTotalBox = styled.div`
  display: flex;
  justify-content: center;
`;
const SignUpBox = styled.div`
  width: 535px;
  min-height: 485px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;

  hr {
    margin-bottom: 54px;
  }
`;

const SignUpTitle = styled.span`
  font-size: 30px;
  margin-bottom: 47px;
`

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PwdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUpSpan = styled.span`
  font-size: 14px;
  color: #555555;
  margin-left: 7px;
`;

const SignUpInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding-left: 20px;
  border: 1px solid #999999;
  margin-top: 7px;
  margin-bottom: 46px;
`;

const CheckPwdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const YesUser = styled.span`
  display: flex;
  justify-content: center;
  padding-top: 24px;
  padding-bottom: 189px;
`;

const LoginUser = styled.a`
  color: #3f51b5;
  text-decoration: none;
`;

const SignUpButton = styled.button`
  color: white;
  border: none;
  background-color: #9fa8da;
  opacity: 0.5;
  border-radius: 4px;
  width: 100%;
  height: 50px;
  margin-top: 19px;

  &:hover {
    background-color: #3f51b5;
    opacity: 1;
  }
`;
export default Login;
