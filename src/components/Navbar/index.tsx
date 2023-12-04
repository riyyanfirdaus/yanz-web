"use client";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { Link } from "react-scroll";
import { usePathname } from "next/navigation";
import { DarkModeToggle } from "..";
import { Cross1Icon, TextAlignJustifyIcon } from "@radix-ui/react-icons";

function Navbar() {
  const pathname = usePathname();
  const navigation = [
    { label: "About", page: "about" },
    { label: "Projects", page: "projects" },
    { label: "Contact", page: "contact" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} className="bg-white dark:bg-gray-900 shadow border-b fixed top-0 z-50 mx-auto w-full py-4 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <CollapsibleTrigger className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            {open ? <Cross1Icon className="block h-6 w-6" aria-hidden="true" /> : <TextAlignJustifyIcon className="block h-6 w-6" aria-hidden="true" />}
            {/* {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />} */}
          </CollapsibleTrigger>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link to="hero" activeClass="active" spy={true} smooth={true} offset={-100} duration={500} className="text-primary text-2xl font-bold">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Riyyan Firdaus</h2>
              </div>
            </Link>
          </div>
          <div className="hidden sm:mx-auto sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  to={item.page}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="text-primary hover:bg-primary/90 hover:text-primary-foreground rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
          <DarkModeToggle />
        </div>
      </div>

      <CollapsibleContent className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link key={item.label} to={item.page} activeClass="active" spy={true} smooth={true} offset={-150} duration={500} className="bg-primary text-primary-foreground hover:bg-primary/90 block rounded-md px-3 py-2 text-sm font-medium">
              {item.label}
            </Link>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default Navbar;
