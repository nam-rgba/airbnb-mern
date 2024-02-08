import { v4 as uuidv4 } from 'uuid';

const generateSampleData = () => {
  const hosters = [];

  for (let i = 0; i < 3; i++) {
    const hoster = {
      id: uuidv4(),
      name: `Hoster${i + 1}`,
      star: Math.random() * (5 - 1) + 1
    };

    hosters.push(hoster);
  }

  return hosters;
};

export const sampleData = generateSampleData();

export const places = [
  {
    id: '1',
    place: 'Hamsedel Norway',
    distance: '8000 kilometers',
    timeAvailoble: 'Sep 4-9',
    price: '175',
    image: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-914212782108935893/original/6889f224-55b9-4515-9f27-fe29d9a6c343.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-914212782108935893/original/0869bde5-b15d-4b5b-81f1-0fd5b54cd56a.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-914212782108935893/original/9801f819-6195-4b68-880c-d91f78eb861a.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-914212782108935893/original/2945f395-552f-4e62-9bb8-ebae020c9b8f.jpeg?im_w=1200'
    ],
    review: '5.0',
    type: 'forest',
    hoster: sampleData[0]
  },
  {
    id: '2',
    place: 'Saugatuck, Michigan, US',
    distance: '9000 kilometers',
    timeAvailoble: 'Sep 10-17',
    price: '2,715',
    image: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-701497672425802721/original/49b8d98e-ea9c-4e1d-b85b-dd7b7bdf3cab.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/miso/Hosting-701497672425802721/original/55119469-c11b-4425-8ae1-c643c68d4001.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-701497672425802721/original/f9d762a2-5d47-4af7-8b37-376ca936b204.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-701497672425802721/original/cf57d590-01a3-47eb-8254-117500fd2637.jpeg?im_w=1200'
    ],
    review: '4.9',
    type: 'beach view',
    hoster: sampleData[1]
  },
  {
    id: '3',
    place: 'Korora Autralia',
    distance: '3,200 kilometers',
    timeAvailoble: 'Sep 3-8',
    price: '156',
    image: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-936818571459983141/original/28d5b479-b374-4710-a933-5f67f185c971.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/miso/Hosting-936818571459983141/original/e07936c7-d64a-429a-a1a6-24665c4e4580.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-936818571459983141/original/8c585184-acf5-4ef1-89b3-a990159681e8.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-936818571459983141/original/2368d0ea-31f1-4f88-b259-fe547f32b43f.jpeg?im_w=1200'
    ],
    review: '5.0',
    type: 'cabin',
    hoster: sampleData[2]
  },
  {
    id: '4',
    place: 'Weideren, Netherland',
    distance: '7218 kilometers',
    timeAvailoble: 'Sep 4-9',
    price: '164',
    image: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-949247329190714515/original/c439e8e0-eba3-4424-8ef8-f08445395606.jpeg?im_w=960',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-949247329190714515/original/fdb35d75-f50d-491b-95e9-b22546d927b8.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-949247329190714515/original/7ccfabb9-4c81-45dc-8db4-3b568b9a4e7f.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-949247329190714515/original/c188a9a1-10e4-433d-9a00-c1fa0626fa9b.jpeg?im_w=1200'
    ],
    review: '5.0',
    type: 'cabin',
    hoster: sampleData[0]
  },
  {
    id: '5',
    place: 'Jibhi, India',
    distance: '3800 kilometers',
    timeAvailoble: 'Jan 4-9',
    price: 96,
    image: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/365774f1-239d-4db5-9e81-68bd37587e28.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/484e7ed5-2e36-4f29-baa7-1c06c47f94c7.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-23780166/original/633a023a-ab4b-425e-9209-6bb982fc39b0.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/b77f4131-3438-441b-af75-947e3a2e11a6.jpg?im_w=1200',
      'https://a0.muscache.com/im/pictures/71e60322-e99b-490a-9f3e-fc71f1cd494c.jpg?im_w=1200'
    ],
    review: '4.0',
    type: 'trending',
    hoster: sampleData[1]
  }
];
