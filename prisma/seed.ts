import { Prisma, PrismaClient } from "@prisma/client";
import { categorysData, categorysOnPostRefs, postsData, tagsData, tagsOnPostRefs } from "./data";

const prisma = new PrismaClient();

async function main() {
    console.log(`Start seeding ...`);
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
        const item = {...u};
        const seo = await prisma.seoModel.create({
            data: item.seo as Prisma.SeoModelCreateInput
        })    
		const post = await prisma.postModel.create({
			data: {
                ...u,
                seo: {
                    connect: seo
                },
            },
		});

        if(tagsOnPostRefs[post.slug] !== undefined ){
            for (const slugTag of tagsOnPostRefs[post.slug]) {
                const itemTag = tags.find( item => item.slug === slugTag);
                if(itemTag){
                    await prisma.tagOnPost.create({
                        data: {
                            tagId: itemTag.id,
                            postId: post.id,
                        },
                    });
                } else{
                    console.log(`WARNING: tag undenfined in the post ${post.id}`);
                }
            }  
        }

        if(categorysOnPostRefs[post.slug] !== undefined ){
            for (const slugcategory of categorysOnPostRefs[post.slug]) {
                const itemCategory = categorys.find( item => item.slug === slugcategory);
                if(itemCategory){
                    await prisma.categoryOnPost.create({
                        data: {
                            categoryId: itemCategory.id,
                            postId: post.id,
                        },
                    });
                } else{
                    console.log(`WARNING: category undenfined in the post ${post.id}`);
                }
            }  
        }

		console.log(`Created tag with id -> name: ${post.id}->${post.title}`);
	}
    // END create data posts
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