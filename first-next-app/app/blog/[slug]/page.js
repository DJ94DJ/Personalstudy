// export default function BlogPostPage( {params} )
// Nextjs는 prop자리에 param를 자동으로 넣는다! 이걸로 동적 라우팅을 구현!
export default function BlogPostPage() {
  return (
    <main>
      <h1>Blog Post</h1>
      {/* <p>{params.slug}</p> */}
    </main>
  );
}

/* 🔸 NextJS에는 훨씬 더 많은 기능이 있습니다
커스텀된 not found page (알 수 없는 페이지) 또는 found page (찾을 수 있는 페이지)를 만들 수 있고
오류를 해결하고, 페이지를 추가하고, 데이터를 불러오고, 데이터를 바꾸는 등
다양한 것을 할 수 있으며 데모 프로젝트 말고
예전에 보여드린 식사 앱에서 할 예정입니다 🔸 */
