import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "@/hooks/useFetch";
import { fetchMovieDetails } from "@/services/api";
import {
  ArrowBigLeft,
  Star,
  Calendar,
  Clock,
  Info,
  Tag,
  DollarSign,
  Building,
} from "lucide-react-native";

interface MovieInfoProps {
  label: string;
  value?: string | number | null;
  icon?: React.ReactNode;
}

const MovieInfo = ({ label, value, icon }: MovieInfoProps) => (
  <View className="flex-row items-start mb-6">
    {icon && <View className="mr-3 mt-1">{icon}</View>}
    <View className="flex-1">
      <Text className="text-gray-400 font-medium text-sm">{label}</Text>
      <Text className="text-white font-semibold text-base mt-1">
        {value || "N/A"}
      </Text>
    </View>
  </View>
);

const Details = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data: movie, loading } = useFetch(() =>
    fetchMovieDetails(id as string)
  );

  if (loading)
    return (
      <SafeAreaView className="bg-black flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#10B981" />
      </SafeAreaView>
    );

  return (
    <View className="bg-black flex-1">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View className="relative">
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}`,
            }}
            className="w-full h-[550px]"
            resizeMode="cover"
          />

          <TouchableOpacity
            className="absolute top-12 left-4 bg-black/50 p-2 rounded-full"
            onPress={router.back}
          >
            <ArrowBigLeft color="#fff" size={24} />
          </TouchableOpacity>
        </View>

        <View className="px-6 py-4">
          <Text className="text-white font-bold text-3xl">{movie?.title}</Text>

          <View className="flex-row items-center flex-wrap mt-3 mb-6">
            <View className="flex-row gap-3 items-center mr-4">
              <Calendar color="#004953" size={14} className="mr-1" />
              <Text className="text-gray text-sm font-medium">
                {movie?.release_date?.split("-")[0]}
              </Text>
            </View>

            <View className="flex-row gap-3 items-center mr-4">
              <Clock color="#9CA3AF" size={14} className="mr-1" />
              <Text className="text-gray text-sm font-medium">
                {movie?.runtime}m
              </Text>
            </View>

            <View className="flex-row gap-1 items-center bg-black/40 px-3 py-1 rounded-full">
              <Star color="#FFD700" size={14} fill="#FFD700" className="mr-1" />
              <Text className="text-white font-bold text-sm">
                {movie?.vote_average?.toFixed(1)}/10
              </Text>
              <Text className="text-gray-400 text-xs ml-1">
                ({movie?.vote_count?.toLocaleString()} votes)
              </Text>
            </View>
          </View>

          <MovieInfo
            label="Overview"
            value={movie?.overview}
            icon={<Info size={18} color="#004953" />}
          />

          <MovieInfo
            label="Genres"
            value={movie?.genres?.map((g: any) => g.name).join(" • ") || "N/A"}
            icon={<Tag size={18} color="#004953" />}
          />

          <View className="flex-row">
            <View className="flex-1 mr-4">
              <MovieInfo
                label="Budget"
                value={
                  movie?.budget
                    ? `$${(movie?.budget / 1_000_000).toLocaleString()} M`
                    : "N/A"
                }
                icon={<DollarSign size={18} color="#004953" />}
              />
            </View>

            <View className="flex-1">
              <MovieInfo
                label="Revenue"
                value={
                  movie?.revenue
                    ? `$${(movie?.revenue / 1_000_000).toLocaleString()} M`
                    : "N/A"
                }
                icon={<DollarSign size={18} color="#004953" />}
              />
            </View>
          </View>

          <MovieInfo
            label="Production Companies"
            value={
              movie?.production_companies
                ?.map((c: any) => c.name)
                .join(" • ") || "N/A"
            }
            icon={<Building size={18} color="#004953" />}
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-8 left-0 right-0 px-6">
        <TouchableOpacity
          className="bg-green rounded-xl py-4 flex-row items-center justify-center shadow-lg"
          onPress={router.back}
        >
          <Text className="text-white font-semibold text-base">
            Back to Movies
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;
