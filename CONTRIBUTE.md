# 11e-foxhole.com Official Website
# Contributing Guide

Thank you for your interest in contributing to this project! We welcome all contributions that help improve the project. Whether you are fixing bugs, adding new features, or improving documentation, we are happy to have your help.

You're not used to play with Git in general ? Take a look at [the "Less" Contribute doc !](CONTRIBUTE_less.md)

## How to Contribute

1. **Fork the project**: Click the "Fork" button at the top right of the GitHub page to create your own copy of the project.
2. **Clone the repository**: Clone your fork locally to start working.
   ```bash
   git clone https://github.com/naposky/11e-foxhole.com.git
   ```
3. **Create a branch**: Create a new branch for your contribution respecting the "feat/<WhatYouWantToChange>".
   ```bash
   git checkout -b feat/<TheChange>
   ```
4. **Make your changes**: Make the necessary changes.

Remember that : 
* Text files used for translation are in `src/locales/<lang>/common.json`
* images are put into `src/images` and will be rendered later in `public/images`. Every image should be in webp format, compressed, and respect naming with `imageName-size.webp` name, or `imageName-lang-size.webp` to support locale usage. Locally, you should directly put those into `public/images` if necessary, but avoid to commit them in this folder.

5. **Test your changes**: Make sure everything works as expected if you can run the website locally on your desktop.
6. **Commit your changes**: Add a clear and descriptive commit message.
   ```bash
   git commit -m "chore: Description of the changes"
   ```
7. **Push your changes**: Push your branch to GitHub.
   ```bash
   git push origin feat/<TheChange>
   ```
8. **Open a Pull Request**: From GitHub, submit a Pull Request to have your changes reviewed.

## Coding Standards

- Ensure your code is well-formatted and adheres to the project's conventions.
- Follow the project's naming conventions and structure.

## Communication

If you have any questions or suggestions, feel free to open an issue directly here on Github repository.



