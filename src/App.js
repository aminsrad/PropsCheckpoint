import "./App.css";
import Profile from "./profile/profile";
function App() {
  let fullName = "amine";
  let bio = "biobio";
  let profession = "IT";
  const handleName = ({ fullName }) => {
    alert(`${fullName}`);
  };

  return (
    <div className="App">
      <Profile
        handleName={handleName({ fullName })}
        fullName={fullName}
        bio={bio}
        profession={profession}
        image={
          <img
            src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="imagee"
          />
        }
      />
    </div>
  );
}

export default App;
