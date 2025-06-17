import { Prisma } from "@prisma/client";
import { postsData } from "./posts";

export const bannerFiltersData: Prisma.BannerFiltersModelCreateInput[] = [
    {
          value:  "home",
          label:  "Home page",
    },
    {
          value:  "about",
          label:  "About page",
    },
]

export const bannersData: Prisma.BannerModelCreateInput[] = [
    {
        preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJxo2NFiYcR35GzCk5T3nxA7rGlSsXvIfJwg&s",
        post:{
            create: postsData[0]
        },
        bannerFilters:{
            create: [bannerFiltersData[0]]
        }
    },
    {
        preview: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s",
        title: "Title lorem Ipsum is simply dummy text of the printing and typesetting industry",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        bannerFilters:{
            create: [bannerFiltersData[1]]
        }
    }
];

