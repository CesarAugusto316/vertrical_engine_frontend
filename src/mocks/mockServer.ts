import { setupServer } from 'msw/node';
import { routeHandlers } from './medicineHandlers';

// used for testing 
export const mockServer = setupServer(...routeHandlers);
