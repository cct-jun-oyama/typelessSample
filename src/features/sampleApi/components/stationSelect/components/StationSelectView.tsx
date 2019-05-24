import React from 'react';
import { useActions, useMappedState } from 'typeless';
import { Actions, PrefecturesData } from '../interface';

export function StationSelectView() {
  const { selectPrefecturesList } = useActions(Actions);
  const { viewType, error, prefectures } = useMappedState(
    state => state.station
  );

  const renderMssage = () => {
    switch (viewType) {
      case 'loading': {
        return <span>Loading...</span>;
      }
      case 'error': {
        return <span>An error occurred: {error}</span>;
      }
    }
  };

  return (
    <div
      style={{
        width: 400,
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        margin: '80px auto',
        textAlign: 'center',
      }}
    >
      {renderMssage()}
      <select onChange={e => selectPrefecturesList(Number(e.target.value))}>
        {prefectures.map((v: PrefecturesData, i) => {
          return (
            <option key={i} value={v.id} selected={v.selected}>
              {v.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
