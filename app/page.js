import Link from 'next/link';

export const metadata = {
  title: 'Next.js',
};

export default function Page() {
  return (
    <div>
      <h1>Hello, Home page!</h1>
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}