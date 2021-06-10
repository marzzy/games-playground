import { ReactNode } from 'react';
import Navbar from 'components/Navbar';

function PageTemplate({ children }: {children: ReactNode}) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default PageTemplate;
