# Contributing to Insult Reminders Firefox Extension

Thank you for considering contributing to Insult Reminders! We appreciate your interest in helping make our extension better. Here are some guidelines to get you started:

### Reporting Issues

If you encounter any issue or a bug while using Insult Reminders, please open a new issue on our GitHub repository. When reporting a bug, please include the following information:
- A clear and descriptive title.
- Steps to reproduce the bug.
- Expected behavior and actual behavior.
- Any error messages or screenshots, if applicable.
- Your operating system and browser version.

### Requesting New Features

Have a great idea for a new feature? We'd love to hear it! Please open a new issue on our GitHub repository and provide the following details:

- A clear and descriptive title.
- Description of the new feature you're suggesting.
- Any relevant use cases or scenarios.
- Optional: Proposed implementation ideas or suggestions.

### Set Up for Contribution

If you'd like to contribute code, add documentation, or expand our database of insults, you can do so by submitting a pull request. Here's how to do it:
1. Fork the repository to your GitHub account.
2. Clone the repository in your local computer
```
git clone https://github.com/<your-username>/insult-reminders.git
```
3. Change into the directory
```
cd insult-reminders
```
4. Now set the remote name upstream to point to the insult-reminder main repository
```
git remote add upstream https://github.com/ossd-s24/insult-reminders.git
```
You can now use upstream to retrieve the most current snapshot of the source code. You should fetch the upstream changes from GitHub from time to time:
```
git fetch upstream
```
5. Create a new branch for your changes.
```
# Make new feature branch starting at current main
git branch new-feature upstream/main
git checkout new-feature
```
or
```
# Make new feature branch starting at current branch
git branch new-feature
git checkout new-feature
```
6. Make your changes and commit them with clear and descriptive commit messages.
7. Push your changes to your forked repository.
```
git push origin new-feature
```
8. Submit a pull request to the main repository.

### Temporary Installation in Firefox

This is a handy place to temporarily install the extension to test changes.

1. Open [this-firefox](about:debugging#/runtime/this-firefox)
2. Click on the `Load Temporary Add-on` button
3. Select any file in the extension's directory

The extension is now installed until you restart Firefox. You should see the extension's icon in the Firefox toolbar.

### Code of Conduct

We expect all contributors to adhere to our Code of Conduct. Please review the [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

### License

By contributing to Insult Reminders, you agree that your contributions will be licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for considering contributing to Insult Reminders! We appreciate your support in making our extension better for everyone.