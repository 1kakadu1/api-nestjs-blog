import { Prisma, PrismaClient } from '@prisma/client';
import {
  bannerFiltersData,
  bannersData,
  categorysData,
  categorysOnPostRefs,
  postsData,
  tagsData,
  tagsOnPostRefs,
  usersData,
} from './data';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  // START create data users
  const users = await prisma.userModel.createManyAndReturn({
    data: usersData,
  });
  console.log(`!!! Created users !!!`);
  // END create data banners
  // START create data posts
  /***** CATEGORYS *****/
  const categorys = await prisma.categoryModel.createManyAndReturn({
    data: categorysData,
  });
  console.log(`!!! Created categorys !!!`);
  /***** TAGS *****/

  const tags = await prisma.tagPostModel.createManyAndReturn({
    data: tagsData,
  });
  console.log(`!!! Created tags !!!`);

  /***** POSTS *****/

  for (const u of postsData) {
    const item = { ...u };
    const seo = await prisma.seoModel.create({
      data: item.seo as Prisma.SeoModelCreateInput,
    });
    const post = await prisma.postModel.create({
      data: {
        ...u,
        author: {
          connect: users.find((item) => item.email === u.author.create.email),
          create: undefined,
        },
        seo: {
          connect: seo,
        },
      },
    });

    if (tagsOnPostRefs[post.slug] !== undefined) {
      for (const slugTag of tagsOnPostRefs[post.slug]) {
        const itemTag = tags.find((item) => item.slug === slugTag);
        if (itemTag) {
          await prisma.tagOnPost.create({
            data: {
              tagId: itemTag.id,
              postId: post.id,
            },
          });
        } else {
          console.log(`WARNING: tag undenfined in the post ${post.id}`);
        }
      }
    }

    if (categorysOnPostRefs[post.slug] !== undefined) {
      for (const slugcategory of categorysOnPostRefs[post.slug]) {
        const itemCategory = categorys.find(
          (item) => item.slug === slugcategory,
        );
        if (itemCategory) {
          await prisma.categoryOnPost.create({
            data: {
              categoryId: itemCategory.id,
              postId: post.id,
            },
          });
        } else {
          console.log(`WARNING: category undenfined in the post ${post.id}`);
        }
      }
    }

    console.log(`Created tag with id -> name: ${post.id}->${post.title}`);
  }
  // END create data posts
  // START create data banners
  const bannerFilter = await prisma.bannerFiltersModel.createManyAndReturn({
    data: bannerFiltersData,
  });
  console.log(bannerFilter);
  const banners = await prisma.bannerModel.createManyAndReturn({
    data: bannersData.map((item) => ({
      ...item,
      post: undefined,
      bannerFilters: undefined,
    })),
  });

  // TODO: убрать banners[index].id
  for (const [index, value] of bannersData.entries()) {
    const idsBannerFilters = bannerFilter.filter((fl) => ( value?.bannerFilters?.create as Prisma.BannerFiltersModelCreateInput[])?.find((itemValue)=> itemValue.value === fl.value) !== undefined);
    if (value.post) {
      const post = await prisma.postModel.findFirst({
        where: { slug: value.post.create.slug },
      });
      await prisma.bannerModel.update({
        where: { id: banners[index].id },
        data: {
          post: {
            connect: {
              id: post.id,
            },
          },
          bannerFilters: {
            connect: idsBannerFilters
          },
        },
        include: {
          post: true,
        },
      });
      console.log(`!!! Set Ref banner ${banners[index].id}  -> post ${post.id} !!!`);
    } else {
      
     
      await prisma.bannerModel.update({
        where: { id: banners[index].id },
        data: {
          bannerFilters: {
            connect: idsBannerFilters,
          },
        },
      });
    }
  }
  console.log(`!!! Created banners !!!`);
  // END create data banners
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
