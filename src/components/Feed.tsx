import { prisma } from '@/prisma';
import { auth } from '@clerk/nextjs/server';
import Post from './Post';

const Feed = async ({ userProfileId }: { userProfileId: string }) => {
  const { userId } = await auth();

  if (!userId) return;

  // const followings = await prisma.follow.findMany({
  //   where: { followerId: userId },
  //   select: { followingId: true },
  // });

  // const ids = followings.map((following) => following.followingId);

  // console.log(ids);

  const whereCondition = userProfileId
    ? { parentPostId: null, userId: userProfileId }
    : {
        parentPostId: null,
        userId: {
          in: [
            userId,
            ...(
              await prisma.follow.findMany({
                where: { followerId: userId },
                select: { followingId: true },
              })
            ).map((follow) => follow.followingId),
          ],
        },
      };

  const posts = await prisma.post.findMany({ where: whereCondition });

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <Post />
        </div>
      ))}
    </div>
  );
};

export default Feed;
