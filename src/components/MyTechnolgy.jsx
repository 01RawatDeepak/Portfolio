import { OrbitingCircles } from "./OrbitingCircles";

export function MyTechnolgy() {
  const skills = [
    "assets/logos/css3.svg",
    "assets/logos/git.svg",
    "assets/logos/html5.svg",
    "assets/logos/javascript.svg",
    "assets/logos/react.svg",
    "assets/logos/tailwindcss.svg",
    "assets/logos/vitejs.svg",
    "assets/logos/laravel-2.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`${skill}`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`${skill}`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
