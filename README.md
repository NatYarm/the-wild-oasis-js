# 🏨 The Wild Oasis

A modern hotel management application built with React, designed to streamline cabin bookings, guest management, and hotel operations.

## 🌟 Features

- **Dashboard Overview** - Real-time statistics and charts for bookings, sales, and occupancy
- **Cabin Management** - Add, edit, and delete hotel cabins with photos and pricing
- **Booking System** - Manage reservations, check-ins, and check-outs
- **Guest Management** - Track guest information and booking history
- **User Authentication** - Secure login system for hotel staff
- **Dark Mode** - Toggle between light and dark themes

## 🚀 Demo

**Live Demo:** [View Application](https://the-wild-oasis-js-one.vercel.app/)

### Demo Credentials

To explore the app, use these test credentials:

- **Email:** test@test.com
- **Password:** !2345678

## 🛠️ Built With

- **React** - UI library
- **React Router** - Navigation and routing
- **React Query** - Data fetching and caching
- **Styled Components** - CSS-in-JS styling
- **Supabase** - Backend and database
- **React Hook Form** - Form handling and validation
- **Recharts** - Data visualization
- **date-fns** - Date manipulation
- **Vite** - Build tool and dev server

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/NatYarm/the-wild-oasis-js.git
cd the-wild-oasis-js
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 📱 Usage

### For Hotel Staff

1. Log in with your credentials
2. View dashboard for daily statistics
3. Manage cabins - add new cabins, update pricing, or upload photos
4. Handle bookings - check guests in/out, confirm reservations
5. Update settings - breakfast prices, booking rules, etc.

### Admin Features

- Create new user accounts for staff members
- Update user profiles and passwords
- Configure application settings

## 🎨 Features in Detail

### Dashboard

- Today's activity (arrivals and departures)
- Recent bookings and sales statistics
- Occupancy rate and revenue charts
- Duration breakdown visualization

### Cabins

- Grid/table view of all cabins
- Filter by capacity and sort by various criteria
- Duplicate existing cabins for quick setup
- Upload and manage cabin photos

### Bookings

- Comprehensive booking list with filtering
- Detailed booking information pages
- Check-in process with payment confirmation
- Check-out functionality

### Settings

- Minimum/maximum nights per booking
- Maximum guests per booking
- Breakfast price configuration

## 📂 Project Structure

```
the-wild-oasis-js/
├── src/
│   ├── features/       # Feature-based modules
│   │   ├── authentication/
│   │   ├── bookings/
│   │   ├── cabins/
│   │   ├── dashboard/
│   │   └── settings/
│   ├── services/       # API calls and Supabase queries
│   ├── ui/            # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   ├── utils/         # Helper functions
│   ├── styles/        # Global styles
│   └── App.jsx        # Main app component
├── public/            # Static assets
└── package.json
```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Natalia Tjoonk | Yarmolinskaya**

- GitHub: [@NatYarm](https://github.com/NatYarm)

## 🙏 Acknowledgments

- Project inspired by Jonas Schmedtmann's React course
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components styled with Styled Components

---
