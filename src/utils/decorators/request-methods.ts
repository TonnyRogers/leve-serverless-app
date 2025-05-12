/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBodyParamIndex } from './body';
import { getQueryParamIndex } from './query';

export function Get(): MethodDecorator {
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const method = descriptor.value;

    descriptor.value = async function (event: any) {
      const paramIndex = getQueryParamIndex(target, propertyKey as string);
      const args: any[] = [];

      if (paramIndex !== undefined) {
        try {
          const query =
            typeof event.queryStringParameters === 'string'
              ? JSON.parse(event.queryStringParameters)
              : event.queryStringParameters;
          args[paramIndex] = query;
        } catch (err) {
          throw new Error('Invalid JSON query.');
        }
      }

      return await method.apply(this, args);
    };
  };
}

export function Post(): MethodDecorator {
  return (
    target: object,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) => {
    const method = descriptor.value;

    descriptor.value = async function (event: any) {
      const paramIndex = getBodyParamIndex(target, propertyKey as string);
      const args: any[] = [];

      if (paramIndex !== undefined) {
        try {
          const body =
            typeof event.body === 'string'
              ? JSON.parse(event.body)
              : event.body;
          args[paramIndex] = body;
        } catch (err) {
          throw new Error('Invalid JSON body.');
        }
      }

      return await method.apply(this, args);
    };
  };
}
