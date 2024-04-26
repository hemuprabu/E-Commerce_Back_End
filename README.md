# E-Commerce_Back_End

## Project Title:

E-Commerce Back End

## Description:

E-Commerce Back End is a command-line application that helps businesses manage their employees, departments, and roles efficiently. With E-Commerce Back End, users can add, view, update, and delete employees, departments, and roles in a centralized database.

## Installation:

Include instructions on how to install any dependencies required for your project. You can mention running npm install to install necessary packages.

To run the E-Commerce Back End application, follow these steps to install the required dependencies:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/hemuprabu/E-Commerce_Back_End

2. cd E-Commerce Back End

3. running npm install to install necessary packages.

## Usage:

To run the E-Commerce Back End application and generate employee data, follow these steps:

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

* A walkthrough video that demonstrates the functionality of the e-commerce back end must be submitted, and a link to the video should be included in your readme file.

* The walkthrough video must show all of the technical acceptance criteria being met.

* The walkthrough video must demonstrate how to create the schema from the PostgreSQL shell.

* The walkthrough video must demonstrate how to seed the database from the command line.

* The walkthrough video must demonstrate how to start the application’s server.

* The walkthrough video must demonstrate GET routes for all categories, all products, and all tags being tested in Insomnia.

* The walkthrough video must demonstrate GET routes for a single category, a single product, and a single tag being tested in Insomnia.

* The walkthrough video must demonstrate POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia.



### Repository Quality

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality readme with description and a link to a walkthrough video.

## Screenshots

![Screenshot 2024-04-22 195952](https://github.com/hemuprabu/Employee_Tracker/assets/108079829/db1f4471-1d2e-4809-86fc-99782d1c6d4a)
![Screenshot 2024-04-22 200256](https://github.com/hemuprabu/Employee_Tracker/assets/108079829/9bd33d85-0478-470e-a89b-3c36f3b8e515)
![Screenshot 2024-04-22 200411](https://github.com/hemuprabu/Employee_Tracker/assets/108079829/66b8b65e-edfe-41e1-9c61-8e2c675fea26)


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



