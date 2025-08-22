

| name                                | about                                                                                       | title                                        | labels | assignees |
| ----------------------------------- | ------------------------------------------------------------------------------------------- | -------------------------------------------- | ------ | --------- |
| Finish User Stories                 | Write and finalize user stories to define requirements and guide development.               | "\[PLANNING] Finish User Stories"            | new    |           |
| Initialize and Populate MongoDB     | Set up MongoDB database and insert seed data to support gift listings.                      | "\[BACKEND] Initialize and Populate MongoDB" | new    |           |
| Run Skeleton Application            | Run initial app skeleton to confirm baseline setup and project dependencies.                | "\[DEV] Run Skeleton Application"            | new    |           |
| Implement Landing Page & Navigation | Build landing page with navigation to access different sections of the app.                 | "\[FRONTEND] Landing Page and Navigation"    | new    |           |
| Add Authentication                  | Implement secure user authentication, including registration, login, and password recovery. | "\[FULLSTACK] Authentication Components"     | new    |           |
| Implement Gift Details Page         | Create a detailed view page for gifts accessible from the listing.                          | "\[FRONTEND] Gift Details Page"              | new    |           |
| Implement Search Component          | Build a search bar and filters to allow users to find gifts by criteria.                    | "\[FRONTEND] Search Component"               | new    |           |
| Add Comments Feature                | Add comments system to allow posting, replying, and viewing discussions on gifts.           | "\[FULLSTACK] Comments Feature"              | new    |           |
| Containerize Services               | Use Docker to containerize backend and frontend services for consistent deployment.         | "\[DEVOPS] Containerize Services"            | new    |           |
| Deploy Backend & Frontend           | Deploy the GiftLink backend and frontend to a hosting environment.                          | "\[DEVOPS] Deploy Backend and Frontend"      | new    |           |

---

## **Feature Description:**

### Finish User Stories

**Feature**: User Story Finalization
**As a** full-stack developer
**I need** to complete all user stories for the GiftLink project
**So that** the team has a clear understanding of requirements and can start development

**Details & Assumptions:**

* Covers backend and frontend tasks
* Based on discussed project requirements

**Acceptance Criteria:**

```gherkin
Given project requirements  
When I finish writing user stories  
Then each should clearly state role, function, benefit, details, assumptions, and acceptance criteria
```

---

### Initialize and Populate MongoDB

**Feature**: MongoDB Initialization
**As a** backend developer
**I need** to set up and seed a MongoDB database
**So that** I can store and retrieve gift data for the application

**Details & Assumptions:**

* MongoDB hosted locally or on MongoDB Atlas
* Mongoose used for schema & models
* Seed data includes name, price, category

**Acceptance Criteria:**

```gherkin
Given MongoDB is running  
When I execute the seed script  
Then the database should be populated with initial gift data  
And the gift collection should contain at least 5 items
```

---

### Run Skeleton Application

**Feature**: Skeleton Application Execution
**As a** developer
**I need** to run the skeleton application
**So that** I can verify the basic setup and functionality

**Details & Assumptions:**

* Skeleton includes structure & dependencies
* Runs locally for dev/testing

**Acceptance Criteria:**

```gherkin
Given the skeleton application  
When I run the app  
Then it should start successfully without errors  
And I should be able to access the main page
```

---

### Implement Landing Page & Navigation

**Feature**: Landing Page and Navigation
**As a** frontend developer
**I need** to implement a landing page and navigation
**So that** users can easily explore the application

**Details & Assumptions:**

* Landing page = first page
* Navigation must be intuitive

**Acceptance Criteria:**

```gherkin
Given design specs for landing page and navigation  
When I implement these features  
Then users should see the landing page on entry  
And be able to navigate to different sections
```

---

### Add Authentication

**Feature**: Authentication System
**As a** user
**I need** to register, log in, and recover passwords securely
**So that** I can access my personal account and data

**Details & Assumptions:**

* Supports register, login, password recovery
* Secure access control

**Acceptance Criteria:**

```gherkin
Given auth requirements  
When I implement authentication  
Then users can register, log in, recover password  
And securely access their personal data
```

---

### Implement Gift Details Page

**Feature**: Gift Details View
**As a** user
**I need** to view detailed information about each gift
**So that** I can make informed choices

**Details & Assumptions:**

* Displays all relevant gift details
* Accessible from listing page

**Acceptance Criteria:**

```gherkin
Given a list of gifts  
When I click a gift  
Then I should see a details page  
And view all relevant information
```

---

### Implement Search Component

**Feature**: Gift Search
**As a** user
**I need** to search for gifts by criteria
**So that** I can find items quickly

**Details & Assumptions:**

* Search by name, category, price, etc.
* Returns relevant results

**Acceptance Criteria:**

```gherkin
Given search requirements  
When I search for a gift  
Then I should see relevant matching results
```

---

### Add Comments Feature

**Feature**: Comments on Gifts
**As a** user
**I need** to post, reply, and view comments
**So that** I can engage in discussions about gifts

**Details & Assumptions:**

* Users can post, reply, and view threads
* Encourages interaction

**Acceptance Criteria:**

```gherkin
Given a gift details page  
When I add or reply to a comment  
Then the comment should appear under the gift  
And others should be able to see it
```

---

### Containerize Services

**Feature**: Containerization
**As a** developer
**I need** to containerize backend and frontend services
**So that** deployment is simplified and consistent

**Details & Assumptions:**

* Uses Docker
* Includes app + dependencies

**Acceptance Criteria:**

```gherkin
Given backend and frontend services  
When I containerize them  
Then they should run consistently across environments
```

---

### Deploy Backend & Frontend

**Feature**: Application Deployment
**As a** developer
**I need** to deploy the backend and frontend
**So that** the app is accessible to users

**Details & Assumptions:**

* Involves server setup, upload, configs
* Backend + frontend tested

**Acceptance Criteria:**

```gherkin
Given tested backend and frontend  
When I deploy them  
Then the application should be live  
And function as expected
```

