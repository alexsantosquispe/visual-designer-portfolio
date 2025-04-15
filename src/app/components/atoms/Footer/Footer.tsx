import { labels } from '@/app/constants';

export const Footer = () => {
  return (
    <footer className='bg-primary flex w-full justify-center gap-4 p-4 font-normal text-white'>
      <p>
        {labels.footer.credits}
        <a
          className='text-accent-2'
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
