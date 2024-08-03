import styled from 'styled-components';

const PageWrapper = styled.div`
  background-color: ${props => props.theme.background.primary};
  color: ${props => props.theme.text.primary};
  min-height: 100vh;
  width: 100vw;
`;

export default PageWrapper;