# Vite + React Starter Kit

Welcome to the *Vite + React Starter Kit!* This repository provides you with a solid foundation for developing web applications using React, along with a selection of popular tools and libraries to enhance your development workflow. It follows best practices for folder structure, ensuring a clean and organized codebase.

## TODOs
- [ ] Update README.md
- [ ] Develop exclusive CLI to work with this kit
- [ ] Develop Home Page
- [ ] Add more features!

## Features

- **Vite**: A fast and lightweight development server that optimizes your React applications for better performance.
- **TypeScript**: A statically-typed superset of JavaScript that brings robustness and scalability to your codebase.
- **Redux**: A predictable state container for JavaScript apps, enabling efficient management of application state.
- **react-i18next**: A powerful internationalization framework for React applications, allowing you to easily add multilingual support.
- **Tailwind CSS**: A highly customizable utility-first CSS framework that enables rapid UI development with pre-built components and styles.
- **react-testing-library (RTL)**: A testing utility library that promotes best practices for testing React components, ensuring reliable and maintainable test suites.
- **ESLint**: A pluggable and configurable linter tool for identifying and reporting code issues, enforcing code quality and consistency.
- **StyleLint**: A linter tool specifically designed to analyze and enforce consistent CSS coding conventions, improving your stylesheets' maintainability.

## Getting Started

To use this starter kit, follow these steps:

1. Clone the repository to your local machine using the following command:

   ```bash
   git clone git@github.com:hamidyfine/vite-react-starter-kit.git
   // or
   git clone https://github.com/hamidyfine/vite-react-starter-kit.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vite-react-starter-kit
   ```

3. Install the dependencies using your preferred package manager. For example, using npm:

   ```bash
   npm install
   // or
   yarn
   ```

4. Start the development server:

   ```bash
   npm run dev
   // or
   yarn dev
   ```

5. Open your browser and visit `http://localhost:4000` to see the application running.

## Internationalization
This project utilizes `react-i18next` for localization management. All translations should be placed in the `src/locales` folder. To add a new locale, simply create a folder with the locale name. For example, to add the French (fr) locale, create a folder named `fr`.

To generate the translation files for the project, run the following `translation` command. This command will generate a `.ts` file in the `src/locales/` folder, which will be used by the `i18n` instance.

Each file within the locale folder represents a namespace. For instance, a file named `core` creates a namespace called `core` within the project. When you execute this command, any missing namespaces in the locale folder compared to the default locale folder will result in an empty file being created. All locale folders should contain the same set of files, but namespaces are created based on the default locale's namespaces.

Furthermore, when serving the project using the `dev` command, the system will monitor changes in the translation files and automatically regenerate the `index.ts` file in the locale folder. This ensures that any modifications to the translations are reflected in the project without the need to refresh the server.

**Note**: *This project follows a naming convention where it is highly recommended to use singular file names when creating new translation files. For instance, it is advised to use "field" instead of "fields" as the file name. This helps maintain consistency and clarity within the localization structure. Also, please ensure that all translation files are in the `JSON` format.*

## Folder Structure

The starter kit follows a recommended folder structure to ensure scalability and maintainability. Here's an overview of the key directories:

- **`scripts/`**: Contains the scripts that will be executed in node.
- **`src/`**: Contains the main source code of your application, including React components, stylesheets, and any additional files.
- **`public/`**: Houses static assets, such as images or fonts, that are used by your application.

Feel free to modify and adapt the folder structure to fit your specific project requirements.

## Scripts

The following scripts are available to streamline your development workflow:

- **`npm run dev`** or **`yarn dev`**: Starts the development server and provides hot reloading for an optimized development experience.
- **`npm run build`** or **`yarn build`**: Builds the application for production, generating optimized and minified assets.
- **`npm run lint`** or **`yarn lint`**: Lints your codebase using ESLint and StyleLint to enforce code quality and conventions.
- **`npm run translation`** or **`yarn translation`**: Generate config file for localization.

## Contributing

Contributions are welcome! If you encounter any issues, have suggestions, or would like to contribute improvements to the starter kit, please feel free to submit a pull request.

## License

This starter kit is open source and released under the [MIT License](LICENSE). You are free to use, modify, and distribute the code
