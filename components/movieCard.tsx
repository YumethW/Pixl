import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Star } from "lucide-react-native";

interface Movie {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date?: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: Movie) => {
  const { width } = Dimensions.get("window");
  // Calculate card width: (screen width - padding on both sides - gap between cards) / 3 cards
  const cardWidth = (width - 32 - 16) / 3;

  return (
    <Link href={`/Movie/${id}`} asChild>
      <TouchableOpacity style={{ width: cardWidth }}>
        <View className="shadow-md shadow-gray-800 rounded-lg overflow-hidden">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
            }}
            style={{
              width: cardWidth,
              height: cardWidth * 1.5, // Maintain movie poster aspect ratio
            }}
            resizeMode="cover"
          />
          <View className="absolute bottom-0 left-0 right-0 bg-black/60 p-1 rounded-b-lg">
            <View className="flex-row items-center justify-start gap-x-1">
              <Star color="#FFD700" size={12} fill="#FFD700" />
              <Text className="text-xs text-white font-bold">
                {Math.round((vote_average * 10) / 2) / 10}
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-2 mb-1">
          <Text className="text-sm font-bold text-white" numberOfLines={1}>
            {title}
          </Text>
          {release_date && (
            <Text className="text-xs text-[#004953] font-medium mt-1">
              {release_date.split("-")[0]}
            </Text>
          )}
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
