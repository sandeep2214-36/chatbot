import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

export async function GET() {
  try {
    const [totalDocuments, totalNotices, totalCourses, totalDepartments] = await Promise.all([
      prisma.knowledgeDocument.count(),
      prisma.notice.count(),
      prisma.course.count(),
      prisma.department.count(),
    ]);

    return NextResponse.json({
      totalDocuments,
      totalNotices,
      totalCourses,
      totalDepartments,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to load stats' }, { status: 500 });
  }
}
