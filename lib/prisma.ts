import { PrismaClient } from "@/src/app/generated/prisma";

// Prevent multiple instances of Prisma Client in development
declare global {
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn', 'error'], // Enable logging in development
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;