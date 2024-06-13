// layout.js 파일은 하나 혹은 그 이상의 페이지를 감싸는 껍데기를 정의한다.
// 기본적으로 모든 app 폴더는 각 layout.js 파일이 최소 하나 있어야 한다.
// 물론 각 폴더 내에 따로 layout.js 파일을 둘수도 있다. 이럴경우, 해당 폴더 하단 내에 적용된다.

import './globals.css';

//- 🔸 기존에 head 내에 들어가던 정보는 metadata에서 관리된다. 🔸
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* // 🟠 여기({children})에 같은 계층에 위치한 page.js가 들어간다! */}
    </html>
  );
}
