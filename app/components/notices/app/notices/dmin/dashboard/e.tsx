'use client';
import { useEffect, useState } from 'react';

type Stats = {
  totalDocuments: number;
  totalNotices: number;
  totalCourses: number;
  totalDepartments: number;
};

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(() => {});
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-blue-950 mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Knowledge Documents</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats?.totalDocuments ?? '-'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Active Notices</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats?.totalNotices ?? '-'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Courses Offered</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats?.totalCourses ?? '-'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <p className="text-sm text-gray-500">Departments</p>
          <p className="text-3xl font-bold text-blue-900 mt-2">{stats?.totalDepartments ?? '-'}</p>
        </div>
      </div>
    </div>
  );
}
