import { NextResponse } from 'next/server';
import { getcatB } from '@/db/data'; // Імпортуємо функцію для отримання даних

// Функція для отримання випадкового цілого числа
function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function GET() {
  try {
    const { all_data_question } = await getcatB(); // Отримання даних асинхронно
    const data_list = [];

    for (let i = 0; i < 20; i++) {
      // Виправлення індексації для уникнення виходу за межі масиву
      const randomIndex = getRandomInt(0, all_data_question.all.length - 1);
      data_list.push(all_data_question.all[randomIndex]);
    }

    return NextResponse.json(data_list);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
