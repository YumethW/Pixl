# Pixl: A cross platform movie browsing application

Pixl is a simple movie browser made using Expo React Native.

## Tech Stack

- **Frontend**: Expo React Native with TypeScript
- **Styling**: Native Wind
- **Movie Data**: TMDB API
- **Algorithm**: Appwrite

## Key Features

- **Browse movie/ TV Series**: Browse the latest and popular movies and TV series
- **Search**: Search for movies and TV series and see their details
- **Popularity tracking**: A simple algorithm to show the most searched movies and TV series .

## How It Works

1. Browse/ search for movies and TV series and read about them
2. See the most searched movie and TV series using a simple algorithm where the user search is stored on an Appwrite instance, updating the search count in the collection in real-time while using TMDB API for displayig movie data.

## Getting Started

### Prerequisites

- Node.js
- Appwrite instance
- TMDB API key

### Installation

```bash
git clone https://github.com/YumethW/Pixl.git
cd pixl
npm install
```

### Environment Setup

Create a `.env.local` file with:
```bash
EXPO_PUBLIC_MOVIE_API_KEY=your_api_key_here
EXPO_PUBLIC_APPWRITE_PROJECT_ID=http://localhost/v1
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_project_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_api_key
```

### Run the Application

```bash
npm start
```

or

```bash
expo start
```

Open Expo Go app on your device and scan the QR code to preview the application.
