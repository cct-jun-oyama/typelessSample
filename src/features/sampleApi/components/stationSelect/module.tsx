import React from 'react';
import * as Rx from 'typeless/rx';
import { useModule, createEpic, createReducer } from 'typeless';
import { Actions, State, MODULE, PrefecturesList } from './interface';
import { StationSelectView } from './components/StationSelectView';
import axios from 'axios';

function fetchLineData(id: number) {
  return Rx.of(
    axios
      .get(`http://www.ekidata.jp/api/p/" + ${id} + ".json`)
      .then(data => data)
      .catch(err => err)
  ).pipe(
    Rx.map(res => {
      const result: any = res;
      return result;
    })
  );
}

const epic = createEpic(MODULE).on(
  Actions.selectPrefecturesList,
  (payload, { getState }) =>
    fetchLineData(payload.id).pipe(
      Rx.map(result => (getState().station.line = result)),
      Rx.catchError(err => {
        console.error(err);
        return Rx.of(Actions.errorOcurred(err.message));
      })
    )
);

const initialState: State = {
  viewType: 'show',
  error: '',
  prefectures: PrefecturesList,
  line: null,
  station: null,
};

const reducer = createReducer(initialState)
  .on(Actions.loadStart, state => {
    state.viewType = 'loading';
  })
  .on(Actions.errorOcurred, (state, { error }) => {
    state.viewType = 'error';
    state.error = error;
  });

export default () => {
  useModule({
    epic,
    reducer,
    reducerPath: ['station'],
  });

  return <StationSelectView />;
};
