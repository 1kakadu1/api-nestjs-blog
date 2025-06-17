import { Prisma } from "@prisma/client";

export const tagsData: Prisma.TagPostModelCreateInput[] = [
	{
		name: 'News',
        slug: "news"
	},
	{
		name: 'Flutter',
        slug: "flutter"
	},
	{
		name: 'ReactJS',
        slug: "react"
	},
    {
		name: 'NestJS',
        slug: "nestjs"
	},
	    {
        name: 'Other',
        slug: "other"
    },
    {
        name: 'Web',
        slug: "web"
    },
    {
        name: 'Mobile',
        slug: "mobile"
    },
    {
        name: 'Flutter',
        slug: "flutter"
    },
    {
        name: 'iOS',
        slug: "ios" 
    },
    {
        name: 'Android',
        slug: "android" 
    },
    {
        name: 'NextJS',
        slug: "next" 
    },
    {
        name: 'NuxtJS',
        slug: "nuxt" 
    },
	{
        name: 'Vue',
        slug: "Vue" 
    },
    {
        name: 'Frontend',
        slug: "frontend" 
    },
    {
        name: 'Backend',
        slug: "backend" 
    },
    {
        name: 'Development',
        slug: "development" 
    }
];