import React from 'react';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
  --knob-size: 1.55em;
  display: flex;
  justify-content: center;
  position: relative;
  
  @media (max-width: 768px) {
    --knob-size: 1.25em;
  }
`;

export const ToggleInput = styled.input`
  position: absolute;
  z-index: 2;
  bottom: 132.5%;
  border-radius: 50%;
  transform: rotate(-25deg);
  transform-origin: 50% 4.75em;
  width: var(--knob-size);
  height: var(--knob-size);
  opacity: 0;
  font: inherit;
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);
  cursor: pointer;

  &:checked {
    transform: rotate(25deg);
  }

  &:hover input[type="checkbox"] {
    transform: scale(2.5); /* Aumenta o tamanho do input ao passar o mouse */
  }
`;

export const ToggleHandleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -135%;
  -webkit-mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  mask-image: linear-gradient(to bottom, #000 62.125%, transparent 50%);
  width: 200%;
  overflow: hidden;
`;

export const ToggleHandle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: rotate(-25deg);
  transform-origin: bottom center;
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);

  ${ToggleInput}:checked + ${ToggleHandleWrapper} > & {
    transform: rotate(25deg);
  }
`;

export const ToggleHandleKnob = styled.div`
  position: relative;
  z-index: 1;
  border-radius: 50%;
  width: var(--knob-size);
  height: var(--knob-size);
  background-image: radial-gradient(farthest-corner at 70% 30%, #fedee2 4%, #d63534 12% 24%, #a81a1a 50% 65%, #d63534 75%);
  transition: transform .24s cubic-bezier(.65, 1.35, .5, 1);

  ${ToggleInput}:checked + ${ToggleHandleWrapper} & {
    transform: rotate(-90deg);
  }
  

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 8px 2px rgb(255 255 255 / .4);
    opacity: 0;
    transition: opacity .2s;
  }
  @media (hover: hover) {
    ${ToggleInput}:hover + ${ToggleHandleWrapper} &,
    ${ToggleInput}:focus-visible + ${ToggleHandleWrapper} &,
    &:hover {
      transform: scale(1.1);
    }

  }
`;

export const ToggleHandleBarWrapper = styled.div`
  position: relative;
  width: .5em;
  height: 3em;
`;

export const ToggleHandleBar = styled.div`
  position: absolute;
  top: calc(var(--knob-size) / 2 * -1);
  left: 0;
  width: 100%;
  height: calc(100% + var(--knob-size) / 2);
  background-image: linear-gradient(to right, #777475, #a4a4a4, #fff 45% 55%, #a4a4a4, #777475);
  background-position-x: .06125em;
  transition: background-position-x .24s cubic-bezier(.65, 1.35, .5, 1);
  box-shadow: inset 0 1em .25em rgb(0 0 0 / .4);

  ${ToggleInput}:checked + ${ToggleHandleWrapper} & {
    background-position-x: -.06125em;
  }
`;

export const ToggleBase = styled.div`
  position: relative;
  border-radius: 3.125em;
  padding: .25em;
  width: 3.5em;
  height: 1.125em;
  background-color: #fff;
  background-image: linear-gradient(to bottom, #fff, #d7d7d7);
  box-shadow: 0 -.25em .5em #fff, 0 .25em .5em #d7d7d7;
`;
export const ToggleBaseInside = styled.div`
  position: relative;
  border-radius: inherit;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #a6a6a6, #7d7d7d);
  box-shadow: inset 0 .0625em rgb(255 255 255 / .2), inset 0 -.03125em rgb(255 255 255 / 1), inset 0 -.0625em .25em rgb(0 0 0 / .1);
  transition: background-image .24s cubic-bezier(.65, 1.35, .5, 1);

  ${ToggleInput}:checked ~ ${ToggleBase} & {
    background-image: linear-gradient(to bottom, rgb(255, 203, 8), rgb(255, 203, 8));
  }
`;