import { Server, Response } from 'miragejs';
import * as queryString from 'query-string';
import { factories } from './factories';

import { Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  const server = new Server({
    models: {
      product: Model,
    },
    environment,
    factories,
    seeds(server) {
      server.createList('product', 20);
    },
    routes() {
      // Servicios planificados
      this.get(`api/products`, (schema) => {
        const { models } = (schema as any).products.all();
        return new Response(200, {}, { data: models });
      });
      this.post(`api/products`, (schema, request) => {
        const parsedValue = queryString.parse(request.requestBody);
        const createdValue = (schema as any).products.create(parsedValue);
        return new Response(200, {}, createdValue.attrs);
      });
      this.put(`api/products/:id`, (schema, request) => {
        const id = (request as any).params.id;
        const parsedValue = queryString.parse(request.requestBody);
        const turn = (schema as any).products.findBy({ id: id });
        turn.update(parsedValue);
        return new Response(200, {}, turn.attrs);
      });
    },
  });

  return server;
}
