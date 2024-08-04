import styled from 'styled-components';
import { Spacing } from '../constants/css';
import FormSection from './FormSection';
import RangeSlider from './future-inputs/RangeSlider';
import Toggle from './future-inputs/Toggle';

const Row = styled.div`
  display: flex;
  gap: ${Spacing.M};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.L};
  flex-grow: 1;
  width: 0;
`;

const CrosshairForm = () => {
  return (
    <Row>
      <Column>
        <FormSection title='Dot'>
          <Toggle />
          <RangeSlider max={10} />
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