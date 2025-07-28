# Medi Ecom - Health & Wellness Ecommerce Platform

A modern, static ecommerce website for medical and health products built with Next.js and Tailwind CSS. This is a frontend-only application with mock data, perfect for static hosting and demonstration purposes.

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

## 📊 Mock Data Structure

### Data Models

- **Product**: Products with categories, prices, discounts, and reviews
- **Category**: Product categories with icons
- **Review**: Customer reviews with ratings
- **Cart**: Shopping cart functionality with local state
- **Newsletter**: Email subscription (mock functionality)

All data is hardcoded in the frontend components for demonstration purposes.
