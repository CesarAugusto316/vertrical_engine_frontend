import { setupWorker } from 'msw';
import { routeHandlers } from './medicineHandlers';

// This configures a Service Worker for development
export const browserWorker = setupWorker(...routeHandlers);
