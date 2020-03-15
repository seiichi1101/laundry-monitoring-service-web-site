import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const Actions = {
  updateDate: actionCreator<Date>('ACTIONS_UPDATE_DATE'),
  updateImages: actionCreator<string[]>('ACTIONS_UPDATE_IMAGES')
};