# Customer Re-engagement AI Platform

An AI-powered customer retention platform that analyzes customer purchase behavior, identifies churn risk, segments users into engagement cohorts, and generates personalized re-engagement campaigns using Gemini AI.

## Features

* AI-generated personalized customer campaigns using Gemini AI
* Retention scoring based on customer behavior
* Customer segmentation (VIP, Loyal, Regular, Churned)
* Customer analytics and engagement insights
* MongoDB Atlas integration for persistent storage
* RESTful APIs built with Express and TypeScript
* Cloud deployment on Render

## Tech Stack

* TypeScript
* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Gemini AI
* Render

## API Endpoints

| Method | Endpoint               | Description                            |
| ------ | ---------------------- | -------------------------------------- |
| POST   | `/customers`           | Analyze customer and generate campaign |
| GET    | `/customers`           | Fetch all customers                    |
| GET    | `/customers/:id`       | Fetch customer by ID                   |
| GET    | `/customers/analytics` | Customer analytics dashboard           |

## Architecture

Customer Data → Retention Analysis → Segmentation → Gemini AI Campaign Generation → MongoDB Storage → Analytics APIs

## Deployment

Live API: `<YOUR_RENDER_URL>`

## Future Improvements

* Automated email/SMS campaign delivery
* Campaign scheduling
* Agentic customer engagement workflows
* Real-time analytics dashboard
* A/B testing for campaign performance

## Key Highlights

* Built an end-to-end AI-powered customer engagement workflow
* Production-ready deployment with public APIs
* Persistent customer analytics and campaign history
* Inspired by modern MarTech and customer lifecycle platforms
