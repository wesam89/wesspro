'use client';
import { useRouter } from 'next/navigation';

function QuoteBtn({ children }) {
  const router = useRouter();

  return (
    <button
      className="btn absolute top-[70%] left-[10%]"
      onClick={() => {
        router.push('/contact');
      }}
    >
      {children}
    </button>
  );
}

export default QuoteBtn;
