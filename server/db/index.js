const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = { client: prisma };
