import { prisma } from '../../../utils/prismaConnect'
import { NextRequest, NextResponse } from 'next/server'

// FETCH ALL PRODUCTS

export const GET = async (req) => {
  const { searchParams } = new URL(req.url)
  const cat = searchParams.get('cat')

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }),
      },
    })
    return new NextResponse(JSON.stringify(products), { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'Something Went Wrong' }),
      { status: 500 }
    )
  }
}

export const POST = () => {
  return new NextResponse('Hello', { status: 200 })
}
