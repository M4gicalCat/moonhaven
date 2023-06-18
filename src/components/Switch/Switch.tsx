import styled from 'styled-components';
import { ChangeEventHandler, ReactNode, useId } from 'react';

const SwitchContainer = styled.div<{ $id: string }>`
  --switch-on-color: yellow;
  --switch-off-color: grey;
  --switch-background-color: black;
  --switch-border-color: #00bfff;
  --switch-z-index: 0;
  --switch-animation-duration: 0.1s;
  width: max-content;

  .switch_label {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    * {
      display: block;
    }
  }

  .on {
    display: none;
    > .circle {
      background: var(--switch-on-color, yellow);
      position: relative;
    }
  }

  .off {
    display: block;
    > .circle {
      animation: var(--switch-animation-duration) reverse linear ltr,
        var(--switch-animation-duration) linear appear;
      position: relative;
      background: var(--switch-off-color, grey);
    }
  }

  .on,
  .off {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: calc(var(--switch-z-index) + 2);
  }

  #${({ $id: i }) => i}:checked + .switch_label .on {
    display: block;
  }

  #${({ $id: i }) => i}:checked + .switch_label .switch_background .on {
    animation: var(--switch-animation-duration) linear appear;
  }

  .switch_background .off {
    animation: var(--switch-animation-duration) linear appear;
  }

  #${({ $id: i }) => i}:checked + .switch_label .on > .circle {
    animation: var(--switch-animation-duration) linear ltr,
      var(--switch-animation-duration) linear appear;
    left: 100%;
    transform: translateX(-100%);
  }

  #${({ $id: i }) => i}:checked + .switch_label .off {
    display: none;
  }

  .circle {
    width: 1em;
    height: 1em;
    border-radius: 0.5em;
  }

  #${({ $id: i }) => i} {
    opacity: 0;
    position: absolute;
    border: none;
    outline: none;
    background-color: transparent;
    color: transparent;
  }

  .switch_container {
    position: relative;
    width: 2.2em;
    height: 1em;
    border-radius: 0.7em;
    padding: 0.2em;
    z-index: var(--switch-z-index);
    background: var(--switch-background-color, black);
  }

  .switch_background {
    top: 0.1em;
    left: 0.1em;
    width: calc(100% - 0.2em);
    height: calc(100% - 0.2em);
    border-radius: 0.7em;
    position: absolute;
    overflow: hidden;
    z-index: calc(var(--switch-z-index) + 1);
    > * {
      width: 100%;
      height: 100%;
    }
  }

  .switch_bg_fullwidth {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  #${({ $id: i }) => i}:focus + .switch_label .switch_container {
    outline: 2px solid var(--switch-border-color, #00bfff) !important;
  }

  .label_text {
    margin-left: 0.5em;
  }

  @keyframes ltr {
    from {
      left: 0;
      transform: translateX(0);
    }
    to {
      left: 100%;
      transform: translateX(-100%);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 100%;
    }
  }
`;

interface SwitchProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  checked?: boolean;
  label?: string;
  on?: ReactNode;
  off?: ReactNode;
  background?: { on: ReactNode; off: ReactNode; fullWidth?: boolean };
  className?: string;
}

export const Switch = ({
  onChange,
  checked,
  label,
  on,
  off,
  background,
  className,
}: SwitchProps) => {
  const id = useId().slice(1, -1);
  return (
    <SwitchContainer $id={id} className={className}>
      <input
        className='switch_input'
        id={id}
        type='checkbox'
        name='something'
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className='switch_label'>
        <span className='switch_container'>
          {background && (
            <span
              className={`switch_background ${
                background.fullWidth ? 'switch_bg_fullwidth' : ''
              }`}
            >
              <span className='on'>{background.on}</span>
              <span className='off'>{background.off}</span>
            </span>
          )}
          <span className='on'>
            <span className='circle'>{on ?? null}</span>
          </span>
          <span className='off'>
            <span className='circle'>{off ?? null}</span>
          </span>
        </span>
        {label && <span className='label_text'>{label}</span>}
      </label>
    </SwitchContainer>
  );
};
