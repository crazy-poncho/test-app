import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, beforeAll } from 'vitest';

export type Mock = {
  body?: Record<string, unknown>;
  method: 'get' | 'patch' | 'post' | 'put' | 'delete';
  params?: Record<string, unknown>;
  path: string | RegExp;
  response?: any;
  responseCode?: number;
};

export const mockApi = (mocks: Mock[]) => {
  const server = setupServer(
    ...mocks.map(mock => {
      return http[mock.method](mock.path, async ({ request }) => {
        return HttpResponse.json(mock?.response, {
          status: mock?.responseCode,
        });
      });
    }),
  );

  beforeAll(() => {
    server.listen({
      onUnhandledRequest: 'error',
    });
  });

  afterAll(() => {
    server.close();
  });
};
