"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const navLinks = [
  {
    label: "Về IZONE",
    href: "#",
    sub: [
      { label: "Giới thiệu", href: "/ve-izone/gioi-thieu" },
      { label: "Tầm nhìn", href: "/ve-izone/tam-nhin" },
    ],
  },
  {
    label: "Khóa Học",
    href: "#",
    sub: [
      { label: "IELTS Foundation", href: "/khoa-hoc/foundation" },
      { label: "IELTS Advanced", href: "/khoa-hoc/advanced" },
    ],
  },
  {
    label: "Luyện Thi IELTS",
    href: "#",
    sub: [
      { label: "Listening", href: "/luyen-thi/listening" },
      { label: "Speaking", href: "/luyen-thi/speaking" },
    ],
  },
  {
    label: "The True IELTS Guide",
    href: "/true-ielts",
    sub: [],
  },
];

export default function Header() {
  return (
    <header className="w-full border-b shadow-sm">
      <div className="w-full flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="logo" width={40} height={40} />
          <span className="text-lg font-bold text-red-600">IZONE</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) =>
            link.sub.length > 0 ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-sm text-gray-700 hover:text-red-600 px-0 font-normal"
                  >
                    {link.label}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {link.sub.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-700 hover:text-red-600"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Search + Auth */}
        <div className="hidden md:flex items-center space-x-3">
          <div className="flex border rounded-md overflow-hidden">
            <Input
              type="text"
              placeholder="Tìm kiếm..."
              className="border-none"
            />
            <Button className="bg-red-600 hover:bg-red-700 text-white rounded-none rounded-r-md">
              🔍
            </Button>
          </div>
          <Button
            variant="outline"
            className="text-red-600 border-red-600 hover:bg-red-100"
          >
            Đăng nhập
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Đăng ký
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetHeader className="sr-only">
              <VisuallyHidden>
                <SheetTitle>Menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>
            <SheetContent
              side="right"
              className="w-[250px] p-4 overflow-y-auto"
            >
              <div className="space-y-4">
                <div className="flex border rounded-md overflow-hidden">
                  <Input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className="border-none"
                  />
                  <Button className="bg-red-600 text-white rounded-none rounded-r-md">
                    🔍
                  </Button>
                </div>
                <Separator />
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="block font-medium py-2 text-gray-700 hover:text-red-600"
                    >
                      {link.label}
                    </Link>
                    {link.sub.length > 0 && (
                      <ul className="ml-4 space-y-1">
                        {link.sub.map((item) => (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              className="block text-sm text-gray-500 hover:text-red-500"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <Separator />
                <Button
                  variant="outline"
                  className="w-full text-red-600 border-red-600 hover:bg-red-100"
                >
                  Đăng nhập
                </Button>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Đăng ký
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
