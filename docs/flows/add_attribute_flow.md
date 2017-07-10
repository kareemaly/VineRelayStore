How to add an attribute to one of your resources
-----------

## Server
- Add the attribute along with the validation to `server/{module}/models/{resource}Model.js`
- **Graphql specific**: Add the attribute to `server/graphql/types/{resource}Type.js`
- **Graphql specific**: Add the attribute to your mutations as required `server/graphql/mutations/{resource}/*.js`


## Client
- **Admin specific**: Add input to edit the attribute in `app/components/Admin/{Resource}/Edit{Resource}/index.js`
  - Dont forget to add the attribute in the fragment
