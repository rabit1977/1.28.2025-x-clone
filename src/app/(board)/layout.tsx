import LeftBar from '@/components/LeftBar';
import RightBar from '@/components/RightBar';

export default function BoardLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <div className='max-w-(--breakpoint-md) lg:max-w-(--breakpoint-lg) xl:max-w-(--breakpoint-xl) xxl:max-w-(--breakpoint-xxl) mx-auto flex justify-between'>
      <div className='px-2 xsm:px-4 xxl:px-8 '>
        <LeftBar />
      </div>
      <div className='flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray '>
        {children}
        {modal}
      </div>
      <div className='hidden lg:flex mx-4 md:ml-8 flex-1 '>
        <RightBar />
      </div>
    </div>
  );
}
