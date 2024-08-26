import path from 'path';
import { promises as fs } from 'fs';

interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}

// Типізація даних, які будуть читатися з JSON файлу
interface Data {
  one: Question[];
  two: Question[];
  three: Question[];
  four: Question[];
  five: Question[];
  six: Question[];
  seven: Question[];
  eight_one: Question[];
  eight_two: Question[];
  nine: Question[];
  ten: Question[];
  eleven: Question[];
  twelve: Question[];
  threeteen: Question[];
  fourteen: Question[];
  fiveteen: Question[];
  sixteen_one: Question[];
  sixteen_two: Question[];
  seventeen: Question[];
  eighteen: Question[];
  nineteen: Question[];
  twenty: Question[];
  twenty_one: Question[];
  twenty_two: Question[];
  twenty_three: Question[];
  twenty_four: Question[];
  twenty_five: Question[];
  twenty_six: Question[];
  twenty_seven: Question[];
  twenty_eight: Question[];
  twenty_nine: Question[];
  thirty: Question[];
  thirty_one: Question[];
  thirty_two: Question[];
  thirty_three: Question[];
  thirty_four: Question[];
  thirty_five: Question[];
  thirty_six: Question[];
  thirty_seven: Question[];
  thirty_eight: Question[];
  thirty_nine: Question[];
  fourty: Question[];
  fourty_one: Question[];
  fourty_two: Question[];
  fourty_three: Question[];
  fourty_four: Question[];
  fourty_five: Question[];
  fourty_six: Question[];
  fourty_seven: Question[];
  fourty_eight: Question[];
  fourty_nine: Question[];
  fivety: Question[];
  fivety_one: Question[];
  fivety_two: Question[];
  fivety_three: Question[];
  fivety_four: Question[];
  fivety_five: Question[];
  fivety_six: Question[];
  fivety_seven: Question[];
  fivety_eight: Question[];
  fivety_nine: Question[];
  sixty: Question[];
  sixty_one: Question[];
  sixty_two: Question[];
  sixty_three: Question[];
}

const jsonDirectory = path.join(process.cwd(), 'db');

// Функція для читання JSON файлу
export async function getData(): Promise<Data> {
  const filePath = path.join(jsonDirectory, 'data.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Data = JSON.parse(fileContents);
  
  return data;
}

// Функція для отримання всіх даних
export async function getAllData() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine, ...data.fourty, ...data.fourty_one, ...data.fourty_two, ...data.fourty_three,
        ...data.fourty_four, ...data.fourty_five, ...data.fourty_six, ...data.fourty_seven, ...data.fourty_eight,
        ...data.fourty_nine, ...data.fivety, ...data.fivety_one, ...data.fivety_two, ...data.fivety_three,
        ...data.fivety_four, ...data.fivety_five, ...data.fivety_six, ...data.fivety_seven, ...data.fivety_eight,
        ...data.fivety_nine, ...data.sixty, ...data.sixty_one, ...data.sixty_two, ...data.sixty_three,
      ],
    },
  };
}

export async function getcatA() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine, ...data.fourty, ...data.fourty_one, ...data.fourty_two, ...data.fourty_three,
      ]
      },
  };
  
}
export async function getcatB() {
  const data = await getData();

  return {
    all_data_question: {
      all: [
        ...data.one, ...data.two, ...data.three, ...data.four, ...data.five,
        ...data.six, ...data.seven, ...data.eight_one, ...data.eight_two, ...data.nine,
        ...data.ten, ...data.eleven, ...data.twelve, ...data.threeteen, ...data.fourteen,
        ...data.fiveteen, ...data.sixteen_one, ...data.sixteen_two, ...data.seventeen, ...data.eighteen,
        ...data.nineteen, ...data.twenty, ...data.twenty_one, ...data.twenty_two, ...data.twenty_three,
        ...data.twenty_four, ...data.twenty_five, ...data.twenty_six, ...data.twenty_seven, ...data.twenty_eight,
        ...data.twenty_nine, ...data.thirty, ...data.thirty_one, ...data.thirty_two, ...data.thirty_three,
        ...data.thirty_four, ...data.thirty_five, ...data.thirty_six, ...data.thirty_seven, ...data.thirty_eight,
        ...data.thirty_nine,
        ...data.fourty_four, ...data.fourty_five, ...data.fourty_six, ...data.fourty_seven,
      ],
    },
  };
}
