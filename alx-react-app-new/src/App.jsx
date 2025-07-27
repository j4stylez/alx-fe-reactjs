import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ Make sure this import exists

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={30} bio="A traveler who loves cities." />
      <Counter /> {/* ✅ Make sure this JSX line exists */}
      <Footer />
    </>
  );
}

export default App;
