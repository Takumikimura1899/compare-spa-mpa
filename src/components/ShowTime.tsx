export const ShowTime = () => {
  const now = new Date().toLocaleString();
  return <div>データ取得が行われた時間: {now}</div>;
};
