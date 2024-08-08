import styled from 'styled-components';

type Props = {
  isLoading: boolean;
  children?: React.ReactNode;
};

const Wrapper = styled.div<{ $isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  width: 100%;
  min-width: 100%;
  opacity: ${(props) => (props.$isLoading ? 0.5 : 1)};
  pointer-events: ${(props) => (props.$isLoading ? 'none' : 'auto')};
  transition: opacity 0.3s;
`;

const Loading = ({ isLoading, children }: Props) => {
  return (
    <Wrapper $isLoading={isLoading}>
      {!isLoading && children}
    </Wrapper>
  );
};

export default Loading;