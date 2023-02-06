// 전체 다이어리 표시하는 페이지
import Diary from "../../components/diary";
import datas from "../../mockData/mockData";

function HomePage() {
  return (
    <>
      {datas.map((data) => {
        return (
          <Diary
            title={data.title}
            date={data.date}
            userName={data.userName}
            content={data.content}
          />
        );
      })}
    </>
  );
}
export default HomePage;
