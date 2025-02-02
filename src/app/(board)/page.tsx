import Feed from '@/components/Feed';
import Share from '@/components/Share';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className=''>
      <div className='flex justify-between text-trextGray font-bold border-b-[1px] border-borderGray px-4 pt-4'>
        <Link href='/' className='pb-3 flex  border-b-4 border-iconBlue'>
          For You
        </Link>
        <Link href='/' className='pb-3 md:flex '>
          Following
        </Link>
        <Link href='/' className='pb-3 hidden md:flex '>
          React js
        </Link>
        <Link href='/' className='pb-3 hidden md:flex '>
          Javascript
        </Link>
        <Link href='/' className='pb-3 hidden md:flex '>
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};
export default HomePage;
