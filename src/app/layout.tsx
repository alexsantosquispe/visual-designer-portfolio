import { Epilogue } from 'next/font/google';
import './globals.css';

const epilogue = Epilogue({
  variable: '--font-epilogue',
  subsets: ['latin']
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Portfolio website' />
        <meta name='keywords' content='Portfolio website' />
        <title>Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${epilogue.variable} antialiased`}>{children}</body>
    </html>
  );
}
