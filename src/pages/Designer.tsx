import styled from 'styled-components';
import CrosshairForm from '../components/CrosshairForm';
import CrosshairPreview from '../components/CrosshairPreview';
import PageWrapper from '../components/PageWrapper';
import { Spacing } from '../constants/css';

const FormWrapper = styled.div`
  padding: ${Spacing.M};
`;

const Designer = () => {
  return (
    <PageWrapper>
      <CrosshairPreview />
      <FormWrapper>
        <CrosshairForm />
      </FormWrapper>
    </PageWrapper>
  );
};

export default Designer;