import Calculator from '@/components/Calculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Investment Tool</h1>
          <p className="mt-2 text-gray-600">Calculate probabilities securely and efficiently.</p>
        </div>
        <Calculator />
      </div>
    </main>
  );
}
