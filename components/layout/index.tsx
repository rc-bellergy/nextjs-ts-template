import Footer from './footer';
import PageHead from './head';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <PageHead title={title} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
