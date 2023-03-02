import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import bottomNavigatorRoutes from './bottom-navigator-routes';

const BottomTab = createBottomTabNavigator();

interface BottomNavigationsProps {
  initialScreen?: string;
}

const BottomNavigations = ({
  initialScreen = 'home',
}: BottomNavigationsProps) => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'blue.200',
      }}
      initialRouteName={initialScreen}>
      {bottomNavigatorRoutes.map(route => (
        <BottomTab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomNavigations;
