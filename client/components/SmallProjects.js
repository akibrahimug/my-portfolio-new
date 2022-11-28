import React, { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Context } from "../pages/Context";

export default function SmallProjects() {
  const { backend } = useContext(Context);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    backend.getProjects().then((res) => {
      setProjects(res);
    });
  }, []);

  return (
    <div className="grid lg:grid-cols-3 gap-8 place-content-center mt-20">
      {projects.map((project, i) => (
        <Card className="mb-4 shadow-xl relative" key={i}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={project.projectTitle}
            subheader={new Date(project.createdAt).toDateString()}
          />
          <CardMedia
            component="img"
            height="190"
            image={project.pictureUrl}
            alt={project.projectTitle}
            className="w-42 max-h-64 hover:scale-105 transition-all duration-500 cursor-pointer"
            onClick={() => window.open(project.liveSiteUrl)}
          />
          <CardContent className="">
            <Typography variant="body2" color="text.secondary">
              {project.projectDescription}
            </Typography>
          </CardContent>
          <div className="flex m-4 ">
            <button
              className={`${
                project.projectTitle === "CHICOTÁS: STRETCHES OF LIFE"
                  ? "disabled"
                  : ""
              }bg-red-500 p-3 px-4 rounded-md text-white `}
            >
              <a href={project.githubUrl}>Project Code</a>
            </button>
          </div>
          <p
            className={`${
              project.projectTitle === "Airbnb-clone" ? "visible" : "hidden"
            } text-sm border-2 border-red-500 rounded-tl-md rounded-br-md p-1 px-2 text-red-500 absolute w-40 bottom-0 right-0 font-bold`}
          >
            Some browsers might clasify this site as unsafe to visit.
          </p>
        </Card>
      ))}
    </div>
  );
}
