//
import React, { useState, useEffect } from "react";
import NoAuth from "./api/NoAuthRoutes";
import GoogleUpload from "./api/GoogleUpload";
import Cookies from "js-cookie";
import axios from "axios";
import jwtDecode from "jwt-decode";
import config from "./api/Config";

export const Context = React.createContext();

export const Provider = (props) => {
  const noAuthRoutes = new NoAuth();
  const googleUpload = new GoogleUpload();
  // create a userCookies instance in the state and set it to get the cookies
  const [userCookies] = useState(Cookies.get("userCookies"));
  // create an authenticatedUser instance in state and set it to userCookies if there any
  // else set it to null
  const [authenticatedUser, setAuthenticatedUser] = useState(
    userCookies ? JSON.parse(userCookies) : null
  );

  //   when the component mounts
  // setup Cookies instance for authenticated user
  useEffect(() => {
    if (authenticatedUser) {
      Cookies.set("userCookies", JSON.stringify(authenticatedUser), {
        secure: true,
        sameSite: "Lax",
      });
    }
  }, [authenticatedUser]);

  useEffect(() => {
    setUser(async () => {
      try {
        const res = await axios.post(`${config.apiBaseUrl}/refresh`, {
          token: authenticatedUser.refreshToken,
          tokenType: "Bearer",
        });

        setAuthenticatedUser({
          ...authenticatedUser,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        });
        return res.data;
      } catch (e) {
        if (e.response?.status === 403) {
          setAuthenticatedUser(null);
          Cookies.remove("userCookies");
          window.location.href = "/signin";
        }
        console.log(e);
      }
    });
  }, []);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodeToken = jwtDecode(authenticatedUser.accessToken);
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        const data = await Promise.resolve(user).then((res) => res);
        config.headers["Authorization"] = "Bearer " + data?.accessToken;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  //   create a signIn async function with emailAddress and password as params
  const signIn = async (emailAddress, password) => {
    //   create a user async function waiting to getUser
    const user = await noAuthRoutes.getUser(emailAddress, password);
    // if the user is not null
    if (user !== null) {
      // set password to the password from user method
      user.password = password;
      //   set the authenticatedUser state to user data
      setAuthenticatedUser(user);
    }
  };

  // create project
  const createProject = async (project) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/projects`,
        project,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  //create profiles
  const createAvarta = async (avartas) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/avartas`,
        avartas,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create personal statement
  const createPersonalStatement = async (personalStatement) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/personalStatement`,
        personalStatement,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create methodology
  const createMethodology = async (methodology) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/methodology`,
        methodology,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create technologies
  const createTechnologies = async (technologies) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/technologies`,
        technologies,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create certifications
  const createCertifications = async (certifications) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/certifications`,
        certifications,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create badges
  const createBadges = async (badges) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/badges`,
        badges,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create experience
  const createExperience = async (experience) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/experiences`,
        experience,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create resume
  const createResume = async (resume) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/resumes`,
        resume,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create socialMedia
  const createSocialMedia = async (socialMedia) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/socials`,
        socialMedia,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // create message
  const createMessage = async (message) => {
    try {
      // create a response constant to save the data that POST to the api
      const response = await axiosJWT.post(
        `${config.apiBaseUrl}/messages`,
        message,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the post was successful
      if (response.status === 201) {
        // return nothing
        return [];
        // else if the post had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // delete message
  const deleteMessage = async (id) => {
    try {
      // create a response constant to save the data that DELETE from the api
      const response = await axiosJWT.delete(
        `${config.apiBaseUrl}/messages/${id}`,
        {
          headers: {
            Authorization: `Bearer ${authenticatedUser.accessToken}`,
          },
        }
      );
      // if the delete was successful
      if (response.status === 204) {
        // return nothing
        return [];
        // else if the delete had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  // delete message
  const getSignOut = async () => {
    try {
      // create a response constant to save the data that DELETE from the api
      const response = await axiosJWT.post(`${config.apiBaseUrl}/signout`, {
        token: authenticatedUser.refreshToken,
        tokenType: "Bearer",
      });
      // if the delete was successful
      if (response.status === 204) {
        // return nothing
        return [];
        // else if the delete had a problem
      } else if (response.status === 400) {
        // return a response as JSOn then
        return response;
        // else throw any other errors from the api
      }
    } catch (e) {
      throw new Error("Something went wrong");
    }
  };

  //   create a signOut function
  const signOut = async () => {
    const user = await getSignOut();
    if (!user) {
      // set the authenticated user to null and remove the cookies
      setAuthenticatedUser(null);
      Cookies.remove("userCookies");
    }
  };

  return (
    <Context.Provider
      value={{
        deleteMessage,
        createMessage,
        createAvarta,
        createBadges,
        createCertifications,
        createExperience,
        createMethodology,
        createPersonalStatement,
        createProject,
        createResume,
        createSocialMedia,
        createTechnologies,
        signOut,
        authenticatedUser,
        signIn,
        googleUpload,
        noAuthRoutes,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
