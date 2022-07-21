import Menu from 'components/menu/menu';
import Footer from 'components/footer/footer';
import PageHead from 'components/head/head';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <PageHead title={title} />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
}
