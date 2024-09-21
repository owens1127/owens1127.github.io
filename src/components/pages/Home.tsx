import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  FolderKanban,
  MapPin,
} from "lucide-react";

export default function Component() {
  return (
    <div className="flex flex-grow flex-col bg-gray-900 text-gray-100">
      <main className="flex-grow">
        <section className="py-20 text-center">
          <h1 className="mb-4 text-5xl font-bold">Hi, I'm Owen 👋</h1>
          <p className="mb-4 text-xl">
            Full-Stack Developer, Problem Solver, Tech Enthusiast
          </p>
          <p className="mb-8 text-lg">
            <span className="font-semibold text-blue-200">
              Northeastern University
            </span>
            , Class of 2025
          </p>
          <div className="mb-8 flex items-center justify-center gap-2">
            <MapPin className="h-8 w-8 text-blue-400" />
            <p className="text-lg italic">Boston, Massachusetts</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <a href="/#/resume" className="flex items-center">
                <FileText className="mr-2 h-4 w-4" /> Resume
              </a>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">
              <a href="/#/projects" className="flex items-center">
                <FolderKanban className="mr-2 h-4 w-4" /> Projects
              </a>
            </Button>
            <Button className="bg-sky-600 hover:bg-sky-700">
              <a
                href="https://www.linkedin.com/in/owen-s-simpson/"
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-4 w-4" /> Linkedin
              </a>
            </Button>
            <Button className="bg-gray-700 hover:bg-gray-600">
              <a
                href="https://github.com/owens1127"
                className="flex items-center"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              className="bg-red-600 hover:bg-red-700"
              onClick={() =>
                window.alert(atob("b3dlbnNpbXBzb24xMTI3QGdtYWlsLmNvbQ=="))
              }
            >
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
