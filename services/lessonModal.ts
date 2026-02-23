import axios from 'axios';

interface LessonData {
  FullName: string;
  Email: string;
  PhoneNumber: string;
}
export async function sendLessonEmail(lessonData: LessonData) {
  const result = await axios.post(
    'https://formspree.io/f/xpqjojyg',
    lessonData
  );
  return result.data;
}
