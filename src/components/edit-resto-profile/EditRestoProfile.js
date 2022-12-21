import React from "react";
import "./EditRestoProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import axios from "axios";
import { RESTAURANT_MS_SERVER_URL } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const editRestoProfileEssentials = [
  "Restaurant Email",
  "Restaurant Name",
  "Restaurant Address",
  "Contact Number",
  "Opening Time",
  "Closing Time",
];

function customButton({ title, onclick, marginLeft = 0 }) {
  return (
    <button
      onClick={onclick}
      className='editProfile__button'
      style={{ marginLeft: `${marginLeft}` }}
    >
      {title}
    </button>
  );
}

// const handleSubmit = (event) => {
//   const inputs = document.getElementsByTagName('input');
//   let data = []
//   for (let i = 0; i < inputs.length; i++) {
//     data.push(inputs[i].value);
//   }
// }

function customInputField(label, object, setfunc, key, loggedInResto) {
  return (
    <>
      <label htmlFor='fname' className='editProfile__label'>
        {label}
      </label>
      {label === "Restaurant Email" ? (
        <input
          type='text'
          id={key}
          name={key}
          placeholder={loggedInResto ? loggedInResto[key] : ""}
          className='editProfile__inputField'
          disabled
          onChange={(e) => {
            setfunc({
              ...object,
              [key]: e.target.value,
            });
          }}
        />
      ) : (
        <input
          type='text'
          id={key}
          name={key}
          placeholder={loggedInResto ? loggedInResto[key] : ""}
          className='editProfile__inputField'
          onChange={(e) => {
            setfunc({
              ...object,
              [key]: e.target.value,
            });
          }}
        />
      )}
    </>
  );
}

function EditRestoProfile(props) {
  const loggedInResto = JSON.parse(localStorage.getItem("restaurant_data"));
  console.log(loggedInResto);
  const [bodyEssential, setbodyEssential] = useState({
    restaurant_id: loggedInResto ? loggedInResto.restaurent_id : "",
    email: loggedInResto ? loggedInResto.email : "",
    restaurant_name: loggedInResto ? loggedInResto.restaurant_name : "",
    address: loggedInResto ? loggedInResto.address : "",
    contact_number: loggedInResto ? loggedInResto.contact_number : "",
    opening_time: loggedInResto ? loggedInResto.opening_time : "",
    closing_time: loggedInResto ? loggedInResto.closing_time : "",
  });

  return (
    <div className='editProfile'>
      <h1 className='editProfile__heading'>Edit Restaurant Profile</h1>
      <div className='editProfile__images'>
        <div className='editProfile__profilePicture'>
          {/* <img src="" alt="" /> */}
          <a href='/#' className='editProfile__editProfilePicture'>
            <EditIcon /> edit
          </a>
        </div>
        <a href='/#' className='editProfile__editCoverPicture'>
          <EditIcon />
        </a>
      </div>
      <div className='editProfile__form'>
        <h1 className='editProfile__subheading'>Essential Details</h1>
        {editRestoProfileEssentials.map((editProfileEssential, index) =>
          customInputField(
            editProfileEssential,
            bodyEssential,
            setbodyEssential,
            Object.keys(bodyEssential)[index + 1],
            loggedInResto
          )
        )}

        <div className='editProfile__form__buttons d-flex flex-column flex-md-row justify-content-md-between'>
          {customButton({
            title: "Change password",
            onclick: () => console.log("changePassword"),
          })}
          <div className='editProfile__form__buttons__right mt-1 mt-md-0 d-flex'>
            {customButton({
              title: "Cancel",
              onclick: () => console.log("cancel"),
            })}
            {customButton({
              title: "Save Changes",
              marginLeft: "12px",
              onclick: async () => {
                const loggedInResto = JSON.parse(
                  localStorage.getItem("restaurant_data")
                );
                if (loggedInResto) {
                  const newUserdata = {
                    ...bodyEssential,
                  };
                  let isUpdated = false;
                  // Essential and Non Essential
                  await axios
                    .put(
                      `${RESTAURANT_MS_SERVER_URL}/restaurant/${loggedInResto.restaurant_id}`,
                      {
                        email: loggedInResto.email,
                        password: loggedInResto.password,
                        new_data: newUserdata,
                      },
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    )
                    .then((res) => {
                      if (res.status === 200) {
                        isUpdated = true;
                      }
                      console.log(res.data);
                    })
                    .catch((err) => {
                      console.log(err);
                    });

                  console.log(isUpdated);
                  // reset localstorage from updated db
                  if (isUpdated) {
                    const email = loggedInResto.email;
                    const password = loggedInResto.password;
                    const userLogin = {
                      email,
                      password,
                    };
                    axios
                      .post(
                        `${RESTAURANT_MS_SERVER_URL}/login`,
                        userLogin,
                        { data: JSON.stringify(userLogin) },
                        { headers: { "Content-Type": "application/json" } }
                      )
                      .then((response) => {
                        if (response.status === 200) {
                          localStorage.setItem(
                            "restaurant_data",
                            JSON.stringify({
                              email: email,
                              password: password,
                              ...response.data,
                            })
                          );
                          window.location.reload();
                        }
                      })
                      .catch((err) => {
                        if (err.status === 404) {
                          // alert("Restaurant not found");
                          toast.error("Restaurant Not Found", {
                            position: "top-center",
                            autoClose: 4000,
                          });
                        } else if (err.status === 401) {
                          // alert("Invalid password");
                          toast.error("Invalid Password", {
                            position: "top-center",
                            autoClose: 4000,
                          });
                        }
                      });
                  }
                }
              },
            })}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default EditRestoProfile;
