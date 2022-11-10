import { setupServer } from 'msw/node';
import { routeHandlers } from './medicineHandlers';

// use for testing purposes
export const mockServer = setupServer(...routeHandlers);
