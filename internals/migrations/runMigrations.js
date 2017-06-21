import path from 'path';
import migrator from './migrator';

migrator.runFromDir(path.join(process.cwd(), 'migrations'), () => {
  process.exit();
});
