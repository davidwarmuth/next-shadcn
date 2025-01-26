import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import { navigationItems } from "@/config/site";

export function Header() {
  return (
    <header className="py-4 border-b">
      <nav className="container flex gap-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-lg font-semibold">
            <Link href="/">Next-Shadcn</Link>
          </h1>
          <ul className="hidden md:flex gap-10 font-medium">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex gap-4">
          <ThemeToggle />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-8">
              <SheetHeader>
                <SheetTitle>
                  <SheetClose asChild>
                    <Link href="/">Next-Shadcn</Link>
                  </SheetClose>
                </SheetTitle>
                <SheetDescription>
                  A NextJS starter template with shadcn/ui and Tailwind CSS.
                </SheetDescription>
              </SheetHeader>
              <Separator />
              <ul className="flex flex-col gap-8 font-medium">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-4">
                <SheetClose asChild>
                  <div>
                    <ThemeToggle />
                  </div>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
