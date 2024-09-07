import React from "react";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { FaBars } from "react-icons/fa";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Luxury",
    href: "/car/luxury",
    description: "Expensive, premium, stylish rides.",
  },
  {
    title: "SUV",
    href: "/car/suv",
    description: "Spacious, versatile, off-road capable.",
  },
  {
    title: "Electric",
    href: "/car/electric",
    description: "Eco-friendly, battery-powered, quiet.",
  },
  {
    title: "Sports",
    href: "/car/sports",
    description: "Fast, sleek, high-performance cars.",
  },
  {
    title: "Sedan",
    href: "/car/sedan",
    description: "Affordable, family-friendly, fuel-efficient.",
  },
  {
    title: "Convertible",
    href: "/car/convertible",
    description: "Open-top, fun, stylish drives.",
  },
];

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 right-0 left-0 top-0 absolute z-50 px-2 md:px-12 lg:px-24">
      <div className="flex justify-center items-center gap-x-2">
        <div className="block md:hidden lg:hidden">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>
                <FaBars className="text-white w-6 h-6" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Home</MenubarItem>
                <MenubarSeparator />
                <MenubarSub>
                  <MenubarSubTrigger>Cars</MenubarSubTrigger>
                  <MenubarSubContent>
                    {components.map((car, index) => (
                      <MenubarItem key={index}>{car.title}</MenubarItem>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
                <MenubarSeparator />
                <MenubarItem>History</MenubarItem>
                <MenubarItem>Production</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <h1 className="text-3xl text-yellow-700 font-bold">Reaver</h1>
      </div>
      <div className="hidden md:block lg:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-x-8 ">
            <NavigationMenuItem className="font-medium text-white text-base">
              <Link href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white text-base font-medium">
                Cars
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[300px] ">
                  {components.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="text-base font-medium text-black hover:bg-black/40 p-1 rounded transition"
                    >
                      {component.title}
                    </Link>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="font-medium text-white text-base">
              <Link href="/history">History</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="font-medium text-white text-base">
              <Link href="/history">Production</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="p-4 ">
        <Button>Contact us</Button>
      </div>
    </div>
  );
};

export default Navbar;
