import { IconClockHour2 } from '@tabler/icons-react';
// import readingTime from 'reading-time';

import type { Article as TArticle } from '../../pages/articles';

export default function Article({ article }: { article: TArticle }) {
  const { title, slug, mainImage } = article;
  // const stats = readingTime(content);
  // if (stats.minutes < 1) {
  //   stats.minutes = 1;
  // }
  return (
    <div className='mt-6'>
      <a href={`/posts/${slug}`}>
        <div
          className='relative h-32 rounded-md  border-2 border-white'
          style={{
            backgroundImage: `url(${mainImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute bottom-0 right-4 flex h-8 flex-row'>
            <IconClockHour2 className='mr-2' />
            {/* <p>{stats.minutes} min</p> */}
          </div>
        </div>
      </a>

      <h2 className='text-lg font-semibold'>{title}</h2>
      {/* <p>{content.length > 50 ? content.slice(0, 50) + ' ...' : content}</p> */}
    </div>
  );
}
