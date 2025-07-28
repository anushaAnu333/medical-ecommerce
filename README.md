# Medi Ecom - Health & Wellness Ecommerce Platform

A modern, full-stack ecommerce website for medical and health products built with Next.js, Prisma, PostgreSQL, and Tailwind CSS.

## 🚀 Features

### Frontend

- **Modern UI/UX**: Clean, professional design with rounded corners, soft shadows, and a neutral color palette
- **Responsive Design**: Fully responsive across all devices
- **Product Catalog**: Browse products by category with search and filtering
- **Product Details**: Detailed product pages with reviews and related products
- **Newsletter Subscription**: Email subscription with instant discount
- **Customer Reviews**: Star ratings and customer testimonials
- **Instagram Gallery**: Social media integration
- **About & Contact Pages**: Company information and contact forms

### Backend

- **RESTful API**: Complete CRUD operations for products, categories, reviews
- **Database**: PostgreSQL with Prisma ORM
- **User Management**: User registration and authentication
- **Order Management**: Shopping cart and order processing
- **Newsletter System**: Email subscription management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Authentication**: bcryptjs for password hashing

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd medicalecommerce
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/medi_ecom_db"
   NEXTAUTH_SECRET="your-secret-key-here"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Set up the database**

   ```bash
   # Generate Prisma client
   npx prisma generate

   # Run database migrations
   npx prisma migrate dev

   # Seed the database with sample data
   npm run db:seed
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Schema

### Models

- **Product**: Products with categories, prices, discounts, and reviews
- **Category**: Product categories with icons
- **Review**: Customer reviews with ratings
- **User**: User accounts with authentication
- **Newsletter**: Email subscriptions
- **Order**: Order management and tracking

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── product/[id]/      # Product detail page
│   ├── shop/              # Shop page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── lib/                  # Utility functions
│   └── db.ts            # Database connection
└── types/                # TypeScript type definitions
```

## 🎨 Design System

### Colors

- **Primary Background**: `#F8F7F4` (Light beige)
- **Text**: `#1F2937` (Dark gray)
- **Accents**: `#374151` (Medium gray)
- **Borders**: `#E5E7EB` (Light gray)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weights (600-700)
- **Body**: Regular weight (400)

### Components

- **Cards**: Rounded corners (16px), subtle shadows
- **Buttons**: Rounded corners (8px), hover effects
- **Forms**: Clean inputs with focus states

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/[id]` - Get single product
- `POST /api/products` - Create product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product

### Categories

- `GET /api/categories` - Get all categories
- `POST /api/categories` - Create category

### Reviews

- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Create review

### Newsletter

- `POST /api/subscribe` - Subscribe to newsletter

### Orders

- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create order

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:seed` - Seed database with sample data

### Database Commands

- `npx prisma studio` - Open Prisma Studio
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma generate` - Generate Prisma client

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern ecommerce platforms
- Icons from [Lucide React](https://lucide.dev/)
- UI components built with [Tailwind CSS](https://tailwindcss.com/)

## 📞 Support

For support, email support@medi-ecom.com or create an issue in this repository.

# medical-ecommerce
