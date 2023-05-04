export type Project = {
  title: string;
  link: string;
  description: string;
  image: string;
};

export const hobbyList: Project[] = [
  {
    title: "Circular spinning text",
    link: "https://codepen.io/mlemzing/pen/YzJxOQJ",
    image: "/images/circular-text.png",
    description: "Short demo of circular spinning text as seen on my homepage.",
  },
  {
    title: "Fox Camera Test",
    link: "https://fox-camera-test.vercel.app/",
    image: "/images/fox-camera-test.png",
    description:
      "Small test on fox models to look at camera with Orbit Controls.",
  },
  {
    title: "Spinning sakura petals",
    link: "/bankai",
    image: "/images/sakura.png",
    description:
      "Practice on writing my own shaders using GLSL and animating them.",
  },
  {
    title: "Parallax Scene with Moving Camera in 3D (WIP)",
    link: "/parallax3d",
    image: "/images/parallax3d.png",
    description:
      "Experimental playground to test parallax components in 3D instead of react-spring library.",
  },
];

export const professionalList: Project[] = [
  {
    title: "SupportGoWhere",
    link: "https://supportgowhere.life.gov.sg/",
    image:
      "https://supportgowhere.life.gov.sg/static/media/logo_with_name.fa38afce.svg",
    description:
      "SupportGoWhere is a one stop portal for individuals and families in Singapore to find support schemes and services with ease.",
  },
  {
    title: "NFTNYC Pizza Campaign",
    link: "https://mintable.app/nftnyc/pizza",
    image: "/images/mintable-pizza.png",
    description:
      "As part of NFT.NYC, Mintable is giving away free NFTs, sponsored by Mastercard, that can be used to redeem slices of cheese pizza in New York City.",
  },
  {
    title: "Mintology",
    link: "https://accounts.mintology.app/",
    image: "/images/mintology-logo.svg",
    description:
      "Mintology allows brands to launch NFT campaigns that are suitable for any target audience, regardless of their familiarity with cryptocurrency. ",
  },
];
