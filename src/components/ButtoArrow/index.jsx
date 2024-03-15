import { BackButton, StyledArrowLeft } from './style'

export const ButtoArrow = ({ theme, navegation }) => (
  <BackButton onClick={() => navegation(-1)}>
    <StyledArrowLeft theme={theme} />
  </BackButton>
);

export default BackButton;
