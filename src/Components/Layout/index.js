import React from 'react';

import GNB from "../GNB";
import Header from "../Header";
import Card from "../Card";


// 백엔드 존재시 통신해서 가져올 데이터 (dummy data)
const categories = [
  {
    name:"우리동네 취미",
    images:[
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
    ]
  },
  {
    name:"개설",
    images:[
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"},
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"}
    ]
  },
  {
    name:"내가 찜한 게시물",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ]
  },
  {
    name:"게시글 작성",
    images:[
      {src:"images/test1.png", desc:"[가방 만들기] 비즈, 뜨개질, 코바늘 무료 드림"},
      {src:"images/test.jpg", desc:"[손수건 만들기] kit 봉사 후원"},
      {src:"images/test2.png", desc:"[뜨개질] 직접 만드는 목도리"}

    ]
  },
]

const Layout = ({children}) => {
  const [contextRef, setContextRef] = React.useState(null);
  const handleContextRef = ref => setContextRef(ref);

  return (
    <div className="Home" ref={handleContextRef}>
      <GNB/>
      <Header categories={categories} contextRef={contextRef}/>
      {children}
    </div>
  );
}

export default Layout;