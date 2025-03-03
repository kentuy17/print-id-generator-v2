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

// This is sample data.
const data = {
  user: {
    name: "Admin",
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
    { name: "Dashboard", url: "/dashboard", icon: Layers, route: "dashboard" },
    {
      name: "Tourists",
      url: "/tourists",
      icon: BookOpen,
      subCategories: [
        { title: "View all Tourists", url: "/tourists", route: "tourist" },
        {
          title: "Add Tourist",
          url: "/tourist/create",
          route: "tourist.create",
        },
      ],
    },
    // { name: "Notifications", url: "/notifications", icon: Bell },
    { name: "Navigation", url: "#", icon: Menu },
    { name: "Appearance", url: "#", icon: Paintbrush },
    // { name: "Messages & media", url: "#", icon: MessageCircle },
    // { name: "Language & region", url: "#", icon: Globe },
    // { name: "Accessibility", url: "#", icon: Keyboard },
    // { name: "Mark as read", url: "#", icon: Check },
    { name: "ID Template", url: "/playground", icon: IdCardIcon },
    // { name: "Connected accounts", url: "#", icon: Link },
    // { name: "Privacy & visibility", url: "/profile", icon: Lock },
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
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
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
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
}
