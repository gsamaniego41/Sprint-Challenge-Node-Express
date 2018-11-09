# Review Questions

## What is Node.js?

Node is a runtime environment that lets us run JS outside of the browser (server side)

## What is Express?

Express is a framework; like React for Node.
It adds extra functionality like routing and middleware.
It also accomplishes Node operations with fewer lines of code.

## Mention two parts of Express that you learned about this week.

Almost everything is a middleware
It makes writing Node simpler and easier so we can focus on building the business logic of our app

## What is Middleware?

A middleware is a gatekeeper function that handles a request before the server returns a response.
It can be used to stop a request, add properties to it, modify it, or handle errors.

## What is a Resource?

A resource is any piece of information in a REST API.

## What can the API return to help clients know if a request was successful?

A 200 HTTP status code.

## How can we partition our application into sub-applications?

By using Express Routing.

## What is express.json() and why do we need it?

We need to read data from the request body
