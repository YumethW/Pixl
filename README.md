## Overview

Pixl is a simple movie browsing application made using Expo React Native.

## Features

Core Functionality:
- Browse movie catalog from TMDB API
- Search functionality
- Popularity tracking

Technical Highlights:
- TypeScript
- Expo React Native
- Native Wind
- Appwrite backend for the algorithm

The popularity algorithm is a simple algorithm where the user search is stored on an Appwrite instance, updating the search count in the collection in real-time while using TMDB API for displayig movie data.

## Setup Instructions

### Prerequisites

* Node.js
* npm/yarn
* Appwrite instance
* TMDB API key

### Installation

```markdown
```bash
git clone gh repo clone YumethW/Pixl
cd pixl
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```plaintext
EXPO_PUBLIC_MOVIE_API_KEY=your_api_key_here
EXPO_PUBLIC_APPWRITE_PROJECT_ID=http://localhost/v1
EXPO_PUBLIC_APPWRITE_DATABASE_ID=your_project_id
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=your_api_key
```

### Development

```bash
npm start
# or
expo start
```

Open Expo Go app on your device and scan the QR code to preview the application.

## Technical Stack

- TypeScript
- Expo React Native
- Native Wind
- Appwrite
- TMDB API for movie data
