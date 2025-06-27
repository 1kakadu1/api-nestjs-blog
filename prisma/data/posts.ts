import { Prisma } from '@prisma/client';
import { tagsData } from './tags';
import { categorysData } from './categorys';
import { usersData } from './users';
import { commentsData } from './comments';

const MOCK_HTML = `
            <h1>
                Hello, nest!
            </h1>
            <p>
                A progressive Node.js framework for building efficient, reliable and scalable server-side applications.
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        `;

const OTHER_TAG = tagsData[0].slug;
const OTHER_CATEGORY = categorysData[0].slug;

export const postsSeoData: Prisma.SeoModelCreateInput[] = [
  {
    keywords: 'nestjs, nodejs, web',
    title: 'Hello, nest!',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 2',
    description: 'seo description 2',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 3',
    description: 'seo description 3',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 4',
    description: 'seo description 4',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 5',
    description: 'seo description 5',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 6',
    description: 'seo description 6',
    robots: 'all',
  },
  {
    keywords: 'keywords 1, keywords 2, keywords 3',
    title: 'Post title 7',
    description: 'seo description 7',
    robots: 'all',
  },
];

const MOCK_IMG = [
  {
    alt: '',
    url: '/media/images/1.png',
  },
  {
    alt: '',
    url: '/media/images/2.png',
  },
  {
    alt: '',
    url: '/media/images/3.png',
  },
  {
    alt: '',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJuhs3xtJ0V94n2PYF04yJ7JqFJ3Co7odWQ&s',
  },
  {
    alt: '',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPFxqRYsT_F9tT7jc1mA4ZMYcd7Cs0GEMGAQ&s',
  },
  {
    alt: '',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5E3PBFSyPnknuMiDRNqvP4Qj7AUZmOFuMUQ&s',
  },
  {
    alt: '',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj09ZpqA-TNAbYBJltnpNrVV9-YE2MD9w_w&s',
  },
];

export const tagsOnPostRefs = {
  'hellow-nestjs': [OTHER_TAG, tagsData[4].slug],
  'post-slug-1': [tagsData[0].slug],
  'post-slug-2': [tagsData[3].slug],
  'post-slug-3': [tagsData[2].slug, tagsData[13].slug],
  'post-slug-4': [tagsData[1].slug],
  'post-slug-5': [tagsData[7].slug, tagsData[13].slug, tagsData[8].slug],
  'post-slug-6': [tagsData[8].slug],
  'post-slug-7': [tagsData[14].slug],
  'post-slug-8': [tagsData[15].slug],
  'post-slug-9': [tagsData[10].slug],
  'post-slug-10': [tagsData[11].slug],
  'post-slug-11': [tagsData[12].slug],
  'post-slug-12': [tagsData[13].slug],
};

export const categorysOnPostRefs = {
  'hellow-nestjs': [OTHER_CATEGORY, categorysData[1].slug],
  'post-slug-1': [categorysData[2].slug],
  'post-slug-2': [categorysData[3].slug],
  'post-slug-3': [categorysData[4].slug],
  'post-slug-4': [categorysData[5].slug],
  'post-slug-5': [categorysData[6].slug],
  'post-slug-6': [categorysData[7].slug],
  'post-slug-7': [categorysData[8].slug],
  'post-slug-8': [categorysData[9].slug],
  'post-slug-9': [categorysData[10].slug],
  'post-slug-10': [categorysData[4].slug],
  'post-slug-11': [categorysData[1].slug],
  'post-slug-12': [categorysData[3].slug],
};

export const postsData: Prisma.PostModelCreateInput[] = [
  {
    title: 'Hello, nest!',
    description: MOCK_HTML,
    smallDescription:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    slug: 'hellow-nestjs',
    seo: postsSeoData[0] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[0],
    },
    images: {
      create: MOCK_IMG,
    },
  },

  {
    title: 'Post title 2',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-1',
    seo: postsSeoData[1] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[1],
    },
    images: {
      create: [MOCK_IMG[5]],
    },
  },

  {
    title: 'Post title 3',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-2',
    seo: postsSeoData[2] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[2],
    },
    images: {
      create: [MOCK_IMG[6]],
    },
  },

  {
    title: 'Post title 4',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-3',
    seo: postsSeoData[3] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[3],
    },
    images: {
      create: [MOCK_IMG[4]],
    },
  },

  {
    title: 'Post title 5',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-4',
    seo: postsSeoData[4] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[4],
    },
    images: {
      create: [MOCK_IMG[5]],
    },
  },

  {
    title: 'Post title 6',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-5',
    seo: postsSeoData[5] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[5],
    },
    images: {
      create: [MOCK_IMG[6]],
    },
  },

  {
    title: 'Post title 7',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-6',
    seo: postsSeoData[6] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[6],
    },
    images: {
      create: [MOCK_IMG[3]],
    },
  },

  {
    title: 'Post title 8',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-7',
    seo: postsSeoData[3] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[4],
    },
    images: {
      create: [MOCK_IMG[3]],
    },
  },

  {
    title: 'Post title 9',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-8',
    seo: postsSeoData[6] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[5],
    },
    images: {
      create: [MOCK_IMG[4]],
    },
  },

  {
    title: 'Post title 10',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-9',
    seo: postsSeoData[2] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[6],
    },
    images: {
      create: [MOCK_IMG[6]],
    },
  },

  {
    title: 'Post title 11',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-10',
    seo: postsSeoData[4] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[4],
    },
    images: {
      create: [MOCK_IMG[4]],
    },
  },

  {
    title: 'Post title 12',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-11',
    seo: postsSeoData[5] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[5],
    },
    images: {
      create: [MOCK_IMG[5]],
    },
  },

  {
    title: 'Post title 13',
    description: MOCK_HTML,
    smallDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    slug: 'post-slug-12',
    seo: postsSeoData[6] as Prisma.SeoModelCreateNestedOneWithoutPostInput,
    author: {
      create: usersData[6],
    },
    images: {
      create: [MOCK_IMG[6]],
    },
  },
];
