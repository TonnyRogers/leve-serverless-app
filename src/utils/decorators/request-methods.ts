import { getBodyParamIndex } from "./body";

export function Post(): MethodDecorator {
  return (target: Object, propertyKey: string, descriptor: PropertyDescriptor) => {
    const method = descriptor.value;

    descriptor.value = async function (event: any) {
      const paramIndex = getBodyParamIndex(target, propertyKey as string);
      const args: any[] = [];

      if (paramIndex !== undefined) {
        try {
          const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
          args[paramIndex] = body;
        } catch (err) {
          throw new Error('Invalid JSON body.');
        }
      }

      return await method.apply(this, args);
    };
  };
}
