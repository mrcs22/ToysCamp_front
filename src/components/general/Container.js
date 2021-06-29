import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ notCentered }) => (notCentered ? "start" : "center")};
  align-items: center;

  height: 100vh;
  max-width: 375px;
  min-width: 320px;

  margin: 0 auto;
  padding: 10px;
`;
export default Container;
