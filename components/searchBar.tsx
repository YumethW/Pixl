import { View, TextInput } from "react-native";
import { Search } from "lucide-react-native";

interface props {
  onPress?: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: props) => {
  return (
    <View className="w-full justify-center flex flex-row items-center  border border-green rounded-3xl">
      <Search color="#004953" size={24} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
        placeholderTextColor="#9ca3af"
        className="px-5 py-4 ml-4 h-full w-3/4 text-white text-lg"
      />
    </View>
  );
};

export default SearchBar;
