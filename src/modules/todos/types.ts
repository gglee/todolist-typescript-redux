import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// ready to typescript type for actions
export type TodosAction = ActionType<typeof actions>;

// type declaration for state
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export type TodosState = Todo[];
