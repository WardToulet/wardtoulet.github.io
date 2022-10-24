---
title: Definging a module
layout: project.njk
---

A module is a package that exports a class that implements the `Module` interface.

```ts
export default class ExampleModule implements Module {
	wire(cfg) {
		return cfg.configure()
	}
}
```

A module can export services these are classes that contain some logic and can be accessed by other services through dependency injection.

```ts
export interface FooService {
	foo(): string
}

export const fooServiceToken = token<FooService>('foo-service');
class FooServiceImpl implements FooService {
	foo() {
		return "bar"
	}
}
```

This would be exported like this 

```ts
export default class ExampleModule implements Module {
	wire(cfg) {
		return cfg
			// Added the foo service
			.service
				.token(fooServiceToken)
				.class(FooServiceImpl)
			.configure()
	}
}
```

Services can rely on other services by injecting them inside the constuctor

```ts
export const fooServiceToken = token<FooService>('foo-service');
export interface FooService {
	foo(): string
}
class FooServiceImpl implements FooService {
	constructor(private barService: BarService) {}
	foo() { return this.barService.bar(); }
}

export const barServiceToken = token<BarService>('bar-service');
export interface BarService {
	bar(): string
}
class BarServiceImpl implements BarService {
	bar() { return "bar" }
}

export default class ExampleModule implements Module {
	wire(cfg) {
		return cfg
			// Add foo service
			.service
				.token(fooServiceToken)
				.class(FooServiceImpl)
				.inject(barServiceToken)

			// Add bar service
			.service
				.token(barServiceToken)
				.class(barServiceImpl)

			.configure()
	}
}
```
