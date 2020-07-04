## Routes

|Route name|URL |HTTP Verb   |Description   |
|---|---|---|---|
| home  |/   |GET   |Display all featured products  |
|user   |/gangster/:id   |GET   |Set the session to the user id and redirect to home   |
| product  |/products/new  |GET   |Display the page to create a new product   |
| product  | /products/:id  | GET  |Display the specific product page   |
| product  |/products/:id   |PATCH   |Update the specific product   |
| product  | /products/:id  | DELETE  |Delete the specific product and redirect to the home page  |
| product  |/products   |POST   |Add a new product to the database, then redirect to the product page   |
| message  |/products/:id/messages |GET   |Display all messages   |
| message   |/products/:id/messages  |POST   |Add a new message to the conversation|
