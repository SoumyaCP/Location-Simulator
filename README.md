# Location Simulator

## Project Overview  
This web application simulates a vibrant location inspired by Diagon Alley, featuring a restaurant, a train booking system, and a library. The goal is to create an interactive environment showcasing different services commonly found in a bustling area.

## Features

- **Restaurant Module:**  
  The restaurant is fully implemented and serves as the core focus of this project. It allows users to browse the menu, place orders, and view order details in a user-friendly interface. The restaurant management includes features like menu display, item selection, and order tracking.

- Train Booking System:  
  Simulates train ticket booking functionality including route selection and seat reservations. (Note: This module is a prototype and under development.)

- Library:  
  Simulates a library system with book browsing and catalog features. (Currently conceptual, planned for future implementation.)

## Technology Stack

- Frontend: HTML, CSS, JavaScript  
- Backend: Node.js 
- Database: MongoDB

## Restaurant Module Details

When the user clicks on the **Restaurant** section, they are first greeted with a **Home Page** that introduces the restaurant and its offerings.
From there, the user navigates to the **Order Section** where they can view a menu consisting of ** food items**. Each item is displayed with its **name** and a unique **food ID**.

To place an order, the user must:

- Enter the **Food ID** corresponding to the desired item.
- Specify the **quantity** of that food item.

The system then calculates the **total bill** based on the selected items and their quantities.

Once the order is submitted, the details including food ID, quantity, and total bill are **stored in a MongoDB database** for record keeping and future retrieval.

The ordering interface is designed to be simple and intuitive, simulating a real restaurant order experience with backend data persistence.
