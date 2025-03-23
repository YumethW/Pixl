import MovieCard from "@/components/movieCard";
import SearchBar from "@/components/searchBar";
import useFetch from "@/hooks/useFetch";
import { fetchMovies } from "@/services/api";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function Index() {
  const router = useRouter();
  const { width: screenWidth } = Dimensions.get("window");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <ScrollView className="bg-black flex-1">
      <View className="items-center px-4 py-8">
        <Image
          source={require("../../assets/images/Pixl-Dark.png")}
          className="w-32 h-32 mb-6"
        />

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#004953"
            className="mt-10 self-center"
          />
        ) : moviesError ? (
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
