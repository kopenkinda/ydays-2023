import { type NextPage } from 'next';
import Article from '../../components/article/article';
import { IconAdjustmentsHorizontal } from '@tabler/icons-react';

export const postsData = [
  {
    id: 1,
    title: "L'aide du gouvernement",
    date: '2020-01-01',
    background:
      'https://images.unsplash.com/photo-1670858394194-9317bbeaf996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    title: 'Tes futurs projets',
    date: '2020-01-02',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    background:
      'https://images.unsplash.com/photo-1661956603025-8310b2e3036d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
  {
    id: 3,
    title: 'Second Post',
    date: '2020-01-02',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

    background:
      'https://images.unsplash.com/photo-1675747150294-0376b8c69e52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  },
];

const Posts: NextPage = () => {
  return (
    <div className='mt-12 p-6 '>
      <div className='flex flex-row justify-between'>
        <p>Filtre - 2 appliqués </p>
        <IconAdjustmentsHorizontal className='mr-2' />
      </div>
      <>
        {postsData.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
      </>
    </div>
  );
};

export default Posts;
