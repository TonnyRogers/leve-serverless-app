/* eslint-disable @typescript-eslint/no-explicit-any */
import 'reflect-metadata';

const BODY_METADATA_KEY = Symbol('body-param');

export function Body(): ParameterDecorator {
  return (target: object, propertyKey: string, parameterIndex: number) => {
    Reflect.defineMetadata(
      BODY_METADATA_KEY,
      parameterIndex,
      target,
      propertyKey,
    );
  };
}

export function getBodyParamIndex(
  target: any,
  methodName: string,
): number | undefined {
  return Reflect.getMetadata(BODY_METADATA_KEY, target, methodName);
}
