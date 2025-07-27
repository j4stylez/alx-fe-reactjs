import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter'; // ✅ import it here

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={30} bio="A traveler who loves cities." />
      <Counter /> {/* ✅ use the Counter component here */}
      <Footer />
    </>
  );
}

export default App;
