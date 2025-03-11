import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLinkIcon,
  GithubIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { ProjectData } from "@/types";

export default function ProjectCard(project: ProjectData) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <Card
      key={project.title}
      className="flex flex-col border-gray-700 bg-gray-800"
    >
      <CardHeader>
        <img
          src={project.image}
          alt={project.title}
          className="h-48 w-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-gray-100">{project.title}</CardTitle>
        <CardDescription className="mt-2 text-gray-300">
          {isExpanded
            ? project.description.split("\n\n").map((paragraph, index) => (
                <p
                  className="mb-2"
                  key={index}
                  dangerouslySetInnerHTML={{
                    __html: paragraph,
                  }}
                />
              ))
            : `${project.description.slice(0, 150)}...`}
        </CardDescription>
        <Button
          variant="ghost"
          onClick={toggleDescription}
          className="mt-2 text-blue-300 transition-colors hover:bg-blue-800 hover:text-blue-100"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUpIcon className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ChevronDownIcon className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-700 text-gray-200"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {project.repository ? (
          <Button
            variant="outline"
            className="border-green-500 bg-transparent text-green-300 transition-colors hover:bg-green-800 hover:text-green-100"
          >
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <GithubIcon className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        ) : (
          <div />
        )}

        {project.url && (
          <Button
            variant="outline"
            className="border-blue-500 bg-transparent text-blue-300 transition-colors hover:bg-blue-800 hover:text-blue-100"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <ExternalLinkIcon className="mr-2 h-4 w-4" />
              Visit
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
