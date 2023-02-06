// header + footer 합쳐지는 entry 페이지
// 공용헤더푸터

import { Outlet } from "react-router-dom";
import BasicFooter from "./Footer/Footer";
import BasicHeader from "./Header/Header";

function Layout() {
  return (
    <>
      <BasicHeader />
      <Outlet />
      {/* {Outlet은 route dom 라이브러리에 현재주소에 맞는 컴포넌트를 가지고 오게하는 역할. 
                children은 아님. 그 역할을 대체하는 것임.(children은 버튼)
                (**순서 : 헤더와 푸터 사이 > outlet + routes 폴더에서 routing.js에서 
                path: '/', element: <Layout />, children: [ ] 의 children 안에 {}로 컴포넌트 path,element를 작성함.  */}
      <BasicFooter />
    </>
  );
}

export default Layout;
