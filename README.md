# Medi Ecom - Health & Wellness Ecommerce Platform

A modern, static ecommerce website for medical and health products built with Next.js and Tailwind CSS. This is a frontend-only application with mock data, perfect for static hosting and demonstration purposes.

## 🚀 Features

### Frontend Features

- **Modern UI/UX**: Clean, professional design with rounded corners, soft shadows, and a neutral color palette
- **Responsive Design**: Fully responsive across all devices
- **Product Catalog**: Browse products by category with search and filtering
- **Product Details**: Detailed product pages with reviews and related products
- **Shopping Cart**: Add products to cart with toast notifications
- **Newsletter Subscription**: Email subscription with instant discount (mock functionality)
- **Customer Reviews**: Star ratings and customer testimonials
- **About & Contact Pages**: Company information and contact forms
- **Toast Notifications**: Beautiful toast system for user feedback

### Static & Mock Data

- **No Backend Required**: Pure frontend application
- **Mock Data**: All product data, categories, and reviews are hardcoded
- **Static Generation**: All pages are pre-rendered for optimal performance
- **No Database**: No database setup or configuration needed

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Context API
- **Toast Notifications**: Custom toast system

## 📊 Mock Data Structure

### Data Models

- **Product**: Products with categories, prices, discounts, and reviews
- **Category**: Product categories with icons
- **Review**: Customer reviews with ratings
- **Cart**: Shopping cart functionality with local state
- **Newsletter**: Email subscription (mock functionality)

All data is hardcoded in the frontend components for demonstration purposes.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout page
│   ├── contact/           # Contact page
│   ├── product/[id]/      # Product detail page
│   ├── shop/              # Shop page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── contexts/             # React Context providers
│   ├── CartContext.tsx   # Shopping cart state management
│   └── ToastContext.tsx  # Toast notifications
└── types/                # TypeScript type definitions
```

## 🎨 Design System

### Colors

- **Primary Background**: `#F8F7F4` (Light beige)
- **Primary Text**: `#160D05` (Dark brown)
- **Secondary Text**: `#8F7D6A` (Medium brown)
- **Accent Color**: `#D3744A` (Orange)
- **Borders**: `#E2DFCF` (Light beige)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Components

- **Cards**: Rounded corners (16px), subtle shadows
- **Buttons**: Rounded corners (8px), hover effects
- **Forms**: Clean inputs with focus states
- **Toast Notifications**: Beautiful slide-in animations

## 🛍️ Features Overview

### Shopping Experience

- **Product Browsing**: Browse products by category with search and filtering
- **Product Details**: View detailed product information with reviews
- **Shopping Cart**: Add products to cart with beautiful toast notifications
- **Checkout Process**: Complete checkout flow (mock functionality)

### User Interface

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Toast Notifications**: Instant feedback when adding products to cart
- **Loading States**: Smooth loading animations throughout the app

### Static Features

- **About Page**: Company information and mission
- **Contact Page**: Contact form and information
- **Newsletter**: Email subscription with instant discount (mock)
- **Customer Reviews**: Testimonials and ratings display
