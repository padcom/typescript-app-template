function sealed() {
  console.log('sealed(): factory evaluated')

  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  return function(constructor: Function) {
    console.log('sealed(): called', constructor)
  }
}

function wrapped() {
  console.log('wrapped(): factory evaluated')

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('wrapped(): called', target, propertyKey, descriptor)
  }
}

@sealed()
export class ExampleClass {
  @wrapped()
  exampleMethod() {
    console.log('ExampleClass.exampleMethod()')
  }
}
