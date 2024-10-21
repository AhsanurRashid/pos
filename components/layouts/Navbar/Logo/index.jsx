import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
        <Image
            src="/assets/images/logo.jpg"
            width={1000}
            height={1000}
            className="h-10 w-fit"
            alt="logo"
        />
    </Link>
  )
}

export default Logo