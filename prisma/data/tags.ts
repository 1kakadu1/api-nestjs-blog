import { Prisma } from "@prisma/client";

export const tagsData: Prisma.TagPostModelCreateInput[] = [
	{
        name: 'Other',
        slug: "other"
    },
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
        slug: "reactjs"
	},
    {
		name: 'NestJS',
        slug: "nestjs"
	},
];