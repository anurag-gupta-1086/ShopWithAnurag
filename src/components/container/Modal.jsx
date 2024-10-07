import React, {useRef, useEffect} from 'react'
import { ModalPresentational } from '../presentational/ModalPresentational'

export const Modal = ( props ) => {
  const {isOpen, onClose, children} = props;
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef && !modalRef.current.contains(event.target)) {
        onClose();
    }
  }

  useEffect(() => {
    if (isOpen)
        document.addEventListener('mousedown', handleOutsideClick);
    else
        document.removeEventListener('mousedown', handleOutsideClick);
    return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [isOpen])


  return (
    <div><ModalPresentational isOpen={isOpen} onClose={onClose} children={children} modalRef={modalRef}/></div>
  )
}
