import Header from '@/components/ui/Header';
import NoticeList from '@/components/notices/NoticeList';

export default function NoticesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8">
        <NoticeList />
      </main>
    </div>
  );
}
