# Calculator

Domain: https://calculator-kousikramachandruni-gmailcom.vercel.app/login

This code is for a Calculator application that requires users to log in with the username "rahul" and password "rahul@2021" in order to access the calculator. If a user fails to log in, an error message will be displayed. The login form is connected to a URL that retrieves a JWT token from the database and stores it in a cookie.

Users can perform multiple actions, and each action is recorded until the history is cleared. The data is stored in local storage.

When the user clicks the logout button, they are redirected to the login page and the JWT token in the cookies is deleted.

If the user enters an incorrect URL, they will be directed to a "not found" page that displays an image and a button to redirect them to the home page.



Login Route:

![image](https://user-images.githubusercontent.com/123394631/224342546-39f5d7af-b03c-429d-86c5-56f57f26c562.png)

Calculator Route:

![image](https://user-images.githubusercontent.com/123394631/224341590-8973410a-9450-47d6-8449-153afb45982b.png)

Notfound Route:

![image](https://user-images.githubusercontent.com/123394631/224343629-22cf22cd-54b8-4ea0-b19d-669b126f7c2d.png)
