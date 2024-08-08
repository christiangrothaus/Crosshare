import styled from 'styled-components';
import CrosshairPlusModel from '../models/crosshair-plus.model';

type PlusElementProps = {
  $plus: CrosshairPlusModel;
};

type PlusWrapperProps = {
  $isEvenWidth: boolean,
  $gap: number
};

const TopBottomWrapper = styled.div<PlusWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  gap: ${props => props.$gap}px;
`;

const CenterSpacer = styled.div<PlusElementProps>`
  width: ${props => props.$plus.width}px;
  height: ${props => props.$plus.width}px;
  color: transparent;
`;

const RightLeftWrapper = styled.div<PlusWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  gap: ${props => props.$gap}px;
`;

const PlusTopElement = styled.div<PlusElementProps>`
  background-color: ${props => props.$plus.color};
  width: ${props => props.$plus.width}px;
  height: ${props => props.$plus.length}px;
`;

const PlusRightElement = styled.div<PlusElementProps>`
  background-color: ${props => props.$plus.color};
  width: ${props => props.$plus.length}px;
  height: ${props => props.$plus.width}px;
`;

const PlusBottomElement = styled.div<PlusElementProps>`
  background-color: ${props => props.$plus.color};
  width: ${props => props.$plus.width}px;
  height: ${props => props.$plus.length}px;
`;

const PlusLeftElement = styled.div<PlusElementProps>`
  background-color: ${props => props.$plus.color};
  width: ${props => props.$plus.length}px;
  height: ${props => props.$plus.width}px;
`;

type Props = {
  plus: CrosshairPlusModel
};

const CrosshairPlusRenderer = ({ plus }: Props) => {
  const isEvenWidth = plus.width % 2 === 0;
  const gap = plus.gap - 1;

  return (
    <>
      <RightLeftWrapper $isEvenWidth={isEvenWidth} $gap={gap}>
        <PlusRightElement $plus={plus} />
        <TopBottomWrapper $isEvenWidth={isEvenWidth} $gap={gap}>
          <PlusTopElement $plus={plus} />
          {!!plus.gap && <CenterSpacer $plus={plus} />}
          <PlusBottomElement $plus={plus} />
        </TopBottomWrapper>
        <PlusLeftElement $plus={plus} />
      </RightLeftWrapper>
    </>
  );
};

export default CrosshairPlusRenderer;