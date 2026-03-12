import type { LucideIcon } from 'lucide-react';
import {
  Shield, ShoppingCart, UserCheck, Users2, Truck, DollarSign, Home, Plane, ShoppingBag, Store,
  GraduationCap, Activity, Coins, Gavel, Network, LayoutDashboard, Share, ClipboardList, Radio,
  HelpCircle, Upload, Receipt, Calendar, BarChart3, Briefcase, CalendarCheck, CreditCard,
} from 'lucide-react';

export type ModuleItem = {
  icon: LucideIcon;
  title: string;
  slug: string;
  color: string;
  image?: string;
  features?: string[];
  priority: string;
  priorityColor: string;
};

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/&/g, 'and');
}

function withSlug<T extends Omit<ModuleItem, 'slug'>>(m: T): T & { slug: string } {
  return { ...m, slug: slugify(m.title) };
}

const coreModulesRaw = [
  { icon: HelpCircle, title: 'Support System', color: '#0086b3', image: '/dashboards/Support.png', features: ['Support Tickets (issue tracking & resolution)', 'Inbox Management (centralized communication)', 'Snippets & Templates (quick replies, canned responses)', 'Notifications & Alerts (email/SMS/push)', 'Knowledge Base / FAQs', 'SLA & Escalation Management', 'Feedback & Survey Collection', 'Multi-Channel Support (chat, email, phone, social)', 'Role-Based Access for Agents', 'Analytics Dashboard (response times, ticket volumes)'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Truck, title: 'Logistics', color: '#33a3c4', image: '/dashboards/Logistics.png', features: ['Shipments (creation & management)', 'Tracking (real-time shipment status)', 'Route Optimization & Planning', 'Fleet Management (vehicles, drivers, schedules)', 'Delivery Proof (digital signatures, photos)', 'Warehouse Integration (inventory sync)', 'Vendor & Supplier Coordination', 'Returns & Reverse Logistics', 'Cost Estimation & Freight Calculation', 'Reports & Analytics (delivery times, costs, efficiency)'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Users2, title: 'CRM', color: '#0086b3', image: '/dashboards/CRM.png', features: ['Customer Profiles (history, preferences, contact info)', 'Appointment Scheduling & Calendar Management', 'Lead Management (capture, nurture, conversion)', 'Sales Pipeline Tracking', 'Communication Logs (calls, emails, meetings)', 'Segmentation & Targeting (groups, demographics)', 'Loyalty & Rewards Management', 'Marketing Campaign Integration', 'Customer Feedback & Surveys', 'Reports & Analytics (sales, engagement, churn rates)'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: DollarSign, title: 'Financial', color: '#33a3c4', image: '/dashboards/Financial.png', features: ['Financial Dashboard (real-time KPIs)', 'Transactions (multi-currency, multi-channel)', 'Reports (customizable, exportable)', 'Invoices & Payment History', 'Billing & Expenses Tracking', 'Budgeting & Forecasting Tools', 'Tax & Compliance Management', 'Automated Recurring Billing', 'Payment Gateway Integration', 'Audit Logs & Security Controls'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Home, title: 'Real Estate', color: '#0086b3', image: '/dashboards/RealEstate.png', features: ['Property Listings (Buy/Sell/Rent)', 'City & Neighborhood Search', 'Beds, Baths & Home Type Filters', 'Superhost & Premium Ratings', 'Price per Night Tracking', 'Interactive Map Integration', 'Agent & Broker Management', 'Lease & Rent Tracking'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Plane, title: 'Flight Booking', color: '#33a3c4', image: '/dashboards/Flight Booking.png', features: ['Multi-Airline Flight Search', 'Price Comparison (Cheapest/Best/Quickest)', 'Fare Assistant (Payment Methods)', 'Real-time Flight Tracking', 'Advanced Filters (Stops, Times, Airlines)', 'Seat Selection & Class Upgrades', 'Loyalty Program Management', 'Baggage & Extra Service Tracking'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: ShoppingBag, title: 'Order Management', color: '#0086b3', image: '/dashboards/E-Commerce.png', features: ['New Orders (Dine-In / Delivery)', 'Kitchen Queue (KOT)', 'Completed / Paid Orders', 'Food Items Management', 'Categories & Addons / Variants', 'Seating Layout & Reservations', 'Invoices & Payment History', 'Staff Management', 'Inventory & Suppliers', 'Reports & Analytics'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Store, title: 'Retail Management System', color: '#0086b3', image: '/dashboards/Store Analytics.png', features: ['POS & Billing', 'Product & Catalog Management', 'Inventory Control', 'Vendor & Purchase Management', 'Customer Management (Basic CRM)', 'Staff & Role Management', 'Billing, Payments & Expenses', 'Reports & Analytics', 'Basic System Settings'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: UserCheck, title: 'Staff & HRM', color: '#33a3c4', image: '/dashboards/Project.png', features: ['Attendance & Appointments', 'Staff Management (profiles, roles, departments)', 'Reports & Analytics (performance, payroll)', 'Leave & Holiday Management', 'Payroll Processing & Salary Slips', 'Role-Based Access Control', 'Recruitment & Onboarding Workflow', 'Employee Self-Service Portal', 'Performance Reviews & KPIs', 'Shift Scheduling & Rosters'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: GraduationCap, title: 'Learning Management System (LMS)', color: '#0086b3', image: '/dashboards/Podcast.png', features: ['Course Delivery (online/offline modules)', 'Assessment & Exam Management', 'Student Engagement Tools (quizzes, gamification)', 'Progress Tracking & Certificates', 'Multimedia Content Support (video, docs, SCORM)', 'Instructor & Student Dashboards', 'Discussion Forums & Messaging', 'Adaptive Learning Paths', 'Attendance & Participation Tracking', 'Integration with External Tools (Zoom, Google Meet)'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Activity, title: 'Hospital Management System', color: '#0086b3', image: '/dashboards/Analytics.png', features: ['Patient Records & Profiles (EHR/EMR)', 'Appointment Scheduling (doctor, lab, surgery)', 'Billing & Insurance Integration', 'Staff & Department Management', 'Pharmacy & Inventory Control', 'Laboratory & Diagnostic Reports', 'Bed & Ward Allocation', 'Emergency & OPD Management', 'Patient Portal (reports, prescriptions, billing)', 'Compliance & Audit Logs (HIPAA, ISO)'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Coins, title: 'NFT Marketplace', color: '#33a3c4', image: '/dashboards/NFT Store.png', features: ['Live Auctions & Buy Now', 'Bidding History & Countdown Timers', 'Reserved Price & Active Offers', 'Creator & Collection Profiles', 'Digital Art & Asset Management', 'Web3 Wallet Integration', 'NFT Minting & Collections', 'Secondary Market Tracking'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Gavel, title: 'Bidding & Auction', color: '#33a3c4', image: '/dashboards/Bidding.png', features: ['Live Auction Bidding', 'Auto-Bidding & Proxy Bidding', 'Auction Scheduling & Management', 'Winner Notifications & Payments', 'Item Catalog & Condition Reports', 'Bid History & Analytics', 'Reserve Price Management'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Network, title: 'Affiliate Management', color: '#0086b3', image: '/dashboards/Affililate.png', features: ['Affiliate Performance Tracking', 'Commission & Payout Management', 'Referral Link Generation', 'Marketing Asset Distribution', 'Campaign Analytics & Reporting', 'Tiered Commission Structures', 'Fraud Detection & Prevention'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: LayoutDashboard, title: 'Executive Dashboard', color: '#33a3c4', image: '/dashboards/Executive.png', features: ['High-level Business Overview', 'Key Performance Indicators (KPIs)', 'Revenue & Growth Tracking', 'Operational Efficiency Metrics', 'Strategic Planning Tools', 'Customizable Report Builder'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Share, title: 'Social Media Management', color: '#0086b3', image: '/dashboards/Social Media.png', features: ['Multi-platform Posting & Scheduling', 'Engagement Analytics & Reporting', 'Social Listening & Monitoring', 'Ad Campaign Management', 'Influencer Collaboration Tools', 'Community Management Inbox'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: ClipboardList, title: 'Job Board', color: '#33a3c4', image: '/dashboards/Job Board.png', features: ['Job Posting & Application Tracking', 'Candidate Profiles & Resumes', 'Employer Dashboards', 'Search & Filter by Category/Location', 'Email Notifications for Job Alerts', 'Interview Scheduling Integration'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
  { icon: Radio, title: 'Podcast Management', color: '#0086b3', image: '/dashboards/Podcast.png', features: ['Episode Upload & Distribution', 'Listener Analytics & Demographics', 'Monetization & Ad Insertion', 'Transcript Generation (AI)', 'Social Media Integration', 'RSS Feed Management'], priority: 'Priority 1', priorityColor: 'bg-red-100 text-red-700' },
];

const businessModulesRaw = [
  { icon: Shield, title: 'Authentication & Authorization', color: '#33a3c4', features: ['Sign In/Sign Up', 'Forgot Password', 'OTP Verification', 'Roles & Permissions'], priority: 'Priority 2 - Business Critical', priorityColor: 'bg-yellow-100 text-yellow-700' },
  { icon: ShoppingCart, title: 'E-Commerce', color: '#0086b3', features: ['Products (CRUD)', 'Categories (CRUD)', 'Orders (CRUD)', 'Reviews', 'Cart', 'Checkout'], priority: 'Priority 2 - Business Critical', priorityColor: 'bg-yellow-100 text-yellow-700' },
  { icon: Upload, title: 'File Manager', color: '#33a3c4', image: '/dashboards/File Manager.png', features: ['File Upload/Download', 'File Organization', 'File Sharing', 'Cloud Storage Sync'], priority: 'Priority 2 - Business Critical', priorityColor: 'bg-yellow-100 text-yellow-700' },
  { icon: Receipt, title: 'Invoice', color: '#0086b3', features: ['Invoice Creation', 'Invoice Management', 'Invoice Builder', 'Automated Reminders'], priority: 'Priority 2 - Business Critical', priorityColor: 'bg-yellow-100 text-yellow-700' },
];

const additionalModulesRaw = [
  { icon: Calendar, title: 'Appointment', color: '#0086b3', priority: 'Priority 3', priorityColor: 'bg-green-100 text-green-700' },
  { icon: BarChart3, title: 'Analytics', color: '#33a3c4', priority: 'Priority 3', priorityColor: 'bg-green-100 text-green-700' },
  { icon: Briefcase, title: 'Project Management', color: '#0086b3', priority: 'Priority 3', priorityColor: 'bg-green-100 text-green-700' },
  { icon: CalendarCheck, title: 'Event Calendar', color: '#33a3c4', priority: 'Priority 3', priorityColor: 'bg-green-100 text-green-700' },
  { icon: CreditCard, title: 'Point of Sale (POS)', color: '#33a3c4', priority: 'Priority 3', priorityColor: 'bg-green-100 text-green-700' },
];

export const coreModules: ModuleItem[] = coreModulesRaw.map(withSlug);
export const businessModules: ModuleItem[] = businessModulesRaw.map(withSlug);
export const additionalModules: ModuleItem[] = additionalModulesRaw.map(withSlug);

const allModules: ModuleItem[] = [...coreModules, ...businessModules, ...additionalModules];

export function getModuleBySlug(slug: string): ModuleItem | undefined {
  return allModules.find((m) => m.slug === slug);
}

export function getAllModuleSlugs(): string[] {
  return allModules.map((m) => m.slug);
}
