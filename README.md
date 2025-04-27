# SIT323-2025-4.1P: Simple Calculator Microservice

## Overview
This project is a simple calculator microservice built with Node.js and Express.js.  
It offers four basic arithmetic operations via REST API endpoints: addition, subtraction, multiplication, and division.

## Installation
1. Clone the repository:
    git clone https://github.com/Sushantmehra08/sit323-2025-prac4p.git
2. Navigate to the project folder:
    cd sit323-2025-prac4p
3. Install dependencies:
    npm install
4. Start the server:
    node server.js

## API Usage
| Operation       | Endpoint Example                          | Description                       |
|-----------------|-------------------------------------------|-----------------------------------|
| Addition        | `/add?num1=10&num2=5`                     | Adds num1 and num2                |
| Subtraction     | `/subtract?num1=10&num2=5`                | Subtracts num2 from num1          |
| Multiplication  | `/multiply?num1=10&num2=5`                | Multiplies num1 and num2          |
| Division        | `/divide?num1=10&num2=5`                  | Divides num1 by num2              |

## Error Handling
- Invalid input parameters return an error message.
- Division by zero is safely handled.

---

