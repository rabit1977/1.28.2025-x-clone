import Image from './Image';
import PostInfo from './PostInfo';

const Post = () => {
  return (
    <div className='p-4 border-y-[1px] border-borderGray'>
      {/* Post type */}
      <div className='flex items-center gap-2 text-textGray font-bold mb-2'>
        icon
        <span>Dev Ops reposted</span>
      </div>
      {/* Post Content */}
      <div className='flex gap-4'>
        {/* Avatar */}
        <div className='relative w-10 h-10 overflow-hidden rounded-full'>
          <Image
            path='general/avatar.png'
            w={100}
            h={100}
            alt='avatar'
            tr={true}
          />
        </div>
        {/* Content */}
        <div className='flex-1 flex flex-col gap-2'>
          {/* TOP */}
          <div className='flex items-center justify-between gap-2'>
            <div className='flex items-center gap-2 flex-wrap'>
              <h1 className='font-bold text-md'>Dev Ops</h1>
              <span className='text-textGray'>@devops</span>
              <span className='text-textGray'>1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* Text & Media */}
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla, purus non accumsan lacinia, nisl odio ultricies nisi,
            eget convallis nisl nisl quis nisl.
          </p>
          <Image path='general/post.jpeg' w={600} h={600} alt='avatar' />
        </div>
      </div>
    </div>
  );
};

export default Post;
