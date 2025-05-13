import { labels } from '@/app/constants';

export const Footer = () => {
  return (
    <footer className='flex w-full justify-center gap-4 bg-black/90 p-4 font-normal text-white'>
      <p>
        {labels.footer.credits}
        <a
          className='font-semibold hover:underline'
          href={labels.footer.creditsLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          {labels.footer.author}
        </a>
      </p>
    </footer>
  );
};
