interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "aboutUs",
    children: [
      {
        label: "ted",
        subLabel: "tedSubLabel",
        href: "/",
      },
      {
        label: "tedx",
        subLabel: "tedxSubLabel",
        href: "/",
      },
      {
        label: "tedxavelorne",
        subLabel: "tedxavelorneSubLabel",
        href: "/",
      },
    ],
  },
  {
    label: "event",
    children: [
      {
        label: "dateAndTime",
        subLabel: "dateAndTimeSubLabel",
        href: "/event/",
      },
      // {
      //   label: "Location",
      //   subLabel: "Trending Design to inspire you",
      //   href: "#",
      // },
      {
        label: "agenda",
        subLabel: "agendaSubLabel",
        href: "/event/",
      },
      // {
      //   label: "Registration",
      //   subLabel: "Up-and-coming Designers",
      //   href: "#",
      // },
    ],
  },
  {
    label: "team",
    href: "/team/",
  },
  {
    label: "speakers",
    href: "/speakers/",
  },
  // {
  //   label: "partners",
  //   href: "#",
  // },
  {
    label: "media",
    href: "/media/",
  },
  {
    label: "joinUs",
    children: [
      {
        label: "members",
        subLabel: "membersSubLabel",
        href: "/joinus/team/",
      },
      {
        label: "speakers",
        subLabel: "speakersSubLabel",
        href: "/joinus/speaker/",
      },
      {
        label: "sponsors",
        subLabel: "sponsorsSubLabel",
        href: "/joinus/sponsor/",
      },
    ],
  },
];

export default NAV_ITEMS;
