<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>washing-machine-shop-website
</h1>
<h4 align="center">A user-friendly website for a washing machine shop, built with React, Next.js, Tailwind CSS, and more.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework: React" />
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend: Javascript, Html, Css" />
  <img src="https://img.shields.io/badge/Backend-Next.js-blue" alt="Backend: Next.js" />
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/spectra-ai-codegen/washing-machine-shop-website?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/spectra-ai-codegen/washing-machine-shop-website?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/spectra-ai-codegen/washing-machine-shop-website?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains a web application called "washing-machine-shop-website" that provides a comprehensive solution for a washing machine shop's online presence, serving as a digital hub for product showcases, repair service bookings, customer engagement, and more. The project is built with a modern tech stack, including React, Next.js, Tailwind CSS, and custom LLMs. 

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🏠 | Homepage        | An engaging homepage with an eye-catching banner, shop description, and clear call-to-action buttons for customer interaction.                                              |
| 🛒 | Product Showcase | A section to display washing machine models with high-quality images, detailed descriptions, and filtering options for easy navigation.                              |
| 🔧 | Repair Services  | A detailed section outlining the shop's repair services, common issues addressed, pricing guidelines, and warranty information.                                    |
| 📅 | Online Booking  | A user-friendly online booking system for scheduling repair appointments at the customer's convenience.                                          |
| 📸 | Photo/Video Upload | An option for customers to upload photos or videos of their washing machine issue for faster diagnosis and potential solutions.                                    |
| 🤝 | About Us        | A page showcasing the shop's history, team, values, and positive customer testimonials to build trust and credibility.                                    |
| 📰 | Blog/News        | A section featuring informative blog posts or articles related to washing machine care, maintenance tips, and industry news.                                |
| 📱 | Responsive Design | The website is designed with a responsive layout, adapting to different screen sizes for optimal viewing on desktops, tablets, and smartphones.                |
| 🤖 | AI-Powered Chatbot| An AI-powered chatbot to provide instant support, answer common customer queries, and enhance customer satisfaction. (Optional)                                  |
| 👓 | Augmented Reality (AR) | An immersive augmented reality experience allowing customers to virtually "try out" different washing machine models in their own homes. (Optional)          |
| 🎯 | Personalized Recommendations | The website analyzes user browsing history and preferences to provide personalized product recommendations. (Optional)                        |
| 💳 | Online Payment Integration | A secure online payment gateway for customers to purchase products and book services directly on the website. (Optional)                                      |
| 🏆 | Loyalty Program   | A loyalty program to reward repeat customers, encourage ongoing engagement, and foster long-term customer relationships. (Optional)                              |

## 📂 Structure

```
washing-machine-shop-website
├── public
│   ├── assets
│   │   ├── images
│   │   │   ├── hero-banner.jpg
│   │   │   ├── washing-machines.jpg
│   │   │   ├── repair-services.jpg
│   │   │   ├── about-us.jpg
│   │   │   ├── testimonials.jpg
│   │   │   └── blog-posts.jpg
│   │   ├── fonts
│   │   │   ├── roboto-regular.ttf
│   │   │   ├── roboto-bold.ttf
│   │   │   └── roboto-light.ttf
│   │   └── icons
│   │       ├── logo.svg
│   │       ├── shopping-cart.svg
│   │       ├── repair-tool.svg
│   │       ├── about-us.svg
│   │       ├── blog.svg
│   │       └── contact.svg
│   └── favicon.ico
├── components
│   ├── Header.js
│   ├── HeroBanner.js
│   ├── ShopDescription.js
│   ├── CallToAction.js
│   ├── ProductCard.js
│   ├── ProductFilters.js
│   ├── RepairServicesSection.js
│   ├── BookingForm.js
│   ├── UploadForm.js
│   ├── AboutUsSection.js
│   ├── Testimonials.js
│   ├── BlogPost.js
│   ├── Footer.js
│   └── Layout.js
├── pages
│   ├── index.js
│   ├── products.js
│   ├── repairs.js
│   ├── about.js
│   ├── blog.js
│   └── contact.js
├── styles
│   ├── globals.css
│   ├── components.css
│   └── pages.css
├── utils
│   ├── fetchProducts.js
│   ├── filterProducts.js
│   ├── handleBooking.js
│   ├── handleUpload.js
│   ├── getTestimonials.js
│   ├── getBlogPosts.js
│   └── handleContactForm.js
└── server
    ├── index.js
    └── routes
        ├── products.js
        ├── repairs.js
        ├── testimonials.js
        ├── blog.js
        └── contact.js

```

  ## 💻 Installation
  ### 🔧 Prerequisites
  - Node.js (v18 or later recommended)
  - npm (or yarn)
  - Docker (Optional for development and deployment)

  ### 🚀 Setup Instructions
  1. Clone the repository:
     - `git clone https://github.com/spectra-ai-codegen/washing-machine-shop-website.git`
  2. Navigate to the project directory:
     - `cd washing-machine-shop-website`
  3. Install dependencies:
     - `npm install`
  
  ## 🏗️ Usage
  ### 🏃‍♂️ Running the Project
  1. Start the development server:
     - `npm run dev`
  2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
  
  ### ⚙️ Configuration
  - Environment Variables: Configure environment variables in a `.env` file at the root of the project. Refer to the `.env.example` file for available variables and their descriptions.
  - Database Configuration: Configure your PostgreSQL database connection details in the `.env` file.
  - API Keys: Configure API keys for services like Google Maps, Stripe, Twilio, and OpenAI in the `.env` file.

  ### 📚 Examples
  - Homepage: [http://localhost:3000](http://localhost:3000)
  - Products: [http://localhost:3000/products](http://localhost:3000/products)
  - Repair Services: [http://localhost:3000/repairs](http://localhost:3000/repairs)
  - About Us: [http://localhost:3000/about](http://localhost:3000/about)
  - Blog: [http://localhost:3000/blog](http://localhost:3000/blog)
  - Contact: [http://localhost:3000/contact](http://localhost:3000/contact)

  ## 🌐 Hosting
  ### 🚀 Deployment Instructions
  - Vercel:
    1. Configure your Vercel project with the appropriate settings.
    2. Deploy your code using the Vercel CLI or the Vercel website.
    3. Set up environment variables in your Vercel project settings.
  - Netlify:
    1. Configure your Netlify project with the appropriate settings.
    2. Deploy your code using the Netlify CLI or the Netlify website.
    3. Set up environment variables in your Netlify project settings.
  - GitHub Pages:
    1. Configure your GitHub Pages deployment settings in the repository's settings.
    2. Push your code to the `gh-pages` branch.
  - AWS:
    1. Create an AWS S3 bucket to store your website files.
    2. Configure an AWS CloudFront distribution for serving your website content.
    3. Deploy your code to the S3 bucket.
  - Google Cloud:
    1. Create a Google Cloud Storage bucket to store your website files.
    2. Configure a Google Cloud CDN for serving your website content.
    3. Deploy your code to the Google Cloud Storage bucket.

  ### 🔑 Environment Variables
  - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Google Maps API key
  - `STRIPE_PUBLISHABLE_KEY`: Stripe publishable key
  - `TWILIO_ACCOUNT_SID`: Twilio account SID
  - `TWILIO_AUTH_TOKEN`: Twilio auth token
  - `OPENAI_API_KEY`: OpenAI API key (Optional)

  ## 📜 API Documentation
  ### 🔍 Endpoints
  - GET /api/products: Retrieves a list of washing machine products.
  - POST /api/bookings: Creates a new repair booking.
  - POST /api/uploads: Uploads images or videos related to a repair issue.
  - GET /api/testimonials: Retrieves customer testimonials.
  - GET /api/blog-posts: Retrieves blog posts.
  - POST /api/contact: Submits a contact form message.

  ### 🔒 Authentication
  The API endpoints do not require authentication.

  ### 📝 Examples
  - `curl -X GET http://localhost:3000/api/products`
  - `curl -X POST http://localhost:3000/api/bookings -H 'Content-Type: application/json' -d '{"customerName": "John Doe", "machineModel": "Samsung WF45R6300AW", "issueDescription": "Machine is not draining properly", "appointmentDate": "2024-10-26"}'`

  ## 📜 License
  This project is licensed under the [GNU AGPLv3](https://choosealicense.com/licenses/agpl-3.0/).
  
  ## 👥 Authors
  - Author Name - [Spectra.codes](https://spectra.codes)
  - Creator Name - [DRIX10](https://github.com/Drix10)

  <p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="Developer: Drix10" />
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="Website: Spectra.codes" />
	<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="Backed by: Google, Microsoft, & Amazon for Startups" />
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="Finalist: Backdrop Build v4" />
  <p>