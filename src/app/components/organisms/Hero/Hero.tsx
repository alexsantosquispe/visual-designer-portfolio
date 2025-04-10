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
    <section className='flex w-full flex-col'>
      <div className='flex w-full gap-[4.25rem] px-[60px] py-[2.625rem]'>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col justify-center gap-6'>
            <h3 className='text-[1.25rem] leading-[1.875rem] font-semibold'>
              {labels.hero.subTitle}
            </h3>
            <h1 className='text-[4.25rem] leading-tight font-semibold'>
              {labels.hero.title}
            </h1>
            <p className='text-[1.0625rem] leading-[1.6875rem] font-normal'>
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
        <Image src='/image.png' width={480} height={360} alt='Header image' />
      </div>

      <div className='flex w-full items-center justify-between gap-[4.25rem] px-[4.25rem] py-[2.625rem]'>
        <GoogleIcon />
        <NikeIcon />
        <SamsungIcon />
        <AppleIcon />
        <AdidasIcon />
      </div>
    </section>
  );
};
