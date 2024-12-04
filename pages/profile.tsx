import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { UserContext } from '@utils/helpers';
import { Ionicons } from '@expo/vector-icons';
import { logoutUser } from '@services/firebase';

export default function Profile() {
  const { user } = useContext(UserContext);
  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <View className="flex-1 bg-gray-100 p-6">
      {/* Header */}
      <View className="items-center mb-8">
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          className="w-24 h-24 rounded-full mb-4"
        />
        <Text className="text-2xl font-semibold text-gray-800">
          {user?.name} {user?.lastName}
        </Text>
        <Text className="text-sm text-gray-500 uppercase">{user?.role}</Text>
      </View>
      {/* Información del Usuario */}
      <View className="bg-white rounded-lg p-6 elevation-5 mb-8">
        <View className="flex-row items-center mb-4">
          <Ionicons name="mail-outline" size={24} color="#555" />
          <Text className="ml-4 text-base text-gray-700">
            {user?.email || 'No disponible'}
          </Text>
        </View>
        <View className="flex-row items-center mb-4">
          <Ionicons name="call-outline" size={24} color="#555" />
          <Text className="ml-4 text-base text-gray-700">
            {user?.phone || 'No disponible'}
          </Text>
        </View>
        <View className="flex-row items-center">
          <Ionicons name="calendar-outline" size={24} color="#555" />
          <Text className="ml-4 text-base text-gray-700">DNI: {user?.dni}</Text>
        </View>
      </View>

      {/* Acciones */}
      <View className="flex-row justify-between">
        <TouchableOpacity className="flex-row items-center bg-[#722f37] px-4 py-3 rounded-lg elevation-3">
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text className="ml-2 text-white text-lg font-semibold">
            Editar Perfil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center bg-red-500 px-4 py-3 rounded-lg elevation-3"
          onPress={handleLogout}
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text className="ml-2 text-white text-lg font-semibold">
            Cerrar Sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
