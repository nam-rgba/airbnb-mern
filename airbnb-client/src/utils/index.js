import { v4 as uuidv4 } from 'uuid';

const generateSampleData = () => {
  const hosters = [];

  for (let i = 0; i < 3; i++) {
    const hoster = {
      id: uuidv4(),
      name: `Hoster ${i + 1}`,
      star: Math.random() * (5 - 1) + 1
    };

    hosters.push(hoster);
  }

  console.log(hosters);

  return hosters;
};

export const sampleData = generateSampleData();

const imageNames = [
  '001-united-kingdom',
  '002-flexible',
  '003-united-states',
  '004-germany',
  '005-france',
  '006-china',
  '007-india',
  '008-brazil',
  '009-spain',
  '010-italy',
  '011-australia',
  '012-vietnam',
  '013-portugal',
  '014-south-korea',
  '015-thailand',
  '016-philippines',
  '017-poland'
];

const generateCountryList = () => {
  const countries = [];

  for (let i = 0; i < 17; i++) {
    const country = {
      id: uuidv4(),
      name: imageNames[i],
      nameDisplay: imageNames[i]
        .slice(4, imageNames[i].length)
        .replace(/-/g, ' ')
    };

    countries.push(country);
  }

  return countries;
};

export const countries = generateCountryList();

export const places = [
  {
    id: '1',
    place: 'Hamsedel',
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
    type: 'camping',
    hoster: sampleData[0].name,
    petAble: true,
    maxGuest: 5,
    country: countries[0].nameDisplay
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
    hoster: sampleData[1].name,
    petAble: false,
    maxGuest: 3,
    country: countries[0].nameDisplay
  },
  {
    id: '3',
    place: 'Korora, Autralia',
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
    hoster: sampleData[2].name,
    petAble: true,
    maxGuest: 2,
    country: countries[1].nameDisplay
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
    hoster: sampleData[0].name,
    petAble: true,
    maxGuest: 4,
    country: countries[2].nameDisplay
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
    hoster: sampleData[1].name,
    petAble: false,
    maxGuest: 3,
    country: countries[2].nameDisplay
  },
  {
    id: '6',
    describe: 'Vintage Airstream Suite on Top of a Hill',
    place: 'Camper/RV in Calaca, Philippines',
    distance: '2792 kilometers',
    timeAvailoble: 'March 4-9',
    price: 225,
    image: [
      'https://a0.muscache.com/im/pictures/7fde1672-2160-4593-90cd-00bd75da732a.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/04b555bd-2c93-4caf-95b1-749fdcace5a6.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/e5bb2717-c75a-46f0-a072-42db557efaf8.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/7224d487-cd77-47a5-a74f-a9e274386125.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/3e634365-5154-4f84-89de-1e089fdd0326.jpg?im_w=1200'
    ],
    review: '4.9',
    type: 'camping',
    hoster: sampleData[1].name,
    petAble: false,
    maxGuest: 2,
    country: 'Philippines'
  },
  {
    id: '7',
    describe: '“The Orchard” Beautiful location, amazing views',
    place: 'Farm stay in Maidenwells, United Kingdom',
    distance: '2792 kilometers',
    timeAvailoble: 'March 4-9',
    price: 190,
    image: [
      'https://a0.muscache.com/im/pictures/19414d6a-8471-4088-8ea3-ba034acc87ca.jpg?im_w=960',
      'https://a0.muscache.com/im/pictures/da6cd19b-028e-41b4-b1ef-7ed907f528a0.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/76c1d2a4-4513-479b-88af-853c8b3dcdd5.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/a68a17e0-8cb8-4e6a-81a5-70421541eaca.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/875fb558-8b6b-4fa5-9a37-b770e032f9d4.jpg?im_w=720'
    ],
    review: '4.96',
    type: 'park',
    hoster: sampleData[1].name,
    petAble: false,
    maxGuest: 4,
    country: 'united kingdom'
  },
  {
    id: '8',
    describe: 'Overnight stay in the Stelzenhütte an der Donau',
    place: 'Treehouse in Donauwörth, Germany',
    distance: '2792 kilometers',
    timeAvailoble: 'March 4-9',
    price: 127,
    image: [
      'https://a0.muscache.com/im/pictures/f365bfc1-5a98-45b1-beb8-ac4a0c9b4940.jpg?im_w=960',
      'https://a0.muscache.com/im/pictures/469e6f7e-9449-43a6-a8f1-5cb0d60affed.jpg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-49739918/original/5fc77b87-0ddb-438b-a6bc-82719e96b831.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-49739918/original/e2a8a240-8896-48f2-ae4a-eee9076d30f8.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/28836285-7639-493e-beda-9e9814ff657c.jpg?im_w=720'
    ],
    review: '4.7',
    type: 'tree house',
    hoster: sampleData[2].name,
    petAble: true,
    maxGuest: 4,
    country: 'germany'
  }
];
