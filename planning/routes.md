# OPTION 8 buy/sell

An app where you can put different types of things up for sale. You can pick a specific niche of items to sell for the app (a cars site, a shoes site, etc). This lets buyers find the items they are looking for quickly, and easily contact sellers.
[Requirements](https://github.com/briantran98/BuyAndSell/blob/master/planning/user-stories.md):

    users can see featured items on a main feed
    users can filter items by price,
    users can favourite items to check up on them later
    users can send messages to the user that is listing the item

Admins can:

    post items, which can be seen by others
    remove items from the site
    mark items as SOLD!,
    send a message via app, email, or text back on negotiations in buying the said item

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

1. GET the gangsters
    - `/gangster/:id`
    - redirect to the home page & sets the cookie sesssion equal to the user id
    - potential profile page

2. GET the home page
    - `/`
        - featured products/products

3. GET the specific conversation
    - `products/:id/conversations/:id`
        - SPA
            - GET all the messages
                - `products/:id/conversations/:id/messages`
            - POST to create a message
                - `products/:id/conversations/:id/messages`

4. GET the specific product page
    - `/products/:id`
        - SPA
            - UPDATE
            - DELETE
            - POST to `/products/:id/conversatons` to create a conversation

5. GET the form to create the product
    - `/products/new`

6. PATCH the status of the product (i.e. SOLD)
    - `/products/:id`
    - redirects /products/:id
        - sold button updates 'ACTIVE STATUS' to false
        - sets featured item to false on HOME PAGE

7. DELETE the product
    - `/products/:id`
    - redirect to home
        - delete button on the product page

8. POST the products
    - `/products`
    - redirect to product page

**STRETCH**
- GET the user's profile page
