# 💪 Workout-webApp

A mobile fitness application built with React Native and Expo that helps users track and manage their workout routines.

## 📱 Overview

Workout-webApp is a comprehensive fitness tracking application that allows users to create, save, and track their workout routines. The app leverages GraphQL for efficient data fetching and provides a smooth, intuitive user experience.

## ✨ Features

- **Workout Tracking**: Create and save custom workout routines
- **Exercise Library**: Browse through a collection of exercises with instructions
- **Set Management**: Track sets, reps, and weights for each exercise
- **Progress Monitoring**: View your workout history and track improvements
- **Data Persistence**: Save your workout data to a database for access across devices

## 🛠️ Tech Stack

- **Framework**: React Native
- **Navigation**: Expo Router
- **API**: GraphQL
- **State Management**: React Context/Redux
- **Styling**: React Native Stylesheets
- **Backend Integration**: RESTful API endpoints

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (optional)

### Installation

1. Clone the repository
```bash
git clone https://github.com/muskan888/Workout-webApp.git
cd Workout-webApp
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
# Copy the example .env file and update with your values
cp .env.example .env
```

4. Start the development server
```bash
npx expo start
```

5. Run on a device or simulator
```bash
# Press 'i' for iOS simulator
# Press 'a' for Android emulator
# Or scan the QR code with the Expo Go app on your physical device
```

## 📁 Project Structure

```
├── api/                   # API integration and services
├── assets/                # Static assets and images
│   └── data/              # Local data files
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   ├── screens/           # Application screens
│   ├── navigation/        # Navigation configuration
│   ├── hooks/             # Custom React hooks
│   ├── contexts/          # React contexts for state
│   └── utils/             # Utility functions
├── .env                   # Environment variables
├── App.js                 # Main application component
├── app.json               # Expo configuration
└── package.json           # Project dependencies
```

## 📊 Key Features Implementation

### GraphQL Integration

The app uses GraphQL to efficiently query and mutate workout data:

```javascript
// Example GraphQL query
const GET_WORKOUTS = gql`
  query GetWorkouts {
    workouts {
      id
      name
      exercises {
        id
        name
        sets {
          weight
          reps
        }
      }
    }
  }
`;
```

### Saving Sets to Database

The app allows users to save their workout sets to a database for persistence:

```javascript
// Save workout sets
const saveWorkoutSet = async (exerciseId, setData) => {
  try {
    const response = await api.post('/sets', { 
      exerciseId, 
      weight: setData.weight,
      reps: setData.reps 
    });
    return response.data;
  } catch (error) {
    console.error('Error saving set:', error);
  }
};
```



## 🔮 Future Enhancements

- Social sharing features
- Workout recommendations based on user progress
- Advanced analytics and workout statistics
- Integration with fitness wearables
- Offline mode for workouts without internet connection

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
