import { HoverEffect } from "../ui/HoverEffect";
export default function Skills() {
    return (
        <section id="skills" className="p-8 max-w-[1400px] mx-auto">
            <h1 className='text-white uppercase font-semibold text-2xl'>Skills</h1>
            <HoverEffect items={skills} className="" />
        </section>
    );
}
export const skills = [
    {
        title: "HTML5",
        image: "https://img.icons8.com/color/96/000000/html-5.png"
    },
    {
        title: "CSS3",
        image: "https://img.icons8.com/color/96/000000/css3.png"
    },
    {
        title: "JavaScript",
        image: "https://img.icons8.com/color/96/000000/javascript--v1.png"
    },
    {
        title: "React.js",
        image: "https://img.icons8.com/color/96/000000/react-native.png"
    },
    {
        title: "Node.js",
        image: "https://img.icons8.com/color/96/000000/nodejs.png"
    },
    {
        title: "Express.js",
        image: "https://img.icons8.com/fluency/48/express-js.png"
    },

    {
        title: "MongoDB",
        image: "https://img.icons8.com/color/96/000000/mongodb.png"
    },

    {
        title: "Bootstrap",
        image: "https://img.icons8.com/color/96/000000/bootstrap.png"
    },
    {
        title: "Next.js",
        image: "https://img.icons8.com/color/48/nextjs.png"

    },
    {
        title: "Firebase",
        image: "https://img.icons8.com/color/96/000000/firebase.png"
    },
    {
        title: "Figma",
        image: "https://img.icons8.com/color/96/000000/figma--v1.png"
    },
    {
        title: "GSAP",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LoGVASma67wDkLNZB4a2XKUPyAGa1gmlBg&usqp=CAU"
    },
    {
        title: "Framer Motion",
        image: "data:image/jpeg;base64,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"
    },
    {
        title: "Java",
        image: "https://img.icons8.com/color/512/java-coffee-cup-logo.png"
    },
    {
        title: "Tailwind CSS",
        image: "https://img.icons8.com/color/96/000000/tailwindcss.png"
    },
    {
      title: "Python",
      image: 'https://img.icons8.com/win10/512/FFFFFF/python.png'
  },
    {
        title: "EJS",
        image: "https://img.icons8.com/?size=192&id=Pxe6MGswB8pX&format=png"
    },
    {
        title: "Supabase",
        image: "https://img.icons8.com/color/512/supabase.png"
    },
    {
      title: "Mysql",
      image: "/msql.png"
  },
    {
        title: "Typescript",
        image: "/ts.png"
    },
    
    
];

