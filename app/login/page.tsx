import dynamic from 'next/dynamic';

const HankoAuth = dynamic(() => import('@/components/hanko-components/HankoAuth'), { ssr: false })

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HankoAuth />
    </div>
  );
}
