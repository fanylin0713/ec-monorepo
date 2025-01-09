import { useEffect, useState } from 'react';
import Image from 'next/image';

export function Payment() {
  const [catImg, setCatImg] = useState('');

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((res) => res.json())
      .then((data) => {
        setCatImg(data?.[0].url);
      });
  }, []);
  return (
    <div className='text-center my-10'>
      <p className='text-4xl font-medium mb-3'>Thank you for purchase!</p>
      <Image
        src={catImg}
        alt="cat image"
        width={480}
        height={200}
        className="rounded-lg object-cover aspect-video mx-auto"
      />
    </div>
  );
}

export default Payment;
