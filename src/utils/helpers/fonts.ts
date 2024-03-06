import { Work_Sans, Roboto, Poppins, Inter } from 'next/font/google';
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ['latin'], variable: '--font_inter' });

export const segoe = localFont({
  src: [
    {
      path: '../../../public/fonts/segoe-ui/segoe-ui.woff',
      weight: '400'
    },
    {
      path: '../../../public/fonts/segoe-ui/segoe-ui-semibold.woff',
      weight: '600'
    },
    {
      path: '../../../public/fonts/segoe-ui/segoe-ui-bold.woff',
      weight: '800'
    }
  ],
  variable: '--font_segoe'
});

export const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font_work_sans'
});
