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
      <body className={`${epilogue.variable} antialiased`}>{children}</body>
    </html>
  );
}
