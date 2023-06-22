# Popular Songs using Genius API

This is a simple JavaScript code snippet that fetches popular songs using the Genius API. It utilizes the Genius API's search functionality and filters the results based on popularity.

## Getting Started

To use this code, follow the steps below:

### Prerequisites

- Node.js installed on your machine
- Genius API access token (obtainable by signing up for a Genius API account)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fossyy/song-searching-website.git
   ```

2. Navigate to the project directory:

    ```bash
    cd project-directory
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```
    The website will be accessible at http://localhost:3000.

## API Configuration

The website uses an API to fetch movie data. To configure the API, follow these steps:

1. Obtain an API key from [API Provider](https://www.themoviedb.org/settings/api).

2. Open the `api.js` file in the `src` directory.

3. Replace `'YOUR_API_KEY'` with your actual API key:

   ```javascript
   const API_KEY = 'YOUR_API_KEY';
    ```

4. Save the changes.

## Deployment
To deploy the website to a production environment, follow these steps:

1. Build the production-ready optimized bundle:

    ```bash
    npm run build
    ```
2. Deploy the contents of the build directory to your chosen hosting platform.

## Contributing

Contributions are welcome! If you have any improvements or bug fixes, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

