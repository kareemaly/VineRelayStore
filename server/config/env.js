import IoC from 'AppIoC';

class EnvConfig {
  has(key) {
    return !!process.env[key];
  }

  get(key) {
    return process.env[key];
  }
}

// Register envConfig
IoC.singleton('envConfig', [], EnvConfig);
