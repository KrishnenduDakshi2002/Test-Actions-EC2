import React, { PropsWithChildren, useState } from 'react';
import { createPortal } from 'react-dom';

function PortalRoot({ children }: Required<PropsWithChildren>) {
  return (
    <div id="portal-root" style={{ position: 'fixed', inset: 0 }}>
      {children}
    </div>
  );
}

function Backdrop({
  children,
  visibility = true,
}: {
  children: React.ReactNode;
  visibility?: boolean;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: visibility ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
      }}
    >
      {children}
    </div>
  );
}

function Portal({
  allowNestedRender = false,
  children,
}: Required<PropsWithChildren> & {
  allowNestedRender?: boolean;
}) {
  return !allowNestedRender
    ? createPortal(
        <PortalRoot>
          <Backdrop>{children}</Backdrop>
        </PortalRoot>,
        document.body
      )
    : createPortal(
        <Backdrop visibility={!allowNestedRender}>{children}</Backdrop>,
        document.getElementById('portal-root') ?? document.body
      );
}

function Modal({
  open,
  relation = 'standalone',
  children,
}: {
  open: boolean;
  relation?: 'nested' | 'standalone';
} & Required<PropsWithChildren>) {
  if (!open) return null;
  return (
    <Portal allowNestedRender={relation === 'nested'}>
      <div
        role="dialog"
        aria-label="modal"
        aria-describedby={relation}
        style={{
          position: 'absolute',
        }}
      >
        {children}
      </div>
    </Portal>
  );
}

function Trigger() {
  const [isParentModalOpen, setIsParentModalOpen] = useState(false);
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  const [thirdModal, setThirdModal] = useState(false);
  const handleClose = () => {
    setIsParentModalOpen(false);
    setIsNestedModalOpen(false);
    setThirdModal(false);
  };
  return (
    <div>
      <Modal open={isParentModalOpen}>
        <Modal open={isNestedModalOpen} relation="nested">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '350px',
              background: 'lightblue',
              height: '250px',
              paddingInline: '2rem',
            }}
          >
            <h1>Confirm</h1>
            <p>confirm your payment</p>
            <button onClick={() => setIsNestedModalOpen(false)}>back</button>
            <button onClick={handleClose}>Close</button>
          </div>
        </Modal>
        <Modal open={thirdModal} relation="nested">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '250px',
              background: 'lightgreen',
              height: '200px',
              paddingInline: '2rem',
            }}
          >
            <h3>Third Modal</h3>
            <button onClick={() => setThirdModal(false)}>back</button>
            <button onClick={handleClose}>close</button>
          </div>
        </Modal>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '250px',
            background: 'pink',
            height: '500px',
            paddingInline: '2rem',
          }}
        >
          <h3>Payment</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            deleniti?
          </p>
          <button onClick={() => setIsNestedModalOpen(true)}>Confirm</button>
          <button onClick={() => setThirdModal(true)}>Change</button>
          <button onClick={handleClose}>Close</button>
        </div>
      </Modal>

      <h2>Modal testing</h2>
      <button onClick={() => setIsParentModalOpen(true)}>Open Modal</button>
      <button onClick={() => setThirdModal(true)}>Open Third</button>
      <h1>Other heading</h1>
    </div>
  );
}

export default Trigger;

// useEffect(() => {
//   React.Children.forEach(children, (child) => {
//     if (
//       React.isValidElement(child) &&
//       'type' in child &&
//       child.type === Modal
//     ) {
//       console.log('modal');
//       console.log(child);
//     }
//   });
// }, []);
