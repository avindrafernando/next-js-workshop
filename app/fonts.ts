import { NextFont } from "next/font";
import localFont from "next/font/local";
import { Open_Sans, Raleway } from "next/font/google";

export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const localUbuntuFont: NextFont = localFont({
  src: "../public/fonts/Ubuntu/Ubuntu-Regular.ttf",
  display: "swap",
});
