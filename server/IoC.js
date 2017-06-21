import Q from 'q';

export default class IoC {

  static same(newName, oldName) {
    if(oldName in IoC.resolved) {
      IoC.resolved[newName] = IoC.resolved[oldName];
    }
    if(oldName in IoC.callables) {
      IoC.callables[newName] = IoC.callables[oldName];
    }
    if(oldName in IoC.singletons) {
      IoC.singletons[newName] = IoC.singletons[oldName];
    }
    if(oldName in IoC.instances) {
      IoC.instances[newName] = IoC.instances[oldName];
    }
  }

  static singleton(name, dependencies, classType) {
    if(! classType) {
      throw new Error(`You are trying to register an undefined singleton: ${name}`);
    }
    IoC.singletons[name] = {
      dependencies,
      classType,
    };
  }

  static callable(name, dependencies, func) {
    if(typeof func !== 'function') {
      throw new Error(`You are trying to register a non callable: ${name}`);
    }
    IoC.callables[name] = {
      dependencies,
      func,
    };
  }

  static callableMany(callables) {
    callables.forEach(
      ([ name, dependencies, func ]) => IoC.callable(name, dependencies, func));
  }

  static instance(name, dependencies, classType) {
    if(! classType) {
      throw new Error(`You are trying to register an undefined instance: ${name}`);
    }
    IoC.instances[name] = {
      dependencies,
      classType,
    };
  }

  static value(name, resolved) {
    IoC.resolved[name] = resolved;
  }

  static async resolveDependencies(dependencies) {
    const resolveDependencies = [];
    for(let dependency of dependencies) {
      resolveDependencies.push(await IoC.resolve(dependency));
    }
    return resolveDependencies;
  }

  static async resolveCallable(name) {
    const callable = IoC.callables[name];

    const args = await IoC.resolveDependencies(callable.dependencies);

    return await callable.func.call(callable.func, ...args);
  }

  static async resolveClassInstance(name) {
    const instance = IoC.singletons[name];

    const args = await IoC.resolveDependencies(instance.dependencies);

    return new instance.classType(...args);
  }

  static async resolveRegex(regex) {
    const toResolve = [];
    for(let key in IoC.callables) {
      if(regex.exec(key)) {
        toResolve.push(key);
      }
    }
    return Q.all(toResolve.map(r => IoC.resolve(r)));
  }

  static async resolve(name) {
    try {
      // @TODO add timeout logic
      if(!(name in IoC.resolved)) {

        if(name in IoC.callables) {
          IoC.resolved[name] = IoC.resolveCallable(name);
        }

        else if(name in IoC.singletons) {
          // Resolve and save so we use the same instance again
          IoC.resolved[name] = IoC.resolveClassInstance(name);
        }

        else if(name in IoC.instances) {
          // Dont save, everytime you will create a new instance
          return await IoC.resolveClassInstance(name);
        }

        else {
          throw new Error(`Cant resolve ${name}: Not Registered`);
        }
      }

      return await IoC.resolved[name];
    } catch(error) {
      console.log(`Error while resolving ${name}:`);
      return Q.reject(error);
    }
  }
}

IoC.callables = {};
IoC.singletons = {};
IoC.instances = {};
IoC.resolved = {};

