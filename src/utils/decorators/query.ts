/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

const QUERY_METADATA_KEY = Symbol('query-param');

export function Query(): ParameterDecorator {
  return (target: object, propertyKey: string, parameterIndex: number) => {
    Reflect.defineMetadata(
      QUERY_METADATA_KEY,
      parameterIndex,
      target,
      propertyKey,
    );
  };
}

export function getQueryParamIndex(
  target: any,
  methodName: string,
): number | undefined {
  return Reflect.getMetadata(QUERY_METADATA_KEY, target, methodName);
}
