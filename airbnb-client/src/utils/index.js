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
