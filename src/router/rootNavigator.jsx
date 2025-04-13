import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../screens/dashboard';
import Tasks from '../screens/tasks';
import {ADDTASK, DASHBOARD, TASKS, UPDATETASK} from '../utils/routes';
import {Pressable, View} from 'react-native';
import {NotificationBing, TaskSquare} from 'iconsax-react-native';
import Colors from '../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import AddTask from '../screens/tasks/addTask';
import UpdateTask from '../screens/tasks/updateTask';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigate = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 20,
        },
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        options={{
          headerRight: () => (
            <View style={{flexDirection: 'row'}}>
              <Pressable>
                <NotificationBing size="32" color={Colors.BLACK} />
              </Pressable>
              <Pressable
                onPress={() => navigate.navigate(TASKS)}
                style={{marginLeft: 15}}>
                <TaskSquare size="32" color={Colors.BLACK} />
              </Pressable>
            </View>
          ),
        }}
        name={DASHBOARD}
        component={Dashboard}
      />
      <Stack.Screen name={TASKS} component={Tasks} />
      <Stack.Screen name={ADDTASK} component={AddTask} />
      <Stack.Screen name={UPDATETASK} component={UpdateTask} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
