FAQ
-----

# `watcher:app` script

The reason I'm using nodemon to watch files instead of using `--watch` option e.g.
`relay-compiler --src ./app --schema server/graphql/__generated__/schema.graphql --watch`

Because failing will cause `relay-compiler` to stop watching while showing this error message
```
UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 2): Invariant Violation: RelayParser: Unknown field `fullName` on type `User`. Source: document `Profile_viewer` file: `GraphQL`
```

So I wanted to avoid that until this issue is resolved.
