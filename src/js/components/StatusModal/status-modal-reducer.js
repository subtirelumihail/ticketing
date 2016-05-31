import {
  STATUS_MODAL_OPEN,
  STATUS_MODAL_CLOSE
} from './status-modal-constants'

const modal = (state = { show: false, type: 'success', text: '' }, action = {}) => {
  switch (action.type) {
    case STATUS_MODAL_OPEN:
      return Object.assign({}, state, {
        show: true,
        type: action.modalType || state.type,
        text: action.modalText
      })
    case STATUS_MODAL_CLOSE:
      return Object.assign({}, state, {
        show: false,
        type: state.type,
        text: state.text
      })
    default:
      return state
  }
}

export default modal
