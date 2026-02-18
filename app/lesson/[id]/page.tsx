import LessonModal from '@/components/LessonModal/LessonModal';
import css from './Page.module.css';
import { getTeacherById } from '@/services/teachers';
interface PageProps {
  params: Promise<{ id: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const teacher = await getTeacherById(id);
  return (
    <div className={css['page']}>
      <LessonModal teacher={teacher} />
    </div>
  );
};

export default Page;
