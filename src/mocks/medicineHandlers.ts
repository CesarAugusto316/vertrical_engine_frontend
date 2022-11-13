import { rest } from 'msw';
import { faker } from '@faker-js/faker';
import { Medicine } from '../services/search.service';


// intercepts http requests and responds with our mock data.
export const routeHandlers = [
  rest.get(import.meta.env.VITE_API_URL + '/medicines', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<{ medicines: Medicine[] }>(
        {
          medicines: [...Array(80).keys()].map(i => {
            return ({
              id: i + 1,
              title: faker.commerce.productName(),
              description: faker.commerce.productDescription(),
              photo: {
                url: 'https://dummyimage.com/640x480.png/999999/eeeeee',
                id: faker.database.mongodbObjectId()
              },
              shortDescription: faker.lorem.sentence(3),
            });
          })
        })
    );
  }),
  rest.get(import.meta.env.VITE_API_URL + '/medicines/search', (req, res, ctx) => {
    const medicineQuery = req.url.searchParams.get('title');
    console.log(medicineQuery);

    return res(
      ctx.status(200),
      ctx.json({
        medicines: [...Array(6).keys()].map(i => {
          return ({
            id: i + 1,
            title: faker.commerce.productName(),
            description: faker.commerce.productDescription(),
            photo: {
              url: 'https://dummyimage.com/640x480.png/999999/eeeeee',
              id: faker.database.mongodbObjectId()
            },
            shortDescription: faker.lorem.sentence(3),
          });
        })
      })
    );
  }),
  rest.get(import.meta.env.VITE_API_URL + '/medicines/:id', (req, res, ctx) => {
    const { id } = req.params;
    console.log(id);

    return res(
      ctx.status(200),
      ctx.json({
        medicine: {
          id: id,
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          photo: {
            url: 'https://dummyimage.com/640x480.png/999999/eeeeee',
            id: faker.database.mongodbObjectId()
          },
          shortDescription: faker.lorem.sentence(3),
        }
      })
    );
  })
];
