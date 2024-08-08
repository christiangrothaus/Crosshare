import { Form, FormCheck, FormGroup, FormLabel } from 'react-bootstrap';
import FormRange from 'react-bootstrap/esm/FormRange';
import styled from 'styled-components';
import { Spacing } from '../constants/css.constant';
import FormSection from './FormSection';

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
    <Form>
      <Row>
        <Column>
          <FormSection title='Dot'>
            <FormGroup>
              <FormCheck type='checkbox' label='Show' />
              <FormCheck type='checkbox' label='Show Border' />
            </FormGroup>
            <FormGroup>
              <FormLabel>Size</FormLabel>
              <FormRange />
            </FormGroup>
            <FormGroup>
              <FormLabel>Opacity</FormLabel>
              <FormRange />
            </FormGroup>
          </FormSection>
        </Column>
        <Column>
          <FormSection title='Layer Settings'>
          </FormSection>
        </Column>
      </Row>
    </Form>
  );
};

export default CrosshairForm;