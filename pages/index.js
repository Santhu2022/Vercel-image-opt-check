import Image from 'next/image';

const Home = () => {
  return (
    <div className='h-96'>
      <Image src={'https://weddingimage.betterhalf.ai//weddings/ff4d6eca-68f3-4ff5-a862-253745c06224/gmap/140d07ae-7096-4bcc-91ec-d3297fce5885.JPG'}
        fill
        className='object-contain'

      />
    </div>
  );
};

export default Home;