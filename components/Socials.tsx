import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="hidden lg:flex gap-5 flex-1">
      <Link href={"https://facebook.com"}>
        <Image
          src="/images/facebook.png"
          alt="facebook"
          width={24}
          height={24}
        />
      </Link>

      <Link href={"https://instagram.com"}>
        <Image
          src="/images/instagram.png"
          alt="instagram"
          width={24}
          height={24}
        />
      </Link>

      <Link href={"https://twitter.com"}>
        <Image src="/images/twitter.png" alt="tiktok" width={24} height={24} />
      </Link>

      <Link href={"https://youtube.com"}>
        <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
      </Link>
    </div>
  );
};

export default Socials;
