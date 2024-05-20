# E-Commerce_Back_End

## Project Title:

E-Commerce Back End

## Description:

E-Commerce Back End project involves building the back end for an e-commerce site using Express.js API and Sequelize to interact with a PostgreSQL database.

## Installation:

Include instructions on how to install any dependencies required for your project. You can mention running npm install to install necessary packages.

To run the E-Commerce Back End application, follow these steps to install the required dependencies:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hemuprabu/E-Commerce_Back_End

2. cd E-Commerce Back End

3. Run npm install to install dependencies.

4. Set up the database by running the provided SQL files.

5. Create a .env file with your database credentials.


## Technologies Used:

Express.js

Sequelize

PostgreSQL

## Usage:

Run the application using npm start.

Access the API endpoints to interact with the e-commerce site. follow these steps:

1. Start the application by running the following command in your terminal:
   ``` bash
   node index.js
   ```

Once the application is running, users can interact with the E-Commerce Back End through a series of prompts and menus. They can perform actions such as:.

- View all Product, Category, and Tag.

- Add a new Product, Category, and Tag.

- Update Product, Category, and Tag.

- Delete Product, Category, and Tag.


Enjoy creating E-Commerce Back End with the E-Commerce Back End application!

## Features:

Sync Sequelize to the Database on Server Start

Create the code needed in `server.js` to sync the Sequelize models to the PostgreSQL database on server start.

After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes.

* `Product` belongs to `Category`, and `Category` has many `Product` models, as a category can have multiple products but a product can only belong to one category.

* `Product` belongs to many `Tag` models, and `Tag` belongs to many `Product` models. Allow products to have multiple tags and tags to have many products by using the `ProductTag` through model.



### Database Models

Your database should contain the following four models, including the requirements listed for each model:

* `Category`

  * `id`

    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `category_name`
  
    * String.
  
    * Doesn't allow null values.

* `Product`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `product_name`
  
    * String.
  
    * Doesn't allow null values.

  * `price`
  
    * Decimal.
  
    * Doesn't allow null values.
  
    * Validates that the value is a decimal.

  * `stock`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set a default value of `10`.
  
    * Validates that the value is numeric.

  * `category_id`
  
    * Integer.
  
    * References the `Category` model's `id`.

* `Tag`

  * `id`
  
    * Integer.
  
    * Doesn't allow null values.
  
    * Set as primary key.
  
    * Uses auto increment.

  * `tag_name`
  
    * String.

* `ProductTag`

  * `id`

    * Integer.

    * Doesn't allow null values.

    * Set as primary key.

    * Uses auto increment.

  * `product_id`

    * Integer.

    * References the `Product` model's `id`.

  * `tag_id`

    * Integer.

    * References the `Tag` model's `id`.


### Walkthrough Video

Check out this video I recorded with Screencastify: https://drive.google.com/file/d/11eOFPYak5Y2U3UdlJHhU1vJrJOjAe_2B/view


### Repository Quality

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

## Screenshots

![Screenshot 2024-04-25 232151](https://github.com/hemuprabu/E-Commerce_Back_End/assets/108079829/33fd8acc-b1ad-4415-a730-a475f07693f2)
![Screenshot 2024-04-25 232337](https://github.com/hemuprabu/E-Commerce_Back_End/assets/108079829/a60d0d38-172b-4f24-9403-d5a654a45518)
![Screenshot 2024-04-25 232348](https://github.com/hemuprabu/E-Commerce_Back_End/assets/108079829/95f03fb5-4d82-4162-a232-c3923e31fe96)
![Screenshot 2024-04-25 232400](https://github.com/hemuprabu/E-Commerce_Back_End/assets/108079829/cc9b570b-38b9-45f8-9c80-37f781bbd5b5)
![Screenshot 2024-04-25 232411](https://github.com/hemuprabu/E-Commerce_Back_End/assets/108079829/c3aca6d8-9e6e-4424-a443-82936cd751f6)

## License:

The E-Commerce Back End project is distributed under the [MIT License](https://opensource.org/licenses/MIT). This license allows you to use, modify, and distribute the project for both personal and commercial purposes, with attribution to the original author.

For more details on the MIT License terms, please refer to the [LICENSE](./LICENSE) file included in the project repository.

## Author:

This E-Commerce Back End project was created by:

- **Your Name**: Hemalatha Prakasam
- **GitHub**: [GitHub Profile](https://github.com/hemuprabu)

Feel free to connect with me for any inquiries or feedback related to the E-Commerce Back End application. I hope you enjoy using the application and creating custom logos with it.

## Contact

If you have any feedback, questions, or suggestions regarding the E-Commerce Back End application, feel free to reach out to me:

- **Email**: Hemalathaprakasam219@gmail.com

I welcome any feedback or inquiries and am happy to assist with any queries related to the E-Commerce Back End project. Your input is valuable in improving the application and making it more user-friendly.



