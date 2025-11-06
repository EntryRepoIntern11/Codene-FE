import React from "react";
import Picture from "../assets/logo CODENE.svg";
import Picture1 from "../assets/승률 on.svg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const MyPage = () => {
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
            <MyPageText href="/Mypage">MyPage</MyPageText>
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
        <MyPageContainer>
          <UserBox>
            <UserImg></UserImg>
            <NameText>kangsea09</NameText>
            <WinningContainer>
              <WinningBox>
                <WinSpan>90</WinSpan>
                <Boxspan>승리</Boxspan>
              </WinningBox>
              <hr />
              <WinningBox>
                <DefeatSpan>30</DefeatSpan>
                <Boxspan>패배</Boxspan>
              </WinningBox>
              <hr />
              <WinningBox>
                <WinningSpan>30</WinningSpan>
                <Boxspan>승률</Boxspan>
              </WinningBox>
            </WinningContainer>
          </UserBox>
          <SettingContainer>
            <SettingBox>
              <SettingSecondBox>
                <WinBox>
                  <WinText>승률 표시</WinText>
                  <Img src={Picture1} alt="승률"></Img>
                </WinBox>
              </SettingSecondBox>
            </SettingBox>
          </SettingContainer>
        </MyPageContainer>
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

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 108px;
`;

const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 37px;
`;

const UserImg = styled.div`
  width: 150px;
  height: 150px;
  background-color: #e8eaf6;
  border: 3px solid #999999;
  border-radius: 100px;
`;

const NameText = styled.span`
  font-size: 40px;
`;

const WinningContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 52px;
  border: 3px solid #9fa8da;
  padding: 28px 60px;

  hr {
    border: 1px solid #9fa8da;
  }
`;

const WinningBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WinSpan = styled.span`
  font-size: 40px;
  font-weight: 900;
`;

const DefeatSpan = styled.span`
  font-size: 40px;
  font-weight: 900;
`;

const WinningSpan = styled.span`
  font-size: 40px;
  font-weight: 900;
`;

const Boxspan = styled.span`
  font-size: 30px;
`;

const SettingSecondBox = styled.div``;

const SettingContainer = styled.div``;

const SettingBox = styled.div`
  width: 620px;
  height: 520px;
  background-color: #f4f6ff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
`;
const WinBox = styled.div`
  display: flex;
  background-color: #98a5f1;
  width: 555px;
  height: 110px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 46px;
`;

const WinText = styled.span`
  color: white;
  font-size: 35px;
  margin-right: 239px;
`;
const Img = styled.img``;
export default MyPage;
