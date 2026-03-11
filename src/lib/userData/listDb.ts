import Dexie from 'dexie';

export const db = new Dexie('TodoApp');

// インデックスの定義
// uuidを主キーに設定，検索やソートに使いそうな項目にインデックスを貼る
db.version(1).stores({
  tasks: 'uuid, name, created_at, completed_at'
});