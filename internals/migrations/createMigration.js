import path from 'path';
import migrator from './migrator';

migrator.create(path.join(process.cwd(), 'migrations'), process.argv[2], () => {
  process.exit();
});
