import { ReactNode } from 'react';
import Navbar from 'components/Navbar';

function PageTemplate({ children }: {children: ReactNode}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default PageTemplate;
