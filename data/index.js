import { format } from 'date-fns';
import faker from 'faker';

faker.setLocale('ru');
faker.seed(10);

export const data = [
  {
    id: 1,
    label: 'Nodejs',
    img: 'nodejs.png',
    categories: [
      {
        id: 1,
        label: '',
        channels: [
          {
            id: 1,
            label: 'welcome',
            description: 'Welcome',
            icon: 'Book',
            messages: getMessages(),
          },
          {
            id: 2,
            label: 'announcements',
            icon: 'SpeakerPhone',
            messages: getMessages(),
          },
        ],
      },
      {
        id: 2,
        label: 'Info',
        channels: [
          {
            id: 3,
            label: 'general',
            description: 'General discussion',
            unread: true,
            messages: getMessages(),
          },

          {
            id: 4,
            label: 'help',
            description: '',
            unread: true,
            messages: getMessages(),
          },
          {
            id: 6,
            label: 'internals',
            description: 'Development',
            messages: getMessages(),
          },
        ],
      },

      {
        id: 3,
        label: 'Off topic',
        channels: [
          {
            id: 11,
            label: 'design',
            description: 'General discussion of web design.',
            messages: getMessages(),
          },
          {
            id: 12,
            label: 'development',
            description: 'General discussion of web development.',
            messages: getMessages(),
          },
          {
            id: 13,
            label: 'random',
            description: 'General discussion of everything else!',
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: 5,
        label: 'Community',
        channels: [],
      },
    ],
  },
  {
    id: 2,
    label: 'React.js',
    img: 'react.png',
    categories: [
      {
        id: 6,
        label: '',
        channels: [
          {
            id: 17,
            label: 'welcome',
            icon: 'Book',
            messages: getMessages(),
          },
          {
            id: 18,
            label: 'announcements',
            icon: 'SpeakerPhone',
            description:
              'Announcements related to this Discord server and Next.js',
            messages: getMessages(),
          },
          {
            id: 19,
            label: 'introductions',
            unread: true,
            description:
              'Welcome to the server! Feel free to introduce yourself',
            messages: getMessages(),
          },
        ],
      },
    ],
  },
];

function getMessages() {
  return [...Array(faker.datatype.number({ min: 7, max: 25 }))]
    .map(() => {
      let user = faker.internet.userName();
      let avatarUrl = `/avatars/${faker.datatype.number({
        min: 0,
        max: 25,
      })}.jpg`;

      return [...Array(faker.datatype.number({ min: 1, max: 4 }))].map(() => ({
        id: faker.datatype.number(),
        user,
        avatarUrl,
        date: format(new Date(faker.date.past()), 'MM/dd/yyyy'),
        text: faker.lorem.sentences(3),
      }));
    })
    .flat();
}
