import Link from 'next/link'

export default function Me() {
  const name = "Ibrahim Diallo";
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  )
}
