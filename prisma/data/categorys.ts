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
        name: 'NextJS/React',
        slug: "react" 
    },
    {
        name: 'NuxtJS/Vue',
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