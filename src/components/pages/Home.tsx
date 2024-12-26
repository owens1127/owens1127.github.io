"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { jobs } from "@/data/jobs";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  FolderKanban,
  MapPin,
} from "lucide-react";
export default function Page() {
  return (
    <div className="flex flex-grow flex-col bg-gray-900 p-6 text-gray-100 md:p-16">
      <main className="flex-grow space-y-12 md:space-y-24">
        <div className="text-center">
          <h1 className="mb-4 text-5xl font-bold">Hi, I'm Owen 👋</h1>
          <p className="mb-6 text-xl">I build software to solve problems</p>
          <p className="mb-4 text-lg">
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
        </div>
        <div className="text-center">
          <h2 className="mb-10 text-center text-3xl font-bold">
            Work Experience
          </h2>
          <div className="relative mx-auto max-w-min">
            <Separator
              orientation="horizontal"
              className="absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block"
            />
            <Separator
              orientation="vertical"
              className="absolute bottom-0 left-1/2 top-0 block -translate-x-1/2 md:hidden"
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-12">
              {jobs.map((job, index) => (
                <Card
                  key={index}
                  className={`w-72 border-gray-700 bg-gray-800 ${
                    index === 0 ? "border-blue-300" : ""
                  }`}
                >
                  <CardHeader className="p-4 md:p-6">
                    <CardTitle className="text-lg text-blue-200">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-md text-gray-300">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0 md:p-6">
                    <p className="text-sm text-gray-400">{job.dateRange}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
