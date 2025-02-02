import { PrismaClient } from '@prisma/client';

const globalForPrimsa = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrimsa.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrimsa.prisma = prisma;
}
