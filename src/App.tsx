import './App.css';

// React Router Hooks
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccountPage from './pages/createaccount/CreateAccountPage';

// Context Provider Import
import { PaymentProvider } from './context/PaymentContext';

// Pages Import
import Dashboard from './pages/dashboard/Dashboard';
import MainDashboard from './pages/dashboard/MainDashboard';
import Modules from './pages/modules/Modules';
import Quiz from './pages/quiz/Quiz';
import MockExam from './pages/mockexams/MockExams';
import Community from './pages/community/Community';
import Notification from './pages/notification/Notification';

import Profile from './pages/profile/Profile';
import ProgressSummary from './pages/profile/ProgressSummary';
import Activity from './pages/profile/Activity';
import Bookmarks from './pages/profile/Bookmarks';

import Settings from './pages/profile/settings/Settings';
import PersonalDetails from './pages/profile/settings/PersonalDetails';
import NotificationSettings from './pages/profile/settings/NotificationSettings';
import Privacy from './pages/profile/settings/Privacy';
import Help from './pages/profile/settings/Help';
import AccountManagement from './pages/profile/settings/AccountManagement';

import CourseSelection from './pages/payment/CourseSelection';
import PricePlan from './pages/payment/PricePlan';

// Components
import ScrollToTop from './components/ScrollToTop';
import IndividualPayment from './pages/payment/IndividualPayment';

function App() {
  return (
    <BrowserRouter>
      <PaymentProvider>
        <ScrollToTop />
        <Routes>
          {/* Keep both versions' routes */}
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/" element={<CourseSelection />} />

          {/* Dashboard page and all its sub pages */}
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<MainDashboard />} />
            <Route path="dashboard" element={<MainDashboard />} />
            <Route path="modules" element={<Modules />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="mock-exam" element={<MockExam />} />
            <Route path="community" element={<Community />} />
            <Route path="notification" element={<Notification />} />

            {/* Profile page and its sub pages */}
            <Route path="profile" element={<Profile />}>
              <Route index element={<ProgressSummary />} />
              <Route path="progress-summary" element={<ProgressSummary />} />
              <Route path="activity" element={<Activity />} />
              <Route path="bookmarks" element={<Bookmarks />} />
              <Route path="settings" element={<Settings />}>
                <Route path="personal-details" element={<PersonalDetails />} />
                <Route path="notification-settings" element={<NotificationSettings />} />
                <Route path="privacy" element={<Privacy />} />
                <Route path="help" element={<Help />} />
                <Route path="account-management" element={<AccountManagement />} />
              </Route>
            </Route>
          </Route>

          <Route path="/course" element={<CourseSelection />} />
          <Route path="/price" element={<PricePlan />} />
          <Route path="/payment" element={<IndividualPayment />} />
        </Routes>
      </PaymentProvider>
    </BrowserRouter>
  );
}

export default App;
