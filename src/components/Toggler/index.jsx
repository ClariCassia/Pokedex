import React from 'react';
import {
  ToggleContainer,
  ToggleInput,
  ToggleHandleWrapper,
  ToggleHandle,
  ToggleHandleKnob,
  ToggleHandleBarWrapper,
  ToggleHandleBar,
  ToggleBase,
  ToggleBaseInside
} from './style';

const Toggle = () => {
  return (
    <ToggleContainer>
      <ToggleInput className="toggle-input" type="checkbox" />
      <ToggleHandleWrapper className="toggle-handle-wrapper">
        <ToggleHandle className="toggle-handle">
          <ToggleHandleKnob className="toggle-handle-knob" />
          <ToggleHandleBarWrapper className="toggle-handle-bar-wrapper">
            <ToggleHandleBar className="toggle-handle-bar" />
          </ToggleHandleBarWrapper>
        </ToggleHandle>
      </ToggleHandleWrapper>
      <ToggleBase className="toggle-base">
        <ToggleBaseInside className="toggle-base-inside" />
      </ToggleBase>
    </ToggleContainer>
  );
};

export default Toggle;
