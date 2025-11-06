import React from "react";
import styled from "@emotion/styled";
import Logo from "../assets/logo CODENE.svg";

const Chatting_topic = () => {
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
              <Sub_Post>주제 게시판</Sub_Post>
              <Sub_Choose>주제 찬반 선택</Sub_Choose>
              <Last_Winner>전날의 우승</Last_Winner>
            </Select_Menu>
          </Select>
          <Line></Line>
        </Header>
        <Main>
          <Chatting_Container>
            <Chatting_time>현재 시각이 떠용</Chatting_time>
            <Chatting_box>
              <Chatting>
                <Chatting_name>
                  이름 <Chat_name_time>(10:20)</Chat_name_time>
                </Chatting_name>
                <Chatting_detail>
                  내용이 떠야해용 (기능개발때 할거지용~)
                </Chatting_detail>
              </Chatting>
            </Chatting_box>
            <Chatting_input>#채팅을 입력해주세용</Chatting_input>
          </Chatting_Container>
        </Main>
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
  height: 166px;
`;

const Main = styled.div`
  width: 100%;
  height: 1000px;
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
  color: #000000;
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
  color: #777777;
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

const Chatting_Container = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e8eaf6;
  padding: 20px;
`;

const Chatting_box = styled.div`
  width: 99%;
  height: 99%;
  display: flex;
  justify-content: center;
  align-items: end;
  padding: 20px;
`;

const Chatting = styled.div`
  width: 100%;
  height: px;
`;

const Chatting_time = styled.span`
  margin: 0 10px;
  height: 12%;
  font-size: 20px;
  font-weight: 700;
  color: #999999;
`;

const Chatting_name = styled.div`
  width: 95%;
  font-size: 30px;
  font-weight: 700;
  color: #000000;
  display: flex;
  align-items: center;
`;

const Chatting_detail = styled.span`
  font-size: 25px;
  font-weight: 700;
  color: #000000;
  margin: 10px 0;
`;

const Chat_name_time = styled.span`
  color: #ababab;
  font-size: 20px;
  font-weight: 700;
`;

const Chatting_input = styled.div`
  width: 97%;
  height: 8%;
  border: 1px solid #3f51b5;
  color: #ababab;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

export default Chatting_topic;
