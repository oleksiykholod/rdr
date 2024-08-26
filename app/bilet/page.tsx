'use client';  // Застосування "use client" для використання клієнтських функцій, таких як useEffect

import Image from 'next/image';
import { ReactElement, useEffect, useState } from 'react';

// Опис структури питання та відповіді за допомогою інтерфейсу
interface Question {
  q: string;
  a: string[];
  t: number;
  p?: string; // Зображення може бути відсутнім, тому робимо це поле необов'язковим
}

export default function Questions() {
  // Вказуємо тип для стейту
  const [data, setData] = useState<Question[] | null>(null);
  const [click, setClick] = useState(0)
  const [truea, setTrue] = useState(0)
  const [falsea, setFalse] = useState(0)

  function clickclick(){
    setClick(click+1)
  }
  function addTrueA(){
    setTrue(truea+1)
  }
  function addFalseA(){
    setFalse(falsea+1)
  }

  // Використання useEffect для отримання даних з API
  useEffect(() => {
    fetch('/api/get_bilet')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  // Якщо дані ще не завантажені, відображається "Loading..."
  if (!data) {
    return <div>Loading...</div>;
  }
  if(click == 20){
    return <div>Правильних {truea} неправильних {falsea}</div>
  }

  return (
    <>
    <h1>{click}</h1>
    <h2>правильні:{truea}</h2>
    <h2>неправильні{falsea}</h2>
    <div className='flex-auto bg-centerflex items-center justify-center h-screen'>
      {data.map((question: Question, index: number): ReactElement => (
        <div className='flex-auto bg-centerflex items-center justify-center border-l-blue-600'  key={index} style={{ marginBottom: '20px' }} >
          <h3>{question.q}</h3>
          <ul>
            {question.a.map((answer: string, i: number): ReactElement => (
              <button
                key={i}
                className={`a${index}`} 
                id={`${index}-${i}`} // Унікальний клас для кожної кнопки
                onClick={() => {
                  // Всі кнопки з однаковим класом (відповіді на питання)
                  const buttons = document.querySelectorAll(`.a${index}`) as NodeListOf<HTMLButtonElement>;
                  clickclick()
                  if(click == 19){
                    alert('pizda')
                  }
                  // Відключаємо всі кнопки після вибору
                  buttons.forEach(button => {
                    button.disabled = true;
                  });

                  const clickedButton = document.getElementById(
                    `${index}-${i}`
                  ) as HTMLButtonElement;

                  // Якщо відповідь правильна
                  if (i + 1 === question.t) {
                    clickedButton.style.backgroundColor = '#4caf50';
                    clickedButton.style.color = 'white';
                    addTrueA()

                  } else {
                    // Якщо відповідь неправильна
                    clickedButton.style.backgroundColor = '#f44336';
                    clickedButton.style.color = 'white';
                    addFalseA()

                    // Показуємо правильну відповідь
                    const correctButton = document.getElementById(
                      `${index}-${question.t - 1}`
                    ) as HTMLButtonElement;
                    correctButton.style.backgroundColor = '#4caf50';
                    correctButton.style.color = 'white';
                  }
                }}
              >
                {answer}
              </button>
            ))}
          </ul>

          {question.p ? (
            <div>
              {/* Використання Next.js Image для оптимізації зображень */}
              <Image
                src={question.p} // Шлях до зображення
                alt={`Photo for question ${index + 1}`}
                width={300}
                height={200}
              />
            </div>
          ) : null}
        </div>
      ))}
    </div>
    </>
  );
}
