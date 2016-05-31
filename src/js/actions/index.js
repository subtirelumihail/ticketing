export const SAVE_ACTIVE      = 'SAVE_ACTIVE';

import { batchActions }   from 'redux-batched-actions';
import { routeActions } from 'react-router-redux';

export function canSave(value) {
  return {
    type: !value ? SAVE_INACTIVE : SAVE_ACTIVE
  };
}

// export function saveSuccesfully(url) {
//   return dispatch => {
//     setTimeout(() => {
//       //Reset state
//       dispatch(batchActions([
//         canSave(false),
//         toggleSaving(),
//         toggleModal()
//       ]));
//       dispatch(routeActions.push(`/snippets/${url}`));
//     }, 1500);
//   };
// }
