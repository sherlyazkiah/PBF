## Practicum Report

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720241|
| Nama |  Sherly Lutfi Azkiah Sulistyawati |
| Kelas | TI - 3I |
---

### Step 1 – Run Project
![alt text](img/0-run-project.png)

### Step 2 – Create Catch-All Route
![alt text](img/1-catchallroute.png)

### Step 3 – Catch-All Route Testing
![alt text](img/2-pengujian-catchallroute.png)
![alt text](img/3-pengujian-catchallroute.png)

### Step 4 – Optional Catch-All Route
![alt text](img/4-optional-catchallroute.png)

### Step 5 – Parameter Validation
![alt text](img/5-validasi-parameter.png)

### Step 6 – Create Login & Register Pages
![alt text](img/6-login&register.png)

### Step 7 – Imperative Navigation (router.push)
![alt text](img/7-navigasi-imperatif.png)

### Step 8 – Redirect Simulation (Not Logged In)
![alt text](img/8-simulasi-redirect.png)

## Practical Tasks
### Task 1
- Create a catch-all route:
    - /category/[...slug].js
- Display all URL parameters in the form of a list.
![alt text](img/tugas1.png)

In this task, I created a catch-all route using the file [...slug].tsx in the category folder. This route allows the page to receive multiple parameters from the URL. The parameters are stored in the slug variable and displayed on the page as a list. For example, when accessing /category/electronics/radio, the page will show the values electronics and radio.

### Task 2
- Create navigation:
    - Login → Product (imperative navigation)
    - Login ↔ Register (using Link)
![alt text](img/tugas2-1.png)
![alt text](img/tugas2-2.png)
In this task, I implemented navigation between pages using two methods. The first method is imperative navigation using router.push() on the login page to move the user to the product page after clicking the login button. The second method uses the Link component to create navigation between the login and register pages without refreshing the page.

### Task 3
- Implement an automatic redirect to the login page if the user is not logged in.
![alt text](img/tugas3.png)

## Reflection Questions
**1. What is the difference between catch-all routing and optional catch-all routing?**

- Catch-all routing is used to match multiple URL segments using a single route. It captures all parts of the URL into an array parameter. In Next.js, this is implemented using [...slug]. For example, the route /shop/clothes/tops/tshirt will be captured as ["clothes", "tops", "tshirt"].

- Optional catch-all routing is similar to catch-all routing but allows the route to be accessed even when no parameters are provided. It is implemented using [[...slug]]. This means the page can be accessed with or without additional URL segments, such as /shop or /shop/clothes.

**2. What is the difference between declarative navigation and imperative navigation?**

- Declarative navigation uses components such as <Link> from Next.js to define navigation directly in the JSX structure. This method is simple and commonly used for navigation links between pages.

- Imperative navigation uses JavaScript functions such as router.push() to programmatically change routes. It is usually used when navigation happens after an event, such as after a user logs in, submits a form, or clicks a button.

**3. What are the advantages of using a global layout compared to calling components one by one?Why is client-side navigation important in modern web applications?**

Client-side navigation allows pages to change without fully reloading the browser. This makes the application faster and provides a smoother user experience. Instead of requesting a completely new page from the server, only the necessary data and components are updated. As a result, web applications feel more responsive and similar to desktop or mobile applications.
