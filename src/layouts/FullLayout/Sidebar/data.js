import {
  DashboardOutlined,
  AddToPhotosOutlined,
  AspectRatioOutlined,
  AssignmentTurnedInOutlined,
  AlbumOutlined,
  SwitchCameraOutlined,
  SwitchLeftOutlined,
  DescriptionOutlined,
  AutoAwesomeMosaicOutlined,
  Settings,

} from "@material-ui/icons/";

const Menuitems = [
  {
    title: "Dashboard",
    icon: DashboardOutlined,
    href: "/dashboard",
  },
  {
    title: "Autocomplete",
    icon: AddToPhotosOutlined,
    href: "/autocomplete",
  },
  {
    title: "Buttons",
    icon: AspectRatioOutlined,
    href: "/button",
  },
  {
    title: "Checkbox",
    icon: AssignmentTurnedInOutlined,
    href: "/checkbox",
  },
  {
    title: "Radio",
    icon: AlbumOutlined,
    href: "/radio",
  },
  {
    title: "Slider",
    icon: SwitchCameraOutlined,
    href: "/slider",
  },
  {
    title: "Switch",
    icon: SwitchLeftOutlined,
    href: "/switch",
  },
  {
    title: "Form",
    icon: DescriptionOutlined,
    href: "/form-layouts",
  },
  {
    title: "Table",
    icon: AutoAwesomeMosaicOutlined,
    href: "/table",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default Menuitems;
