# Skip Sensei

## Project Overview

This project is a redesign of the skip selection page for WeWantWaste.co.uk. The goal was to create a modern, responsive interface while maintaining the core functionality of the original page.

### Test Task Requirements
- Redesign the skip selection page from WeWantWaste.co.uk
- Maintain original functionality while improving UI/UX
- Ensure responsive design for both mobile and desktop
- Integrate with the provided API endpoint for skip data
- Focus on clean, maintainable React code

## Technologies Used

- Vite - For fast development and optimized builds
- TypeScript - For type safety and better code maintainability
- React - For building the user interface
- shadcn-ui - For modern, accessible UI components
- Tailwind CSS - For responsive styling and utility-first CSS

## Implementation Approach

### 1. Project Setup
- Created a new React project using Vite for optimal development experience
- Implemented TypeScript for better code quality and maintainability
- Set up shadcn-ui and Tailwind CSS for modern, responsive design

### 2. Data Integration
- Integrated with the provided API endpoint: `https://app.wewantwaste.co.uk/api/skips/by-location`
- Implemented proper error handling and loading states
- Created TypeScript interfaces for type-safe data handling

### 3. UI/UX Improvements
- Designed a clean, modern interface for skip selection
- Implemented responsive layouts for both mobile and desktop views
- Added loading states and error handling for better user experience
- Improved accessibility with proper ARIA labels and keyboard navigation
- Enhanced visual hierarchy for better information scanning

### 4. Code Quality
- Followed React best practices and modern coding standards
- Implemented component-based architecture for better maintainability
- Used TypeScript for type safety and better code documentation
- Organized code into logical modules and components

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd skip-sensei

# Step 3: Install dependencies
npm i

# Step 4: Start the development server
npm run dev
```

## Development

You can edit the code using any IDE of your choice. The development server provides auto-reloading and instant preview of your changes.

## Deployment

This project can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Testing

The application has been tested on:
- Desktop browsers (Chrome, Firefox, Safari)
- Mobile browsers (iOS Safari, Android Chrome)
- Different screen sizes and orientations
