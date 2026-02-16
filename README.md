# Sugar Hospital Website - Developer Documentation

## Project Overview
A comprehensive, fully responsive hospital website built with Next.js 14, TypeScript, and Tailwind CSS. The website features a complete sitemap with 9 main sections, 4 application forms, and integrated WhatsApp functionality.

## Technology Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Custom CSS animations with Intersection Observer

## Quick Start

### Installation
```bash
npm install
# or
pnpm install
```

### Development
```bash
npm run dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## Complete Sitemap

### 1. Home (/)
**File**: `app/page.tsx`
- Hero Section with CTA buttons
- Quick Access (6 service cards)
- Services Overview
- Statistics Counter
- Success Stories
- News & Events Preview
- Support Section
- Newsletter Signup

### 2. About Us (/about)
**File**: `app/about/page.tsx`
**Sections**:
- Vision & Mission
- Our Story
- Leadership Team
- Quality Policy
- Awards & Recognitions
- **Publications** (`/about/publications`) - NEW
- Facts & Statistics

### 3. Patients & Families (/patients)
**File**: `app/patients/page.tsx`
**Features**:
- Request Appointment → `/contact`
- View Lab Reports → `/contact`
- Find a Doctor → `/contact`
- Find a Lab Test → `/contact`
- Patient Information Guides
- Financial Assistance Programme
- Our Network

### 4. Medical & Clinical Services (/services)
**File**: `app/services/page.tsx`
**Sections**:
- Clinical Services (8 specialties)
- Diagnostic Services (100+ tests)
- Pharmacy (24/7 service)
- **Community Outreach Camps** (`/services/community-camps`)

### 5. Healthcare Professionals (/professionals)
**File**: `app/professionals/page.tsx`
**Sections**:
- Education & Training
- Research
- Conferences & Seminars
- Quality & Patient Safety

### 6. Donors / Support Us (/support)
**File**: `app/support/page.tsx`
**Features**:
- Donate Now → `/contact`
- Zakat / Sadqa → `/contact`
- Sponsor a Patient
- Fundraising Campaigns
- Corporate Partnerships

### 7. Join Us (/join)
**Subpages with Forms**:
- **Careers** (`/join/careers`) - Full application form
- **Volunteer & Internship** (`/join/volunteer`) - Dual-purpose form
- **Student Ambassador** (`/join/student-ambassador`) - Programme application

### 8. News & Events (/news-events)
**File**: `app/news-events/page.tsx`
- Latest News Section
- Upcoming Events Calendar
- Event Registration

### 9. Contact Us (/contact)
**File**: `app/contact/page.tsx`
**Information**:
- Phone: 0301-1155713, 091-5892728
- Email: akhtar@sugarhospital.com
- WhatsApp Integration
- Service-specific Contact Sections

## Key Features

### 1. Floating WhatsApp Button
**File**: `components/layout/whatsapp-float.tsx`
- Appears on all pages (bottom-right corner)
- Expandable menu with 2 contact numbers
- Direct WhatsApp link integration
- Animated pulse effect

**Implementation**:
```tsx
// Already integrated in app/layout.tsx
import { WhatsAppFloat } from '@/components/layout/whatsapp-float'

// In body:
<WhatsAppFloat />
```

### 2. Application Forms
All forms include:
- Client-side validation
- Success confirmation
- File upload capability (resume/CV)
- Contact information display

**Forms**:
1. **Careers Form** - `components/join/careers-form.tsx`
2. **Volunteer Form** - `components/join/volunteer-form.tsx`
3. **Student Ambassador Form** - `components/join/student-ambassador-form.tsx`

### 3. Responsive Navigation
**File**: `components/layout/header.tsx`
- Desktop: Dropdown menus
- Mobile: Collapsible menu
- Sticky header with scroll effect
- Top bar with contact info

### 4. Contact Strategy
All service requests (appointments, lab reports, donations) redirect to `/contact` page which displays:
- Multiple contact methods
- WhatsApp quick links
- Phone numbers
- Email address
- Service-specific sections

## File Structure

```
app/
├── about/
│   ├── page.tsx
│   └── publications/
│       └── page.tsx
├── contact/
│   └── page.tsx
├── join/
│   ├── careers/
│   │   └── page.tsx
│   ├── volunteer/
│   │   └── page.tsx
│   └── student-ambassador/
│       └── page.tsx
├── news-events/
│   └── page.tsx
├── patients/
│   └── page.tsx
├── services/
│   ├── page.tsx
│   └── community-camps/
│       └── page.tsx
├── support/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── about/
│   ├── publications-hero.tsx
│   └── publications-content.tsx
├── contact/
│   ├── contact-hero.tsx
│   ├── contact-info.tsx
│   └── contact-methods.tsx
├── diabetes-camps/ (used for community-camps)
│   ├── diabetes-camps-hero.tsx
│   ├── camp-services-section.tsx
│   ├── camp-process-section.tsx
│   ├── why-it-matters-section.tsx
│   ├── impact-section.tsx
│   ├── team-section.tsx
│   └── inspiration-section.tsx
├── home/
│   ├── hero-section.tsx
│   ├── quick-access-section.tsx
│   ├── services-section.tsx
│   ├── stats-section.tsx
│   ├── success-stories-section.tsx
│   ├── news-events-section.tsx
│   ├── support-section.tsx
│   └── newsletter-section.tsx
├── join/
│   ├── careers-hero.tsx
│   ├── careers-form.tsx
│   ├── volunteer-hero.tsx
│   ├── volunteer-form.tsx
│   ├── student-ambassador-hero.tsx
│   └── student-ambassador-form.tsx
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   └── whatsapp-float.tsx
├── news-events/
│   ├── news-events-hero.tsx
│   ├── news-section.tsx
│   └── events-section.tsx
├── patients/
│   ├── patients-hero.tsx
│   └── [other patient components]
├── services/
│   ├── services-hero.tsx
│   ├── clinical-services.tsx
│   ├── diagnostic-services.tsx
│   └── pharmacy-section.tsx
├── support/
│   ├── support-hero.tsx
│   ├── sponsor-patient.tsx
│   ├── fundraising-campaigns.tsx
│   └── corporate-partnerships.tsx
└── ui/ (shadcn components)
```

## How to Update Content

### 1. Contact Information
**Primary Contacts**:
- Phone 1: 0301-1155713
- Phone 2: 091-5892728
- Email: akhtar@sugarhospital.com

**Files to Update**:
- `components/layout/header.tsx` (lines ~70-80)
- `components/contact/contact-info.tsx` (contactDetails array)
- `components/layout/whatsapp-float.tsx` (contacts array)

### 2. Navigation Menu
**File**: `components/layout/header.tsx`
```typescript
const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    children: [
      { name: 'Vision & Mission', href: '/about#vision-mission' },
      // Add more items here
    ],
  },
  // Add more menu items
]
```

### 3. Publications
**File**: `components/about/publications-content.tsx`
```typescript
const publications = [
  {
    year: '2024',
    items: [
      {
        title: 'Your Publication Title',
        authors: 'Author Names',
        journal: 'Journal Name',
        type: 'Research Paper',
      },
    ],
  },
]
```

### 4. Services
**Clinical Services**: `components/services/clinical-services.tsx`
```typescript
const services = [
  {
    icon: Heart,
    title: 'Service Name',
    description: 'Service description',
  },
]
```

**Diagnostic Services**: `components/services/diagnostic-services.tsx`
```typescript
const diagnostics = [
  {
    icon: FlaskConical,
    title: 'Category Name',
    tests: ['Test 1', 'Test 2', 'Test 3'],
  },
]
```

### 5. News & Events
**News**: `components/news-events/news-section.tsx`
```typescript
const news = [
  {
    date: 'Feb 10, 2024',
    title: 'News Title',
    excerpt: 'Brief description',
    category: 'Category',
  },
]
```

**Events**: `components/news-events/events-section.tsx`
```typescript
const events = [
  {
    date: 'March 15, 2024',
    time: '9:00 AM - 5:00 PM',
    title: 'Event Title',
    location: 'Location',
    attendees: '200+ Expected',
    description: 'Event description',
  },
]
```

### 6. Form Submissions
Currently, forms use client-side state management. To implement backend:

**Add API Route** (`app/api/submit-form/route.ts`):
```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Process form data
  // Send email notification
  // Store in database
  return Response.json({ success: true })
}
```

**Update Form Component**:
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const formData = new FormData(e.target as HTMLFormElement)
  
  const response = await fetch('/api/submit-form', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
  })
  
  if (response.ok) {
    setSubmitted(true)
  }
}
```

## Styling Guidelines

### Color Palette
```css
Primary Blue: #5F9ED1
Dark Blue: #3F4A7A
Navy: #2C4A6E
Red/Maroon: #A34C55
Dark Red: #8E3F47
Light Gray: #F4F6F8
Medium Gray: #8A8A8A
Border Gray: #E2E2E2
```

### Typography
- **Headings**: font-bold, text-[#3F4A7A]
- **Body**: text-[#8A8A8A]
- **Links**: text-[#5F9ED1], hover:underline

### Spacing
- **Section Padding**: py-20
- **Container**: container mx-auto px-4
- **Card Padding**: p-6 or p-8
- **Gap**: gap-6 (standard), gap-4 (compact)

## Responsive Breakpoints
```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## Animation Classes
Custom animations defined in `globals.css`:
- `animate-fade-in-up` - Fade in from bottom
- `animate-fade-in-down` - Fade in from top
- `animate-float` - Floating effect
- `card-3d` - 3D card hover effect
- `btn-hover-lift` - Button lift on hover

## SEO Optimization

### Meta Tags
**File**: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: 'Sugar Hospital | Diabetes General Hospital & Research Centre',
  description: 'Your description',
  keywords: 'diabetes, hospital, healthcare',
  // Update as needed
}
```

### Page-Specific Meta
Add to individual page files:
```typescript
export const metadata = {
  title: 'Page Title | Sugar Hospital',
  description: 'Page description',
}
```

## Performance Optimization

### Image Optimization
Use Next.js Image component:
```tsx
import Image from 'next/image'

<Image
  src="/images/logo.png"
  alt="Description"
  width={160}
  height={70}
  priority // For above-the-fold images
/>
```

### Code Splitting
Components are automatically code-split by Next.js. Use dynamic imports for heavy components:
```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
```bash
# Build
npm run build

# The output will be in .next folder
# Deploy .next folder to your hosting
```

## Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=akhtar@sugarhospital.com
NEXT_PUBLIC_PHONE_1=03011155713
NEXT_PUBLIC_PHONE_2=915892728
```

## Testing
```bash
# Run development server
npm run dev

# Build and test production
npm run build
npm start

# Check for TypeScript errors
npx tsc --noEmit
```

## Common Tasks

### Add a New Page
1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Create components in `components/` directory
4. Update navigation in `components/layout/header.tsx`

### Add a New Form Field
1. Open form component
2. Add field in JSX:
```tsx
<div>
  <Label htmlFor="fieldName">Field Label *</Label>
  <Input id="fieldName" required className="mt-2" />
</div>
```

### Update WhatsApp Numbers
1. Open `components/layout/whatsapp-float.tsx`
2. Update `contacts` array
3. Ensure numbers are in format: '03011155713' (without spaces)

## Support & Maintenance

### Contact Information
- **Email**: akhtar@sugarhospital.com
- **Phone**: 0301-1155713

### Documentation
- See `WEBSITE_STRUCTURE.md` for detailed sitemap
- Component documentation in respective files
- Inline comments for complex logic

## License
Proprietary - Sugar Hospital

## Version
1.0.0 - February 2024

---

**Note**: This is a static website with no backend. All forms currently show success messages without actual submission. Implement backend API routes for production use.
