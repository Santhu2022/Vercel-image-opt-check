import Image from 'next/image';
import mountain from '../public/mountain.jpeg';

const remoteImage = "https://weddingimage.betterhalf.ai//weddings/777c8603-b07d-4193-849b-06646df35e65/admin_uploads/46e5b266-b153-4f8b-ab4f-5d144d9165a9.jpg";

const Home = () => {
  return (
    <div>
      <Image
        src={mountain}
        alt='mountain'
      />

      <div className='relative h-[460px] w-full'>
        <Image src={remoteImage}
          fill
          className='object-contain'
          alt=''
          sizes="(min-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
};

export default Home;