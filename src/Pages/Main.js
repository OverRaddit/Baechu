import React from 'react';
import Layout from 'Components/Layout';
import Card from 'Components/Card';

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


const Main = () => {

  React.useEffect(() => {
    fetch('http://localhost:3000/data/board.json').then(res => res.json()).then(res => console.log(res));
  },[]);
  return (
      <Layout>
        {categories.map((card,i) => i !== 1 && i !== 3 && <Card key={i} item={card} />)}
      </Layout>
  );
}

export default Main;
