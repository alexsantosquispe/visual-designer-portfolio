import { labels } from '@/app/constants';
import Image from 'next/image';
import { Button } from '../../atoms/Button/Button';
import {
  AdidasIcon,
  AppleIcon,
  GoogleIcon,
  NikeIcon,
  SamsungIcon
} from '@/app/icons';

export const Hero = () => {
  return (
    <section
      id='about'
      className='flex w-full scroll-mt-[4.25rem] flex-col md:scroll-mt-[4.875rem]'
    >
      <div className='flex flex-col-reverse gap-6 p-4 md:w-full md:flex-row md:gap-8 md:px-[60px] md:py-[2.625rem] lg:gap-[4.25rem]'>
        <div className='flex flex-col gap-6 md:gap-12'>
          <div className='flex flex-col items-center justify-center gap-6 md:items-start'>
            <h3 className='text-xl font-semibold md:leading-[1.875rem]'>
              {labels.hero.subTitle}
            </h3>
            <h1 className='text-4xl font-semibold md:text-[4.25rem] md:leading-tight'>
              {labels.hero.title}
            </h1>
            <p className='text-center text-lg font-normal md:text-left md:text-xl md:leading-[1.6875rem]'>
              {labels.hero.description}
            </p>
          </div>

          <Button
            title={labels.hero.contactButton}
            onClick={() => {
              console.log('Go to the footer form');
            }}
          />
        </div>

        <Image
          src='/image.png'
          width={480}
          height={360}
          alt='Header image'
          className='hidden xl:flex'
        />

        <Image
          src='/image.png'
          width={360}
          height={240}
          alt='Header image'
          className='flex w-fit self-center xl:hidden'
        />
      </div>

      <div className='hidden items-center justify-between px-[4.25rem] py-[2.625rem] md:flex md:w-full md:gap-8 lg:gap-[4.25rem]'>
        <GoogleIcon />
        <NikeIcon />
        <SamsungIcon />
        <AppleIcon />
        <AdidasIcon />
      </div>
    </section>
  );
};
