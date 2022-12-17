import './App.css';
import Profile from './Profile/Profile';
function App() {
  const StyleObject={Display:"flex", justifyContent:"space-between"}
  return (
    <div className="App" style={StyleObject}>
      <Profile 
        image="332740.jpg"
        profile="Monkey D-Luffy"
        bio="Do not give up following your dreams, that's my way,that's Luffy way"
        profession="King Of Pirates"
      />
      <Profile 
        image="Naruto.webp"
        profile="Uzumaki Naruto"
        bio="Do not let your past affect your present and future,remember this"
        profession="Hokage"
      />
      <Profile 
        image="Sans-titre-70-1-1536x1229.png"
        profile="Saitama Sensei"
        bio="Don't forget the Saturday sale at the supermarket"
        profession="Super Hero"
      />
    </div>
  );
}
export default App;
