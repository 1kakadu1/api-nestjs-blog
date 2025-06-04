import { Prisma } from "@prisma/client";

export const categorysData: Prisma.CategoryModelCreateInput[] = [
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
];