# **Shop.co Database Schema**

### **Tables/Collections**

---

### **1. Products**

---

| **Field**     | **Type**                           | **Description**                   |
| ------------- | ---------------------------------- | --------------------------------- |
| `id`          | String, Unique, Primary Key        | AppWrite's Auto-Generated ID      |
| `title`       | String                             | Product Title                     |
| `description` | String                             | Product Description               |
| `imageUrls`   | String                             | array of URL of the Product Image |
| `price`       | Number                             | Product Price                     |
| `categoryId`  | String, Reference: `Categories.id` | Category ID                       |

### **2. Categories**

---

| **Field** | **Type**                    | **Description**              |
| --------- | --------------------------- | ---------------------------- |
| `id`      | String, Unique, Primary Key | AppWrite's Auto-Generated ID |
| `title`   | String                      | Category Name                |

### **3. Orders**

---

| **Field**   | **Type**                                                         | **Description**              |
| ----------- | ---------------------------------------------------------------- | ---------------------------- |
| `id`        | String, Unique, Primary Key                                      | AppWrite's Auto-Generated ID |
| `userId`    | String, Reference: `Users.id`                                    | User Who Placed the Order    |
| `orderDate` | Date                                                             | Date the Order Was Placed    |
| `total`     | Number                                                           | Total Cost of the Order      |
| `status`    | String, Enum: `['pending', 'shipped', 'delivered', 'cancelled']` | Order Status                 |

### **4. Order Items**

---

| **Field**   | **Type**                         | **Description**                     |
| ----------- | -------------------------------- | ----------------------------------- |
| `id`        | String, Unique, Primary Key      | AppWrite's Auto-Generated ID        |
| `orderId`   | String, Reference: `Orders.id`   | Order ID This Item Belongs To       |
| `productId` | String, Reference: `Products.id` | Product ID                          |
| `quantity`  | Number                           | Number of Items                     |
| `unitPrice` | Number                           | Price per Unit at the Time of Order |

### **5. Carts**

---

| **Field**     | **Type**                         | **Description**                      |
| ------------- | -------------------------------- | ------------------------------------ |
| `id`          | String, Unique, Primary Key      | AppWrite's Auto-Generated ID         |
| `userId`      | String, Reference: `Users.id`    | User ID (links the cart to the user) |
| `items`       | Array of Objects                 | Cart Items                           |
| ‣ `productId` | String, Reference: `Products.id` | Product ID                           |
| ‣ `quantity`  | Number                           | Quantity of the Product              |

## **Relationships**

- A **User** can have many **Orders** (One-to-Many: `Users` → `Orders`)
- An **Order** is associated with one **User** (Many-to-One: `Orders` → `Users`)
- A **Product** can be part of many **Order Items** and **Carts** (One-to-Many: `Products` → `Order Items` & `Products` → `Carts`)
- A **Category** can have many **Products** (One-to-Many: `Categories` → `Products`)
- A **Cart** is associated with one **User** (Many-to-One: `Carts` → `Users`)
