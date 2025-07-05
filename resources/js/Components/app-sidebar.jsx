"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  User,
} from "lucide-react";

import {
  Bell,
  Check,
  Globe,
  Home,
  Keyboard,
  Link,
  Lock,
  Menu,
  MessageCircle,
  Paintbrush,
  Settings,
  Video,
  Layers,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { NavSecondary } from "@/components/nav-secondary";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { IdCardIcon } from "@radix-ui/react-icons";

// import { usePage } from "@inertiajs/react";
import { checkIfUserIsAdmin } from "@/lib/utils";

// This is sample data.
const data = {
  user: {
    name: "-----",
    email: localStorage.getItem("email"),
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "QualityLeads",
      logo: GalleryVerticalEnd,
      plan: "BPO",
    },
    {
      name: "Siquijor",
      logo: AudioWaveform,
      plan: "Local Govt Unit",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: Layers,
      route: "dashboard",
      roles: ["admin", "operator"],
    },
    {
      name: "Tourists",
      url: "/tourists",
      icon: BookOpen,
      subCategories: [
        {
          title: "Show all",
          url: "/tourists",
          route: "tourist",
        },
        {
          title: "Add Tourist",
          url: "/tourist/create",
          route: "tourist.create",
        },
      ],
      roles: ["admin", "operator"],
    },

    {
      name: "Events",
      icon: Video,
      subCategories: [
        {
          title: "Show all",
          url: "/events",
          route: "events",
        },
        {
          title: "New Event",
          url: "/event/create",
          route: "event.create",
        },
      ],
      roles: ["admin", "operator"],
    },
    {
      name: "ID Template",
      url: "/id-templates",
      icon: IdCardIcon,
      route: "id-templates",
      roles: ["admin"],
    },
    {
      name: "Reports",
      url: "/reports",
      icon: PieChart,
      route: "reports",
      roles: ["admin"],
    },
    // {
    //   name: "Appearance",
    //   url: "#",
    //   icon: Paintbrush,
    //   route: "appearance",
    //   roles: ["admin", "operator"],
    // },
    {
      name: "Profile Settings",
      url: "/profile",
      icon: Settings,
      route: "profile.edit",
    },
    // {
    //   title: "Models",
    //   url: "#",
    //   icon: Bot,
    //   items: [
    //     {
    //       title: "Genesis",
    //       url: "#",
    //     },
    //     {
    //       title: "Explorer",
    //       url: "#",
    //     },
    //     {
    //       title: "Quantum",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Settings",
    //   url: "#",
    //   icon: Settings2,
    //   items: [
    //     {
    //       title: "General",
    //       url: "#",
    //     },
    //     {
    //       title: "Team",
    //       url: "#",
    //     },
    //     {
    //       title: "Billing",
    //       url: "#",
    //     },
    //     {
    //       title: "Limits",
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Dashboard",
    //   url: "#",
    //   icon: SquareTerminal,
    //   isActive: true,
    //   items: [
    //     {
    //       title: "Overview",
    //       url: "/dashboard",
    //     },
    //     {
    //       title: "Tourist",
    //       url: "/tourist",
    //     },
    //     {
    //       title: "Settings",
    //       url: "#",
    //     },
    //   ],
    // },
    // { name: "Connected accounts", url: "#", icon: Link },
    // { name: "Privacy & visibility", url: "/profile", icon: Lock },
    // { name: "Messages & media", url: "#", icon: MessageCircle },
    // { name: "Language & region", url: "#", icon: Globe },
    // { name: "Accessibility", url: "#", icon: Keyboard },
    // { name: "Mark as read", url: "#", icon: Check },
    // { name: "Notifications", url: "/notifications", icon: Bell },
  ],
  projects: [
    {
      name: "User Accounts",
      url: "/user-accounts",
      icon: User,
    },
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    // {
    //   name: "Sales & Marketing",
    //   url: "#",
    //   icon: PieChart,
    // },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    // <Sidebar collapsible="icon" {...props}>
    //   <SidebarHeader>
    //     <TeamSwitcher teams={data.teams} />
    //   </SidebarHeader>
    //   <SidebarContent>
    //     <NavMain items={data.navMain} />
    //     <NavProjects projects={data.projects} />
    //   </SidebarContent>
    //   <SidebarFooter>
    //     <NavUser user={data.user} />
    //   </SidebarFooter>
    //   <SidebarRail />
    // </Sidebar>
    <Sidebar {...props}>
      <SidebarHeader className="h-16 border-b border-sidebar-border">
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {checkIfUserIsAdmin() && <NavProjects projects={data.projects} />}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
