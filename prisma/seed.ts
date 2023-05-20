import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma is great' },
    update: {},
    create: {
      title: 'Prisma is great',
      body: 'This is good news for smal businesses and all',
      description: 'Describe why prisma is great',
      published: false,
    },
  });

  const post2 = await prisma.article.upsert({
    where: { title: 'Cool ding Prisma' },
    update: {},
    create: {
      title: 'Cool ding Prisma',
      body: 'Checking how cool this prisma is',
      description: 'Just checking in with a description',
      published: true,
    },
  });

  console.log(post1, post2);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
