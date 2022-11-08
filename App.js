import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chooselogintype from "./Chooselogintype";
import Clientlogin from "./Clientlogin";
import BusinessLogin from "./BusinessLogin";
import BusinessDashboard from "./BusinessDashboard";
import BusinessSignup from "./BusinessSignup";
import Choosesignuptype from "./Choosesignuptype";
import ClientSignup from "./ClientSignup";
import ServiceDetailPage from "./ServiceDetailPage";
import ServiceCategory from "./ServiceCategory";
import ServiceSelect from "./ServiceSelect";
import QuizCategory from "./QuizCategory";
import PalmistQuiz from "./PalmistQuiz";
import Recommendations from "./Recommendations";
import ServiceListings from "./ServiceListings";
import SUserRequestPending from "./SUserRequestPending";
import EditServiceform from "./EditServiceform";
import SUserPaymentPending from "./SUserPaymentPending";
import ServiceList from "./ServiceList";
import Serviceform from "./Serviceform";
import ProfileSettings from "./ProfileSettings";
import Choosebookingtype from "./Choosebookingtype";
import Upcoming from "./Upcoming";
import History from "./History";
import Cancelled from "./Cancelled";
import CalenderMethod from "./CalenderMethod";
import AddCalenderMethodDetails from "./AddCalenderMethodDetails";
import PaymentInfo from "./PaymentInfo";
import CalenderMethodConfirmation from "./CalenderMethodConfirmation";
import Choosebookingoptions from "./Choosebookingoptions";
import Bookingmode from "./Bookingmode";
import CProfile from "./CProfile";
import Chooseuserbookingtype from "./Chooseuserbookigtype";
import UserUpcoming from "./UserUpcoming";
import UserHistory from "./UserHistory";
import UserCancelled from "./UserCancelled";
import UserRejected from "./UserRejected";
import PendingBookingSelectionPage from "./PendingBookingSelectionPage";
import UserRequestPending from "./UserRequestPending";
import UserPaymentPending from "./UserPaymentPending";
import Trending from "./Trending";
import Home from "./Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Chooselogintype"
          component={Chooselogintype}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Clientlogin"
          component={Clientlogin}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="BusinessLogin"
          component={BusinessLogin}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Business Dashboard"
          component={BusinessDashboard}
        />
                <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="BusinessSignup"
          component={BusinessSignup}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="Choosesignuptype"
          component={Choosesignuptype}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          options={{ header: () => null }}
          name="ClientSignup"
          component={ClientSignup}
        />

        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="ServiceDetailPage"
          component={ServiceDetailPage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="ServiceCategory"
          component={ServiceCategory}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Choose Service"
          component={ServiceSelect}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="QuizCategory"
          component={QuizCategory}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="PalmistQuiz"
          component={PalmistQuiz}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Recommendations"
          component={Recommendations}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="ServiceListings"
          component={ServiceListings}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="SUserRequestPending"
          component={SUserRequestPending}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="EditServiceform"
          component={EditServiceform}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Edit"
          component={SUserRequestPending}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="SUserPaymentPending"
          component={SUserPaymentPending}
        />
        <Stack.Screen name="Manage Services" component={ServiceList} />
        <Stack.Screen name="Add Service Form" component={Serviceform} />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Profile Settings"
          component={ProfileSettings}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Bookings"
          component={Choosebookingtype}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Upcoming Bookings"
          component={Upcoming}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="History"
          component={History}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Cancelled Bookings"
          component={Cancelled}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Calender Method"
          component={CalenderMethod}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Add details"
          component={AddCalenderMethodDetails}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Payment Information"
          component={PaymentInfo}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Confirmation Message"
          component={CalenderMethodConfirmation}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Booking Options"
          component={Choosebookingoptions}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Booking Mode"
          component={Bookingmode}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="CProfile"
          component={CProfile}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Your Bookings"
          component={Chooseuserbookingtype}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Your Upcoming Bookings"
          component={UserUpcoming}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Your Bookings History"
          component={UserHistory}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Your Cancelled Bookings"
          component={UserCancelled}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Rejected Bookings"
          component={UserRejected}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Pending Bookings"
          component={PendingBookingSelectionPage}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Requests Pending"
          component={UserRequestPending}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Payment Pending"
          component={UserPaymentPending}
        />
        <Stack.Screen
          screenOptions={{
            headerShown: false,
          }}
          name="Trending"
          component={Trending}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
