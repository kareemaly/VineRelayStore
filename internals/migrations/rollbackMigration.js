import path from 'path';
import migrator from './migrator';

migrator.rollback(() => {
  process.exit();
});
