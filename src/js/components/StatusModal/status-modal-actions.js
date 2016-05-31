import {
  STATUS_MODAL_OPEN,
  STATUS_MODAL_CLOSE
} from './status-modal-constants'

export function openStatusModal (modalType, modalText) {
  return {
    type: STATUS_MODAL_OPEN,
    modalType,
    modalText
  }
}

export function closeStatusModal () {
  return {
    type: STATUS_MODAL_CLOSE
  }
}
