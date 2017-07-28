/* eslint-disable no-console */
import path from 'path';
import fs from 'fs';
import { graphql } from 'graphql';
import chalk from 'chalk';
import { introspectionQuery, printSchema } from 'graphql/utilities';
import IoC from 'AppIoC';
import '../server/bootstrap';

const jsonFile = path.resolve(process.cwd(), 'server/graphql/__generated__/schema.json');
const graphQLFile = path.resolve(process.cwd(), 'server/graphql/__generated__/schema.graphql');

async function updateSchema(schema) {
  try {
    // Get our graphql schema
    const schema = await IoC.resolve('graphqlSchema');
    // Convert to json
    const json = await graphql(schema, introspectionQuery);
    // Save json to schema.json
    fs.writeFileSync(jsonFile, JSON.stringify(json, null, 2));
    // Convert and save to schema.grahpql
    fs.writeFileSync(graphQLFile, printSchema(schema));
    console.log(chalk.green('Schema has been regenerated ✓'));
    process.exit();
  } catch (err) {
    console.error(chalk.red(err.stack));
  }
}

// Run the function directly, if it's called from the command line
if (! module.parent) updateSchema();
//
export default updateSchema;
