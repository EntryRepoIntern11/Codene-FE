import React from "react";
import Picture from "../assets/logo CODENE.svg";
import styled from "@emotion/styled";

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
          <img src={Picture} alt="" />
          <TextBox>
            <LoginText>Login</LoginText>
            <MyPageText>MyPage</MyPageText>
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
      </SecondBox>
    </Body>
  );
};

const Body = styled.div``;
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
  margin-top: 21px;

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

const LoginText = styled.span`
  font-size: 30px;
  padding-right: 72px;
`;

const MyPageText = styled.span`
  font-size: 30px;
`;

const Kategorie = styled.div``

const SelectKate = styled.div`
display: flex;
justify-content: space-around;

`
const CodeSpan = styled.span`
font-size: 25px;
`
export default Login;
