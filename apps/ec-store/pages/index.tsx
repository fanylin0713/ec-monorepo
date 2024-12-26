import Image from 'next/image';

export function Index() {
  return (
    <>
      <header className="max-w-7xl mx-auto flex justify-between">
        <Image
          src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/bibianlogo.svg?t=1`}
          alt="Bibian Logo"
          width={260}
          height={70}
        />
        <nav className="flex items-center">
          <p>Hi Fany</p>
          <Image
            src={`${process.env.NEXT_PUBLIC_S3_URL}/ac.ezimport.co.jp/image/mita/shopping-cart-auction-Search.png`}
            alt="cart icon"
            width={45}
            height={60}
          />
        </nav>
      </header>
    </>
  );
}

export default Index;
