import React from 'react'
import Image from './Image'

const PostInfo = () => {
  return (
    <div className='cursor-pointer w-4 h-4 relative'>
        <Image path='icons/infoMore.svg' alt='info' w={26} h={26} />
    </div>
  )
}

export default PostInfo