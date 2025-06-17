import { Prisma } from '@prisma/client';

export const usersData: Prisma.UserModelCreateInput[] = [
  {
    name: 'Марк Твен',
    email: 'test@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKKje8DZj_azjl_bpvabzbgT6CgiWrVm8KPA&s',
  },
  {
    name: 'Джон Траволта',
    email: 'test2@mail.test',
    password: '123qq2',
    avatar:
      'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRl1xi4f8nvmt4N8kQo81i-y6V6-UJMb1CTFxp_Fa9Jf2Ys9fKVDgo1fmxU5s2vObOxSgzgueBt5jpTJVyKpbffB-7hOIUUb50hwX4WKfaryw',
  },
  {
    name: 'Иероним Босх',
    email: 'test3@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIKcYfA8gPPCZ7K534fv9yZdvr1otjwJ8Pzg&s',
  },
  {
    name: 'Франца фон Штука',
    email: 'test4@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3dok0W2hPu9hTaGZOX989jHNjHd2i7EdluQ&s',
  },
  {
    name: 'Стивен Хокинг',
    email: 'test34@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSG0amXWUQ1lShw3qIDIRK3sRACohUTuiL5w&s',
  },
  {
    name: 'Гуф',
    email: 'test2134@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGQXEx3auRz_1g3pQS2VRyfUUYozjEir6MA&s',
  },
  {
    name: 'Мариия Склодоовская-Кюрии',
    email: 'test342432423@mail.test',
    password: '123qq',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0jDN7Mjht7UoCfC580HLrIm4taLYwLa9Rag&s',
  },
];
