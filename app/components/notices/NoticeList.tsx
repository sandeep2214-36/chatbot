'use client';
import { useEffect, useState } from 'react';

type Notice = {
  id: string;
  title: string;
  content: string;
  category: string;
  publicationDate: string;
  sourceUrl?: string;
};

export default function NoticeList() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/notices')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setNotices(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-6 text-gray-500">Loading notices...</div>;

  return (
    <div className="space-y-4 max-w-4xl mx-auto p-4">
      <h3 className="text-2xl font-bold text-blue-950 mb-6">Latest College Notices</h3>
      {notices.length === 0 ? (
        <p className="text-gray-600">No recent notices available.</p>
      ) : (
        notices.map(notice => (
          <div key={notice.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                {notice.category}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(notice.publicationDate).toLocaleDateString()}
              </span>
            </div>
            <h4 className="text-lg font-bold text-blue-900 mb-1">{notice.title}</h4>
            <p className="text-sm text-gray-700 mb-3">{notice.content}</p>
            {notice.sourceUrl && (
              <a href={notice.sourceUrl} target="_blank" rel="noreferrer" className="text-xs font-medium text-blue-600 hover:underline">
                View Official Source &rarr;
              </a>
            )}
          </div>
        ))
      )}
    </div>
  );
}
