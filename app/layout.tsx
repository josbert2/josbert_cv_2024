import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/utils/cn';


const inter = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMono[wght].woff2',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const anurati = localFont
({
  src: './fonts/Anurati-Regular.otf',
  variable: '--font-anurati',
  weight: '400',
});





export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      data-theme="dark"
      className={cn(inter.variable, geistMono.variable, anurati.variable, 'antialiased dark')}
    >
      <body className="bg-ln-gray-25 dark">
        <ThemeProvider attribute='class'>
         
           
              

              {children}
        
    
        </ThemeProvider>
      
      </body>
    </html>
  );
}
