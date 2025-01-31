import Link from 'next/link';
import Feed from './components/Feed';
import Share from './components/Share';

export default function HomePage() {
  return (
    <div className=''>
      <div className='flex justify-between text-trextGray font-bold border-b-[1px] border-borderGray px-4 pt-4'>
        <Link
          href='/'
          className='pb-3 flex items-center border-b-4 border-iconBlue'
        >
          For You
        </Link>
        <Link href='/' className='pb-3  md:flex items-center'>
          Following
        </Link>
        <Link href='/' className='pb-3 hidden md:flex items-center'>
          React js
        </Link>
        <Link href='/' className='pb-3 hidden md:flex items-center'>
          Javascript
        </Link>
        <Link href='/' className='pb-3 hidden md:flex items-center'>
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
}
