# Healthcare API

This is a **NestJS-based Healthcare API** designed to provide management of **appointments** and **patients**, secured with **JWT authentication**. The API allows users to register, log in, and access protected routes for managing patient data and appointments.

The project is fully containerized using **Docker** and orchestrated with **Docker Compose** for easy setup and deployment.

---

## Features
- **JWT Authentication**: Secure login and protected routes.
- **User Registration**: Create new users in the system.
- **Appointments Management**: Create, update, and view patient appointments.
- **Patient Management**: Add, update, and view patient details.
- **Database Integration**: Uses MongoDB for data persistence.
- **Dockerized**: Fully containerized for easy setup and deployment.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Skyler-Kleinschmidt/healthcare-api.git
cd healthcare-api
```

### 2. Build and Start the Application
Run the following command to build and start all services:
```bash
docker-compose up --build
```

### 3. Test the Application
Please install Postman and utilize the provided collection files in the `postman-collections` directory to test the application's endpoints.
