import { useCallback, useEffect, useRef, useState } from 'react';
import Portal, { createContainer } from '@/entities/weather/portal';
import { AIcon } from '../../atoms';

import './styles.scss';

const MODAL_CONTAINER_ID = 'modal-container-id';

const Modal = ({ title, onClose, children, bigSize = false }) => {
  const rootRef = useRef(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleWrapperClick = (event) => {
      const { target } = event;

      if (target instanceof Node && rootRef.current === target) {
        onClose?.();
      }
    };
    const handleEscapePress = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    window.addEventListener('click', handleWrapperClick);
    window.addEventListener('keydown', handleEscapePress);

    return () => {
      window.removeEventListener('click', handleWrapperClick);
      window.removeEventListener('keydown', handleEscapePress);
    };
  }, [onClose]);

  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <div className="modal" ref={rootRef} data-testid="wrap">
        <div className={`modal__content ${bigSize && `content-map`}`}>
          <button
            className="modal__closeButton"
            type="button"
            onClick={handleClose}
            data-testid="modal-close-button"
          >
            <AIcon name="cross" />
          </button>
          <p className="modal__title">{title}</p>
          {children}
        </div>
      </div>
    </Portal>
  ) : null;
};

export default Modal;
