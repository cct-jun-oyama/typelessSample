import { createActions } from 'typeless';

// --- Constants ---
export const MODULE = 'stationSelect';

export const PrefecturesList: PrefecturesList = [
  { id: 0, name: '-----', selected: true },
  { id: 1, name: '北海道', selected: false },
  { id: 2, name: '青森県', selected: false },
  { id: 3, name: '岩手県', selected: false },
  { id: 4, name: '宮城県', selected: false },
  { id: 5, name: '秋田県', selected: false },
  { id: 6, name: '山形県', selected: false },
  { id: 7, name: '福島県', selected: false },
  { id: 8, name: '茨城県', selected: false },
  { id: 9, name: '栃木県', selected: false },
  { id: 10, name: '群馬県', selected: false },
  { id: 11, name: '埼玉県', selected: false },
  { id: 12, name: '千葉県', selected: false },
  { id: 13, name: '東京都', selected: false },
  { id: 14, name: '神奈川県', selected: false },
  { id: 15, name: '新潟県', selected: false },
  { id: 16, name: '富山県', selected: false },
  { id: 17, name: '石川県', selected: false },
  { id: 18, name: '福井県', selected: false },
  { id: 19, name: '山梨県', selected: false },
  { id: 20, name: '長野県', selected: false },
  { id: 21, name: '岐阜県', selected: false },
  { id: 22, name: '静岡県', selected: false },
  { id: 23, name: '愛知県', selected: false },
  { id: 24, name: '三重県', selected: false },
  { id: 25, name: '滋賀県', selected: false },
  { id: 26, name: '京都府', selected: false },
  { id: 27, name: '大阪府', selected: false },
  { id: 28, name: '兵庫県', selected: false },
  { id: 29, name: '奈良県', selected: false },
  { id: 30, name: '和歌山県', selected: false },
  { id: 31, name: '鳥取県', selected: false },
  { id: 32, name: '島根県', selected: false },
  { id: 33, name: '岡山県', selected: false },
  { id: 34, name: '広島県', selected: false },
  { id: 35, name: '山口県', selected: false },
  { id: 36, name: '徳島県', selected: false },
  { id: 37, name: '香川県', selected: false },
  { id: 38, name: '愛媛県', selected: false },
  { id: 39, name: '高知県', selected: false },
  { id: 40, name: '福岡県', selected: false },
  { id: 41, name: '佐賀県', selected: false },
  { id: 42, name: '長崎県', selected: false },
  { id: 43, name: '熊本県', selected: false },
  { id: 44, name: '大分県', selected: false },
  { id: 45, name: '宮崎県', selected: false },
  { id: 46, name: '鹿児島県', selected: false },
  { id: 47, name: '沖縄県', selected: false },
];

export const Actions = createActions(MODULE, {
  loadStart: null,
  selectPrefecturesList: (id: number) => ({ payload: { id } }),
  errorOcurred: (error: string) => ({ payload: { error } }),
});

type ViewType = 'loading' | 'show' | 'error';

export interface State {
  viewType: ViewType;
  error: string;
  prefectures: PrefecturesList;
  line: any;
  station: any;
}

declare module 'typeless/types' {
  interface DefaultState {
    station: State;
  }
}

export type PrefecturesList = PrefecturesData[];

export type PrefecturesData = {
  id: number;
  name: string;
  selected: boolean;
};
