import { prisma } from '@/prisma';
import {auth} from '@/auth'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Отримання даних з POST запиту
    const data = await request.json();
    // Виконання якихось дій з даними
    console.log('Received data:', data);
    
    // Відповідь на запит
    return NextResponse.json({ message: 'Data received successfully', data });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ message: 'Error processing request' }, { status: 500 });
  }
}