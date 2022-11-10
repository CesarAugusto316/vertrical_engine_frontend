import { rest } from 'msw';
import { faker } from '@faker-js/faker';
import { Medicine } from '../services/searchEngine.service';


// intercepts every http request and responds with our mock data.
export const routeHandlers = [
  rest.get(import.meta.env.API_URL, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Medicine[]>([...Array(10).keys()].map(i => {
        return ({
          id: i + 1,
          title: faker.commerce.productName(),
          description: faker.commerce.productDescription(),
          photo: faker.image.business(),
          shortDescription: faker.lorem.sentence(3),
        });
      }))
    );
  })
];
