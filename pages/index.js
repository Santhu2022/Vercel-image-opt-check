import Image from 'next/image';
import mountain from '../public/mountain.jpeg';
import { useState } from 'react';

const remoteImage1 = "https://weddingimage.betterhalf.ai//weddings/777c8603-b07d-4193-849b-06646df35e65/admin_uploads/46e5b266-b153-4f8b-ab4f-5d144d9165a9.jpg";
const remoteImage2 = "https://weddingimage.betterhalf.ai//weddings/9d71eae7-c2eb-44cc-91d8-2b9602b5ee6f/admin_uploads/2a99f2cb-408d-45a4-b436-869a57e21b13.jpg";

const Home = () => {

  const [imageSrc, setImageSrc] = useState(remoteImage1);


  return (
    <div className='pb-20'>
      <Image
        src={mountain}
        alt='mountain'
      />

      <div className='relative h-[460px] w-full'>
        <Image src={remoteImage1}
          fill
          className='object-contain'
          alt=''
          sizes="(min-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className='relative h-[460px] w-full'>
        <Image src={imageSrc}
          fill
          className='object-contain'
          alt=''
          sizes="(min-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className='flex justify-center'>
        <button className='bg-white text-black rounded-sm m-2 p-1' onClick={() => setImageSrc(remoteImage1)}>First Image</button>
        <button className='bg-white text-black rounded-sm m-2 p-1' onClick={() => setImageSrc(remoteImage2)}>Second Image</button>
      </div>
    </div>
  );
};

export default Home;