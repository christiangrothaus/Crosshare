import styled from 'styled-components';
import { Spacing } from '../constants/css';
import FormSection from './FormSection';
import Toggle from './inputs/Toggle';

const Row = styled.div`
  display: flex;
  gap: ${Spacing.M};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.L};
  flex-grow: 1;
`;

const CrosshairForm = () => {
  return (
    <Row>
      <Column>
        <FormSection title='Dot'>
          <Toggle />
        </FormSection>
      </Column>
      <Column>
        <FormSection title='Layer Settings'>
          <Toggle />
        </FormSection>
      </Column>
    </Row>
  );
};

export default CrosshairForm;