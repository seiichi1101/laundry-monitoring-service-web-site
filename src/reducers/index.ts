import { combineReducers } from 'redux'
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Actions } from '../actions/';

export interface State {
  datetime: Date;
  images: string[];
}

const initialState: State = {
  datetime: new Date(),
  images: ["https://laundry-monitoring-service-storage-prod.s3-ap-northeast-1.amazonaws.com/photos/default/default.jpg"]
};

export const Reducer = reducerWithInitialState(initialState)
  .case(Actions.updateDate, (state, datetime) => {
    return { ...state, datetime }
  })
  .case(Actions.updateImages, (state, images) => {
    if (images.length > 0) {
      return { ...state, images }
    } else {
      images = initialState.images
      return { ...state, images }
    }
  });


const laundryWebApp = combineReducers({
  Reducer
})

export default laundryWebApp;
