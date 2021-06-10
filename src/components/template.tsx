import { ReactNode } from 'react';
import Navbar from 'components/Navbar';

function PageTemplate({ children }: {children: ReactNode}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PageTemplate;
