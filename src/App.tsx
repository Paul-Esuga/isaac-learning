import './App.css';

// React Router Hooks
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateAccountPage from './pages/createaccount/CreateAccountPage';

// Context Provider Import
import { PaymentProvider } from './context/PaymentContext';
import MockExamContext from './context/MockExamContext';

// Context Apis

// Pages Import
import Dashboard from './pages/dashboard/Dashboard';
import MainDashboard from './pages/dashboard/MainDashboard';
import Modules from './pages/modules/Modules';
import Quiz from './pages/quiz/Quiz';

import MockExam from './pages/mockexams/MockExams';
import CipmMockExams from './pages/mockexams/mock-exam-sub-pages/CipmMockExams';


import Community from './pages/community/Community';

import Notification from './pages/notification/Notification';
import All from './pages/notification/all/All';
import Read from './pages/notification/read/Read';
import Unread from './pages/notification/unread/Unread';

import Profile from './pages/profile/Profile';
import ProgressSummary from './pages/profile/ProgressSummary';
import Activity from './pages/profile/Activity';
import Bookmarks from './pages/profile/Bookmarks';

import Settings from './pages/profile/settings/Settings';
import PersonalDetails from './pages/profile/settings/PersonalDetails';
import NotificationSettings from './pages/profile/settings/NotificationSettings';

import Privacy from './pages/profile/settings/Privacy';
import CommentBoundaries from './pages/comment-boundaries/CommentBoundaries';

import Help from './pages/profile/settings/Help';
import AccountManagement from './pages/profile/settings/AccountManagement';

import CourseSelection from './pages/payment/CourseSelection';
import PricePlan from './pages/payment/PricePlan';

// Components
import ScrollToTop from './components/ScrollToTop';
import IndividualPayment from './pages/payment/IndividualPayment';
import Otp from './pages/createaccount/Otp';
import ViewComment from './pages/community/ViewComment';
import PostQuestion from './pages/community/PostQuestion';
import Otp1 from './pages/createaccount/Otp1';


function App() {
  return (
    <BrowserRouter>
      <PaymentProvider>
        <MockExamContext>
          <ScrollToTop />
          <Routes>
            {/* Keep both versions' routes */}
            <Route path="/create-account" element={<CreateAccountPage />} />

            <Route path="/otp" element={<Otp />} />
            <Route path="/" element={<CourseSelection />} />


            {/* Dashboard page and all its sub pages */}
            <Route path="dashboard" element={<Dashboard />}>
              <Route index element={<MainDashboard />} />
              <Route path="dashboard" element={<MainDashboard />} />
              <Route path="modules" element={<Modules />} />
              <Route path="quiz" element={<Quiz />} />

              <Route path="mock-exam" element={<MockExam />}>
                <Route path='cipm-mock-exam' element={<CipmMockExams />} />
              </Route>

              <Route path="community" element={<Community />}>
                <Route path="view-comment/:id" element={<ViewComment />} />
                <Route path='post-question' element={<PostQuestion />} />
              </Route>
              <Route path="notification" element={<Notification />}>
                <Route index element={<All />} />
                <Route path='all' element={<All />} />
                <Route path='unread' element={<Unread />} />
                <Route path='read' element={<Read />} />
              </Route>

              {/* Profile page and its sub pages */}
              <Route path="profile" element={<Profile />}>
                <Route index element={<ProgressSummary />} />

                <Route path='progress-summary' element={<ProgressSummary />} />
                <Route path='activity' element={<Activity />} />
                <Route path='bookmarks' element={<Bookmarks />} />
                <Route path='settings' element={<Settings />} >
                  <Route path='personal-details' element={<PersonalDetails />} />
                  <Route path='notification-settings' element={<NotificationSettings />} />

                  <Route path='privacy' element={<Privacy />}>
                    <Route path='comment-boundaries' element={<CommentBoundaries />} />
                  </Route>

                  <Route path='help' element={<Help />} />
                  <Route path='account-management' element={<AccountManagement />} />

                </Route>
              </Route>
            </Route>

            <Route path="/course" element={<CourseSelection />} />
            <Route path="/price" element={<PricePlan />} />
            <Route path="/payment" element={<IndividualPayment />} />
          </Routes>
        </MockExamContext>
      </PaymentProvider>
    </BrowserRouter>
  );
}

export default App;
