**14-12-2020**

- Handle routes and contains the all code neccessary for running the server

**Dependencies installed**

1. nodemon - to avoid start and restart sever again.
2. express - handle all routes, serve files, start server, session functionality.
3. chalk - for colorful output.
4. express-session - to handle session facility.
5. multer - to handle images upload.
6. ejs - templataing engine for our project.

**required files**
All additional functionality required to perform various database or storage operation or any other operation are stored inside **controllers**

- **admin.js** - this file handles the logic when admin lists a new product inside our database

- **cart_update.js** - handles logic when user add a new cart item each time use click add to cart
  if (product is already exist)
  modify the quantity
  else
  make a new entry

- **delete_one_product.js** - delete a single product from a produt quantity

- **delete_product.js** - delete total product from our storage

- **rw.js** - this module contains two methods read data from storage/file and second one is for write data to storage

**First Commit Features**

**Note:** To run this project first you need to minify all html,css and client side javascript files or change file path in all html,css and js files.

<ol>
  <li>Listing of a new product in inventory aka list file using /admin route</li>
  <li>Add product to cart.</li>
  <li>View Description of product.</li>
  <li>After adding the Product check your cart using **/checkout** route.</li>
  <li>Cart items stored inside cart file present in our folder structure.</li>
<li>Back to product page button take us back to product listing page and checkout button is disabled for now.</li>
<li>various operations like increase quantity by 1 , decrease quantity by 1, view description of the product delete product from the cart.</li>
</ol>

**First Commit Bugs**

1. modal in cart page not working properly - Resolved in 17.12.20 push

**17-12-2020**

<ol>
<li>Update admin login User interface.</li>
<li>Added admin login facility using express-session node module</li>
<li>Added admin profile section</li>
<li>Now admin can update its details</li>
<li>New Paths added in app.js to handle admin routes - </li>
<li>Resolved First Commit Bugs(Total 1)</li>
<li>Add multer module to handle images </li>
<li>Admin now can upload avatar image and at backend they saved in "uploads/admin" folder.</li>
</ol>

**18-12-2020**

<ol>
<li>Declutter Folder structure by deleting unneccssary files and merge same file css into one</li>
<li>Make seperate folders for each Page for each page-css and each page-script</li>
<li>Add stats and inventory details for admin</li>
<li>Prevent user to go back and forth once logged out using midleware function</li>
</ol>

**19-12-2020**

<ol>
<li>Admin now can change avatar and changed avatar also displayed instantly</li>
</ol>

**20-12-2020**

<ol>
<li>crete seperate routes for admin and user</li>
<li>set up ejs view engine</li>
<li>now all ejs files will be sent to the server</li>
<li>html folder from now on will be in untracked folder</li>
</ol>
