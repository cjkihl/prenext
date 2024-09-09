# Updating an Existing Package on npm

To update an existing package on npm, follow these steps:

1. Make your changes to the package code.

2. Update the version number in `package.json`. You can do this manually or use npm's version command:

   ```bash
   npm version patch
   ```

   This command will update the version in `package.json` and create a git tag.

3. If you have any tests, run them to ensure everything is working correctly.

4. Commit all your changes if you're using version control.

5. Push your changes and the new tag to your git repository:

   ```bash
   git push
   git push --tags
   ```

6. Publish the updated package:

   ```bash
   npm publish
   ```

That's it! npm will publish the new version of your package. Users can then update to the latest version using: