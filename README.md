# haprocket-api
The best feedback api on the planet.

## definition
A WEB API to send feedback to other people.

### Common actions
- Create user
- Get users
- Create user feedback
- View all feedback by user

### Tools
- NODE.js 16 LTS
- Typescript
- NestJs
- Swagger documentation
- Prisma ORM
- Prisma Client
- SQLite

### Good Practices and Patterns
- Clean Architecture
- Domain Driven Design
- SOLID Principles
- Repository Pattern

### Instalation guide:

#### 1. Download the project with git:
```
git clone https://github.com/gabrielbugarelli/haprocket-api.git
```

#### 2. Download Yarn with NPM:
```
npm install --global yarn
```

#### 3. install the dependencies:
```
yarn install
```

#### 4. Run the application
```
yarn dev
```

#### The API will be raised on *port* 3333, with this, to consume just point to localhost:3333/endpoint.

### 5. Swagger documentation
The entire project is documented in swagger, to access it, just access the API home route in the browser: **localhost:3333/**

### Atentions
To access the database, simply run the command **npx prisma studio* in terminal and open the link http://localhost:5555/ in the browser.

<div align="center"> 
	<img alt="swagger-documentation" title="#documentation" src="./.github/swagger-documentation.png" />
</div>
