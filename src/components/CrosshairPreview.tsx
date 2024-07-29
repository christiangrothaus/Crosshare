import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 8em;
  background-color: #f0f0f0;
`;

const CrosshairPreview = () => {
  return (
    <Wrapper>
      <h1>Crosshair Preview</h1>
    </Wrapper>
  );
};

export default CrosshairPreview;