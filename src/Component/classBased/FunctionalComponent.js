import { useState } from "react";
import "../../index.css";

function FunctionalUserNameChkr(props) {
  const [state, setState] = useState({ ...props });
  const [rows, setRows] = useState(null);
  const [profile, setProfile] = useState({});
  const [followers, setFollowers] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    if (e.target.id === "userName") {
      setState({ ...state, userName: e.target.value });
    }
  };
  const handleClick = (e) => {
    var usersArr = state.usersObjs;
    var obj = {};
    var status = false;

    getAPIData(state.userName);
    getProfile(state.userName);
  };

  const getAPIData = (userName) => {
    fetch(`https://api.github.com/users/${userName}/followers`)
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API ");
        console.log(json);
        setRows(json);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const getProfile = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API ");
        console.log(json);
        setProfile(json);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const ProfileIcon = ({
    avatar_url,
    name,
    company,
    followers,
    public_repos,
    location,
  }) => {
    return (
      <>
        {/* <div class="d-flex justify-content-center h-100">
			<div class="image_outer_container">
				<div class="green_icon"></div>
				<div class="image_inner_container">
					<img src={avatar_url}/>
				</div>
			</div>
		</div> */}

        <div class="container d-flex justify-content-center align-items-center">
          <div class="card">
            <div class="upper">
              {" "}
              <img
                src="https://i.imgur.com/Qtrsrk5.jpg"
                class="img-fluid"
              />{" "}
            </div>
            <div class="user text-center">
              <div class="profile">
              <div class="d-flex justify-content-center h-100">
			<div class="image_outer_container">
				<div class="green_icon"></div>
				<div class="image_inner_container">
					<img src={avatar_url}/>
				</div>
			</div>
		</div>
              </div>
            </div>
            <div class="mt-5 text-center">
              <h4 class="mb-0">{name}</h4>{" "}
              <span class="text-muted d-block mb-2">{company}</span>{" "}
              <button class="btn btn-primary btn-sm follow">Follow</button>
              <div class="d-flex justify-content-between align-items-center mt-4 px-4">
                <div class="stats">
                  <h6 class="mb-0">Followers</h6> <span>{followers}</span>
                </div>
                <div class="stats">
                  <h6 class="mb-0">Public Repos</h6> <span>{public_repos}</span>
                </div>
                <div class="stats">
                  <h6 class="mb-0">Location</h6> <span>{location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container">
        <span>{error & ""}</span>
        <input
          type="text"
          onChange={handleChange}
          id="userName"
          name="userName"
        ></input>
        <input
          type="submit"
          onClick={handleClick}
          value="Check The Avaliability"
          id="btnChk"
          name="btnChk"
        ></input>

        <ProfileIcon
          name={profile?.name}
          company={profile?.company}
          followers={profile?.followers}
          public_repos={profile?.public_repos}
          location={profile?.location}
          avatar_url={profile?.avatar_url}
        ></ProfileIcon>
      </div>
    </>
  );
}

export default FunctionalUserNameChkr;
