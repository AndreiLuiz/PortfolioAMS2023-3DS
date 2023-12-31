import prisma from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const usuarios = await prisma.usuario.findMany()
  return NextResponse.json(usuarios)
}
