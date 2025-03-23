import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import TrendingCard from "@/components/trendingCard";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  const uniqueTrendingMovies = trendingMovies
    ? trendingMovies.filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.movie_id === movie.movie_id)
      )
    : [];

  return (
    <ScrollView className="bg-black flex-1">
      <View className="items-center px-4 py-8">
        <Image
          source={require("../../assets/images/Pixl-Dark.png")}
          className="w-32 h-32 mb-6"
        />

        {moviesLoading || trendingLoading ? (
          <ActivityIndicator
            size="large"
            color="#004953"
            className="mt-10 self-center"
          />
        ) : moviesError || trendingError ? (
          <Text className="text-white mt-4 text-center">
            Hmmmmm looks like we have a {moviesError?.message}
          </Text>
        ) : (
          <View className="w-full">
            <SearchBar
              placeholder="Search away :D"
              onPress={() => {
                router.push("/search");
              }}
            />

            {trendingMovies && (
              <View className="mt-10">
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Movies
                </Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-3"
                  data={uniqueTrendingMovies}
                  contentContainerStyle={{ gap: 26 }}
                  renderItem={({ item, index }) => (
                    <TrendingCard movie={item} index={index} />
                  )}
                  keyExtractor={(item) => item.movie_id.toString()}
                />
              </View>
            )}

            <View className="mt-8">
              <View className="flex-row justify-between items-center mb-4">
                <Text className="text-white text-xl font-bold">
                  Popular Movies
                </Text>
              </View>

              <FlatList
                data={movies}
                renderItem={({ item }) => <MovieCard {...item} />}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                scrollEnabled={false}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
                contentContainerStyle={{
                  width: "100%",
                }}
              />
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
