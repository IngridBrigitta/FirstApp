import Image from "next/image";
import { Metadata } from "next";
import { H1 } from "../../components/ui/H1";
import { H2 } from "../../components/ui/H2";
import { H3 } from "../../components/ui/H3";

export const metadata: Metadata = {
  title: "Privacy Policy",
}

export default function Home() {
    return (
        <section className="space-y-6">
            <div className="space-y-3">
                <H1>Privacy Policy</H1>
                <p>Last Update: May 2024</p>
            </div>
            <div className="space-y-3">
                <H2>Introduction</H2>
                <p>
                    Welcome to my website, a platform designed to help users view my resume and get information about me. 
                    This privacy policy outlines how we collect, use and protect data.
                </p>
                <H2>Information We Collect</H2>
                <p>
                    The site does not collect data about visitors, and you do not need to create an account to view the site. 
                    We do not use cookies.
                </p>
                <H3>1. Log Files</H3>
                <p>
                    Like many other websites, this site uses log files to collect information about your visits to our site. 
                    The information inside the log files includes:
                        <ul className="list-inside list-disc">
                            <li>Browser type</li>
                            <li>Date and time stamp</li>
                            <li>Referring and exit page</li>
                            <li>Number of clicks</li>
                        </ul>
                        This information is used to analyze trends, administer the site, track user movement around the site, 
                        and gather demographic information.
                </p>
                <H3>2. Contact Information</H3>
                <p>
                    If you have any questions or concerns about this Privacy Policy or our data practices, 
                    please feel free to contact us:
                        <ul className="list-inside list-disc">
                            <li><b>Email:</b> ingridivacson@gmail.com</li>
                            <li><b>Phone:</b> 0755794105</li>
                        </ul>
                </p>
                
            </div>
        </section>
    )
}