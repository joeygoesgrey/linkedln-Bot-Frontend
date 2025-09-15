import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Log the data (in a real app, you'd save to database)
    console.log('Form submission:', { name, email, timestamp: new Date() });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { success: false, message: 'Error processing form' },
      { status: 500 }
    );
  }
}