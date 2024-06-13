import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <h1>The Blog</h1>
      {/* 이것이 바로 다이나믹 라우터! 동적 라우터! */}
      <p>
        <Link href="/blog/post-1">Post-1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">Post-2</Link>
      </p>
    </main>
  );
}
