import styled from 'styled-components';
import { Spacing } from '../constants/css';

type Props = {
  children?: React.ReactNode,
  title?: string
};

const Wrapper = styled.div`
  padding: ${Spacing.S};
  background-color: ${({ theme }) => theme.inputBackground.secondary};

  h3 {
    margin-bottom: ${Spacing.S};
  }
`;

const FormSection = ({ children, title }: Props) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      {children}
    </Wrapper>
  );
};

export default FormSection;