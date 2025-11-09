import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/logo CODENE.svg";

const Select_code = () => {
  return (
    <Body>
      <Container>
        <Header>
          <Menu>
            <Change_Page>
              <Normal_Sub>일반 주제</Normal_Sub>
              <Separation_Bar></Separation_Bar>
              <Normal_Code>코드</Normal_Code>
            </Change_Page>
            <Codene_Logo>
              <img src={Logo} width={280} height={80}></img>
            </Codene_Logo>
            <My_Info>
              <Log_Out>log out</Log_Out>
              <MyPage>My page</MyPage>
            </My_Info>
          </Menu>
          <Line></Line>
          <Select>
            <Select_Menu>
              <Sub_Post>코드 게시판</Sub_Post>
              <Sub_Choose>코드 찬반 선택</Sub_Choose>
              <Last_Winner>전날의 우승</Last_Winner>
            </Select_Menu>
          </Select>
          <Line></Line>
        </Header>
        <Main>
          <Subject_container>
            <Choice_1>
              <Code>
              <Code_Name>
                코드 이름
              </Code_Name>
              <Code_Box>
                {"여기에 코드 내용이 들어가용"}
              </Code_Box>
              </Code>
              <V>V</V>
            </Choice_1>

            <Choice_2>
              <Code>
              <Code_Name>
                코드 이름
              </Code_Name>
              <Code_Box>
                {"여기에 코드 내용이 들어가용"}
              </Code_Box>
              </Code>
              <S>S</S>
            </Choice_2>
          </Subject_container>
        </Main>
        <Under>
          <Chat_Button>채팅</Chat_Button>
        </Under>
      </Container>
    </Body>
  );
};

const Body = styled.div`
  width: 1915px;
  height: 990px;
  background-color: #ffffff;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
  height: 227px;
`;

const Main = styled.div`
  width: 100%;
  height: 602px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Change_Page = styled.div`
  width: 245px;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Normal_Sub = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #777777;
  display: flex;
`;

const Separation_Bar = styled.div`
  width: 0px;
  height: 50px;
  border: solid 0.5px #777777;
`;

const Normal_Code = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #000000;
`;

const Codene_Logo = styled.div`
  width: 262px;
  height: 80px;
`;

const My_Info = styled.div`
  width: 256px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;
const Log_Out = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #000000;
`;

const MyPage = styled.span`
  font-size: 30px;
  font-weight: 400;
  color: #000000;
`;
const Line = styled.div`
  width: 100%;
  height: 0px;
  border: 0.5px solid #5c6bc0;
`;

const Select = styled.div`
  width: 100%;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Select_Menu = styled.div`
  width: 80%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Sub_Post = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: #000000;
`;

const Sub_Choose = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: #000000;
`;

const Last_Winner = styled.span`
  font-size: 25px;
  font-weight: 400;
  color: #000000;
`;

const Subject_container = styled.div`
  width: 100%;
  height: 720px;
  background-color: #d9d9d9;
  display: flex;
  position: relative;
`;

const Choice_1 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 700;
  color: #000000;
  background-color: #9fa8da;
`;

const Choice_2 = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  font-weight: 700;
  color: #000000;
  background-color: #ff9d9d;
`;

const Code = styled.div`
  width: 500px;
  height: 496px;
`


const Code_Name = styled.div`
  
`

const Code_Box = styled.div`
  
`

const V = styled.span`
  position: absolute;
  font-size: 60px;
  font-weight: 700;
  top: 43%;
  left: 45%;
  color: #ffffff;
`;

const S = styled.span`
  position: absolute;
  font-size: 60px;
  font-weight: 700;
  top: 43%;
  right: 45%;
  color: #ffffff;
`;

const Under = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0px;
`;

const Chat_Button = styled.div`
  width: 25%;
  height: 34%;
  background-color: #9fa8da;
  font-size: 35px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  position: absolute;
  bottom: 30px;
  justify-content: center;
  align-items: center;
`;

export default Select_code;
