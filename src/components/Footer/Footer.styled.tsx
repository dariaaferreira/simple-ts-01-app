import styled from '@emotion/styled';

export const Container = styled.div`
  width: 900px;
  height: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2F303A;
  color: white;
  margin-top: 50px;
  border-radius: 6px;
  box-shadow: 40px 40px 40px rgba(0, 0, 0, 0.2);
`;

export const ContainerFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  left: 0;
  right: 0;
  padding-top: 100px;
  padding-bottom: 20px;
  color: #2F303A;
  font-size: 14px;
  z-index: 1;
`;

export const LinkItem = styled.a`
  text-decoration: underline;
  color: #2196F3;
`;

export const TextFooter = styled.p`
  margin: 0;
`;