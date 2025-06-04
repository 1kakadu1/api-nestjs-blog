import { Prisma, PrismaClient } from "@prisma/client";
import { tagsData } from "./tags";
import { categorysData } from "./categorys";

const OTHER_TAG = tagsData[0].slug;
const OTHER_CATEGORY = categorysData[0].slug;

export const postsSeoData: Prisma.SeoModelCreateInput[] = [
 {
     keywords: "nestjs, nodejs, web",
     title: "Hello, nest!",
     description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
     robots: "all"
 }   
];

export const tagsOnPostRefs = {
    'hellow-nestjs': [OTHER_TAG, tagsData[4].slug]
} 

export const categorysOnPostRefs = {
    'hellow-nestjs': [OTHER_CATEGORY, categorysData[1].slug]
} 

export const postsData: Prisma.PostModelCreateInput[] = [
    {
        title: "Hello, nest!",
        description: `
            <h1>
                Hello, nest!
            </h1>
            <p>
                A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
            </p>

            <h2>
                Everything you need..
            </h2>
            <p>
                A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
            </p>
            <ul>
                <li>
                    <img src="/media/images/posts/1.png" alt="">
                    <h5>Modularity</h5>
                    <span>Build robust, powerful, and scalable server-side applications and stop reinventing the </span>
                </li>
                <li>
                    <img src="/media/images/posts/1.png" alt="">
                    <h5>Modularity</h5>
                    <span>Build robust, powerful, and scalable server-side applications and stop reinventing the </span>
                </li>
                <li>
                    <img src="/media/images/posts/1.png" alt="">
                    <h5>Modularity</h5>
                    <span>Build robust, powerful, and scalable server-side applications and stop reinventing the </span>
                </li>
            </ul>
        `,
        smallDescription: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
        slug: "hellow-nestjs",
        seo: postsSeoData[0] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
        images:{
            create: [

                {
                    alt: "",
                    url: "/media/images/1.png"
                },
                {
                    alt: "",
                    url: "/media/images/2.png"
                },
                {
                    alt: "",
                    url: "/media/images/3.png"
                },
            ]
        }
    },

];