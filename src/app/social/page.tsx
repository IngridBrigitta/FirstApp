import Image from "next/image";
import { Metadata } from "next";
import { H1 } from "../../components/ui/H1";
import { H2 } from "../../components/ui/H2";
import { H3 } from "../../components/ui/H3";
import me from "../assets/me.png";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Social Media",
}

export default function Home() {
    return (
        <section className="space-y-6">
            <div className="space-y-3">
                <H1>Social Media</H1>
            </div>
            <div className="space-y-3">
                <H2>My channels</H2>
                <p>
                    I create educational videos that make learning math fun and easy. 
                    Whether you are a student looking to improve your math skills or someone who enjoys solving mathematical problems, 
                    my channel has something for everyone.
                </p>
                <H2>Links to all my social accounts:</H2>
                <ul className="list-inside list-disc">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100009923856132"
                        className="text-primary hover:underline">Facebook</a>
                    </li>
                </ul>
                <H2>Links to my videos:</H2>
                <ul className="list-inside list-disc">
                    <li>
                        <a href="https://www.youtube.com/watch?v=s76wY6_1ZvA"
                        className="text-primary hover:underline">Permutation</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=jp-gEoQh9y4"
                        className="text-primary hover:underline">Number systems</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=9IFVQFEe2Sw"
                        className="text-primary hover:underline">Creazy numbers</a>
                    </li>
                </ul>
            </div>
        </section>
    )
}