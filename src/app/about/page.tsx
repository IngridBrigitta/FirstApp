import Image from "next/image";
import { Metadata } from "next";
import { H1 } from "../../components/ui/H1";
import { H2 } from "../../components/ui/H2";
import me from "../assets/me.png";
import { Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "About Me"
}

export default function Home() {
  return (
    <section className="space-y-16 ">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">About Me</H1>
        </div>
      </section>
      <section className="space-y-2">
        <H2>Who am I?</H2>
        <p>
          My name is Ingrid Ivacson. I live in Romania and hold dual citizenship. My native language is Hungarian. 
          I have been working as a teacher for almost two years. 
          I teach computer science to students in grades 5 to 8, and I have also taught or currently teach physics, mathematics, and chemistry. 
          In addition to my work, I am also a student, currently in my final year of a master&apos;s program at Sapientia University.
        </p>
      </section>
      <hr className="border-muted" />
      <section>
        <section className="space-y-3">
            <H2>Skills</H2>
            <p>
                As a dedicated teacher for grades 5-8, I bring a comprehensive set of skills to the classroom, 
                particularly in the fields of computer science and physics:
                <ul className="list-inside list-disc">
                    <li><b>Subject Matter Expertise: </b>Deep knowledge of computer science and physics, 
                        allowing me to teach complex concepts in a way that is accessible and engaging for young students.</li>
                    <li><b>Curriculum Development:</b>Experience in designing and implementing effective lesson plans that align 
                        with educational standards and cater to the diverse learning needs of students.</li>
                    <li><b>Classroom Management:</b>Strong ability to maintain an organized and focused classroom environment, 
                        ensuring that all students can participate and learn effectively.</li>
                    <li><b>Technology Integration:</b>Proficient in incorporating technology and digital tools 
                        into the curriculum to enhance learning experiences and foster students&apos; digital literacy.</li>
                </ul>
            </p>
        </section>
        <hr className="border-muted" />
        <section className="space-y-3">
            <H2>Side Projects</H2>
            <p>
                Besides teaching, I have already created several websites:
                <ul className="list-inside list-disc">
                    <li>Teaching Graph Algorithms</li>
                    <li>Mathematics for Grades 5-6</li>
                    <li>Book Corner</li>
                    <li>High School Exam Preparation</li>
                    <li>School newspaper</li>
                </ul>
            </p>
        </section>      
        <hr className="border-muted" />
        <section className="space-y-3">
            <H2>Hobbies</H2>
            <p>
                In my free time, I enjoy reading; I gladly read almost any type of book. 
                Reading is an important part of my life, and as a result, I started writing stories myself. 
                I love listening to music. Music helps me relax, and I also enjoy studying or working while listening to music 
                because it helps me concentrate better. On weekends, I like to bake desserts.
            </p>
        </section>
      </section>
    </section>
  );
}
